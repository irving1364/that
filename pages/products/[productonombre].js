import Head from 'next/head';
import React, { useState, useEffect, Component} from 'react'

import Carousel from '../../components/Products/Carousel';
import { Grid } from "@mui/material";
import DetailProduct from '../../components/Products/DetailProduct';

const Product = ({prducto, agregarCarrito, productosGlobal}) => {
	const [product, setProduct] = useState(prducto); 	

	return (
	  <>	  	
		<div style={{ marginTop: "1vh" }}>
			<Grid container justifyContent={"space-between"}>
			<Grid item xs={12} md={6}>
				<Carousel producto = { product }/>
			</Grid>
			<Grid item xs={12} md={5}>
				<DetailProduct producto = { product } agregarCarrito={ agregarCarrito } />
			</Grid>
			
			</Grid>
		</div>
	  </>
	);
  };

export const getServerSideProps= async (context) => {
    
	var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfNGEzZjI1YjMxNWU5NTkzZjdlYTIwZDYxOTZhMzAxNTJkYjg1MmIwOTpjc19mMmE2OGNhMDk2NTg1YmY2YTc1NTI5ZDFmMmQwOGZkYTc0YjY0MWI3");
      
    var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
    
    const data = await fetch("http://216.246.47.150/~ruyqmicw/wordpress/wp-json/wc/v3/products?search=" + context.query.productonombre + "", requestOptions);
    const result = await data.json();
    
	return {
      props: {
            prducto : result[0]
      },
    };
};  

export default Product;
