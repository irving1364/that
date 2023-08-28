import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import OrderData from "../components/Cart/OrderData";

import imageProduct from "../public/images/products/13.png";
import OrderSumary from "../components/Cart/OrderSummary";
import PaymentMethod from "../components/Cart/PaymentMethod";
import ProductsStore from "../components/ProductsStore";


import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ContainerCheckBox = styled.div({
  marginTop: "6vh",
});

const Sizes = ["0-3M","6 M", "12 M", "18 M", "24 M"];


const Baby = ({ eliminarProducto, productosGlobal, vaciarCarrito, agregarCarrito}) => {
  
  
  const [Products, setProducts] = useState([])
  const [ProductsFiltrados, setProductsFiltrados] = useState([]);
  const [ProductsFinal, setProductsFinal] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const [category1, setCategory1] = React.useState([]);
  const [category2, setCategory2] = React.useState([]);
  const [category3, setCategory3] = React.useState([]);
  const [sizeSelect, setSizeSelect] = useState([]);  
  
  const handleSubmit = (e => {
    e.preventDefault();
    agregarCarrito(prducto[0])
  })
  
  useEffect(() => {
    obtenerDatos();
  }, []);

 const obtenerDatos = async () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfNGEzZjI1YjMxNWU5NTkzZjdlYTIwZDYxOTZhMzAxNTJkYjg1MmIwOTpjc19mMmE2OGNhMDk2NTg1YmY2YTc1NTI5ZDFmMmQwOGZkYTc0YjY0MWI3");
    
    var requestOptions = {
      method: 'POST',
    };

    const data = await fetch("https://happyhour987.com/backendWoocomerceStudio/index.php/auth/getCategoriasBaby", requestOptions)
    const result = await data.json();
    setFilters(result);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const data2 = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/products?category=45&per_page=99", requestOptions)
    const resulta = await data2.json();
    console.log(resulta)
    setProducts(resulta);
    setIsLoad(true)
    setProductsFinal(resulta);
    localStorage.setItem('Products', JSON.stringify(Products))
    console.log(Products)
  }

  const handleChangeCat1 = (event) => {
    console.log(event.target)
    setCategory1(event.target.value);
    setCategory2();
    setCategory3();
    setSizeSelect("");
    getPrductos(event.target.value);
  };

  const handleChangeCat2 = (event) => {
    console.log(event.target)
    setCategory2(event.target.value);
    setCategory1();
    setCategory3();
    setSizeSelect("");
    getPrductos(event.target.value);
  };


  const handleChangeCat4 = (event) => {
    console.log(event.target.innerText)
    setSizeSelect(event.target.innerText);
    getPrductosSize(event.target.innerText);
  };

  const getPrductos = async (categoria) => {
    console.log(categoria)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfNGEzZjI1YjMxNWU5NTkzZjdlYTIwZDYxOTZhMzAxNTJkYjg1MmIwOTpjc19mMmE2OGNhMDk2NTg1YmY2YTc1NTI5ZDFmMmQwOGZkYTc0YjY0MWI3");
   
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const data = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/products?category="+categoria+"&per_page=99", requestOptions)
    const result = await data.json();
    setProducts(result);
    setProductsFiltrados([]);
    setProductsFinal(result);    
    localStorage.setItem('Products', JSON.stringify(Products))
    
  }

  const getPrductosSize = (size) => {
    console.log(size)
    setProductsFiltrados([]); 
    Products.map(function(prod) {
      if(prod.attributes.length > 0){
        prod.attributes[0].options.map(function(item) {
          
          if(item === size){
            ProductsFiltrados.push(prod);
          }
        })
        
      }          
    });
    console.log(ProductsFiltrados)
    setProductsFinal(ProductsFiltrados);
    localStorage.setItem('Products', JSON.stringify(Products))

  }

  
  
  const [values, setValues] = useState([
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 8,
      color: "black",
    },
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 12,
      color: "black",
    },
    {
      state: true,
      img: imageProduct,
      name: "Porem ipsum Porem ipsum ",
      size: "s",
      amount: 1,
      price: 5,
      color: "black",
    },
  ]);

  if (isLoad) {
  return (
    <>
      <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
            }}
            className="nav-bar"
          >
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} className="mt-10">

          </Grid>
          <Grid item xs={11} md={10}>
            <Grid container columnSpacing={4} justifyContent={"space-around"}>
              <Grid item xs={12} md={3}>
                
                <div>
                  <span>
                      <h1 className="font-semibold text-2xl">Filters</h1>
                  </span>  
                  <ContainerCheckBox>
                      <Grid container rowSpacing={4}>
                      
                        <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id="demo-simple-select-label">Girl</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category1}
                          label="category1"
                          onChange={handleChangeCat1}
                        >
                          
                          {filters.girl.map((item) => (
                              <MenuItem
                                key={item.id}
                                value={item.id}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                      

                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id="demo-simple-select-label">Boy</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category2}
                          label="category2"
                          onChange={handleChangeCat2}
                        >
                          
                          {filters.boy.map((item) => (
                              <MenuItem
                                key={item.id}
                                value={item.id}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>

                      
                    </Grid>
                </ContainerCheckBox>
            </div>


            <div>
                <span>
                    <h1 className="font-semibold text-2xl">Size</h1>
                </span>  
                <ContainerCheckBox className="pb-6">
                    <Grid container rowSpacing={4}>
                    
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <InputLabel id="demo-simple-select-label">Size</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sizeSelect}
                        label="sizeSelect"
                        onClick={handleChangeCat4}
                      >
                        {Sizes.map((item) => (
                            <MenuItem
                              key={item}
                              value={item}
                            >
                              {item}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>

                    


                    </Grid>
                  </ContainerCheckBox>
              </div>
              </Grid>
              <Grid item xs={12}md={9}>
                
                <ProductsStore products={ ProductsFinal }  agregarCarrito={ agregarCarrito }/>
              
              </Grid>
            </Grid>
            <Grid container columnSpacing={4} justifyContent={"space-around"}>
              <Grid item xs={12} md={6}>
              
              </Grid>
              <Grid item xs={12} md={4}>
              
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </motion.div>
    </>   
  );
};

}
export default Baby;
