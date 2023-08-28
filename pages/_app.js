import { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import '../styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./App.css";
import { usePathname, useRouter } from 'next/navigation';

function MyApp({ Component, pageProps }) {
	const [productosGlobal, setProductosGlobal] = useState([]);
	const [totalProds, setTotal] = useState(0);
	const [totalPriceProds, setTotalPriceProds] = useState(0);
	const router = useRouter();
	const pathname = usePathname(); // to use pathname as motion key

	const CustomToastWithLink = () => (
		<div>
		  <Link legacyBehavior href="/cart">
			<a>See small car</a>
		  </Link>
		</div>
	  );

	useEffect(() => {
		const productosGlobalLS = JSON.parse(localStorage.getItem("productosGlobal")) ?? [];
		setProductosGlobal(productosGlobalLS);
		localStorage.setItem('totalProds', productosGlobalLS.length)
	}, [])

	useEffect(() => {
		localStorage.setItem('productosGlobal', JSON.stringify(productosGlobal))
		localStorage.setItem('totalProds', productosGlobal.length)		
		const productos = JSON.parse(localStorage.getItem("productosGlobal")) ?? [];
		var total = 0;
		for(var u = 0; u < productos.length; u++) {
		  total = total + parseInt(productos[u].totalPrice) 
		}
		setTotalPriceProds(total)
	}, [productosGlobal])

	const random = () => {
		return Math.floor(Math.random() * max);
	}

	const agregarCarrito = (producto, size, cantidad) =>{
		if(size){
			producto.size = size;
		} 
		if(producto.price === ""){
			producto.price = 0 
		}
		if(cantidad){
			producto.quantity = cantidad;
			producto.totalPrice = cantidad * producto.price 
		}else{
			producto.quantity = 1;
			producto.totalPrice = producto.price 
		} 

		producto.cod = Math.floor(Math.random() * 12345);
		setProductosGlobal([...productosGlobal, producto]);
		toast(CustomToastWithLink);
	}

	const vaciarCarrito = () =>{
		setProductosGlobal([]);	
	}

	const eliminarProducto = (cod) => {
		const productosActualizado = productosGlobal.filter((articulo) => articulo.cod !== cod);
		setProductosGlobal(productosActualizado);
		toast("cart item is removed");
	}

	return (
		<>
		<AnimatePresence  >
			<motion.div 
				key={pathname}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.75,
				}}
				variants={{
						initialState: {
						opacity: 0,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					},
						animateState: {
						opacity: 1,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					},
					exitState: {
						clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
					},
				}}
				className="base-page-size"
			
				>
				<Layout>
					<Component 
					{...pageProps} 
						productosGlobal={productosGlobal} 
						agregarCarrito={agregarCarrito} 
						eliminarProducto={eliminarProducto}
						vaciarCarrito={vaciarCarrito}
						totalPriceProds={totalPriceProds}
					/>
					<ProgressBar
							height="4px"
							color="#f8a302"
							options={{ showSpinner: true }}
							shallowRouting
						/>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</Layout>
			
				
			</motion.div>
		</AnimatePresence>
		</>
	);
}

export default MyApp;