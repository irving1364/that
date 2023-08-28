import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import OrderData from "../components/Cart/OrderData";

import imageProduct from "../public/images/products/13.png";
import OrderSumary from "../components/Cart/OrderSummary";
import PaymentMethod from "../components/Cart/PaymentMethod";
import FormPay from "../components/Cart/FormPay";

const Cart = ({ eliminarProducto, productosGlobal, vaciarCarrito, totalPriceProds, Button}) => {

  console.log(Button);  
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
  return (
    <>
      
    
    <Grid container justifyContent={"center"} className="mb-10">
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={11} md={10}>
        <Grid container columnSpacing={4} justifyContent={"space-around"}>
          <Grid item xs={12} md={6}>
            <OrderData eliminarProducto = { eliminarProducto } 
                       productosGlobal = { productosGlobal } 
                       vaciarCarrito = { vaciarCarrito } 
            />
          </Grid>
          <Grid item xs={12}md={4} className="mt-14">
            <OrderSumary totalPriceProds = { totalPriceProds }/>
            {/*<FormPay vaciarCarrito = { vaciarCarrito }/>*/}
            <br></br>
            <PaymentMethod />
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
  </>  
  );
};
export default Cart;
