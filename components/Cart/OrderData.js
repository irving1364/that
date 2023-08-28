import React, { useEffect ,useState} from "react";
import { Grid } from "@mui/material";
import { BLUECOLOR } from "../../colors/Colors";
import ProductCart from "./ProductCart";
import { styled } from "@mui/material/styles";
import styledE from "@emotion/styled";
import imageProduct from "../../public/images/products/13.png";

const Tittle = styledE.p({
  fontSize: "3vh",
  textAlign: "left",
  color: BLUECOLOR,
  fontWeight: 700,
});

const dataProduct = [
  {
    state: true,
    img: imageProduct,
    name: "Porem ipsum Porem ipsum ",
    size: "s",
    amount: 1,
    price: "10",
    color: "black",
  },
  {
    state: true,
    img: imageProduct,
    name: "Porem ipsum Porem ipsum ",
    size: "s",
    amount: 1,
    price: "10",
    color: "black",
  },
  {
    state: true,
    img: imageProduct,
    name: "Porem ipsum Porem ipsum ",
    size: "s",
    amount: 1,
    price: "10",
    color: "black",
  },
];

const OrderData = ({ eliminarProducto, productosGlobal, vaciarCarrito}) => {
    const [allValue,setAllValue]=useState(true)

    
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Tittle>Item sumary </Tittle>
        <br></br>
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
      <Grid item xs={12}>
        <div style={{border: 'solid 1px rgb(232,232,232)', borderRadius:6,paddingBottom:'1vw'}}>
            {productosGlobal.map((item, index) => (
                <ProductCart dataProduct={item} eliminarProducto={ eliminarProducto } />
            ))}   
        </div>
      </Grid>
    </Grid>
  );
};
export default OrderData;
