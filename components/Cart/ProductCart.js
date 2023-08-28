import React from "react";
import { styled } from "@mui/material/styles";
import styledE from "@emotion/styled";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { BLUECOLOR } from "../../colors/Colors";
import { Grid } from "@mui/material";



const ImageProduct = styledE.img({
  width: "100%",
  height: "auto",
  borderRadius: 5,
});
const NameProduct = styledE.p({
  margin: 0,
  textAlign: "left",
});
const PriceProduct = styledE.p({
  fontSize: "2vh",
  color: BLUECOLOR,
  fontWeight: 700,
  margin: 0,
});
const SubTitle = styledE.p({
  fontSize: "2vh",
  fontWeight: 600,
  margin: "1vw 0",
  textAlign: "left",
});
const ButtonSize = styledE.div({
  padding: "0.5vw 2vw",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  borderRadius: 200,
  border: "solid 1px rgb(218, 218, 218, 1)",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  width: "5%",
});
const Button = styledE.div({
  width: "2vw",
  height: "2vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
});
const Color = styledE.div({
  width: "1.5vh",
  height: "1.5vh",
  borderRadius: 500,
});
const Sale = styledE.p({
  position: "absolute",
  backgroundColor: "red",
  top: "-0.8vw",
  left: "0.5vw",
  fontSize: "0.8vw",
  color: "white",
  padding: "0.4vw 1vw",
});
const Icon = styledE.img({
  height: "2vw",
  width: "2vw",
});
const ContainerImage = styledE.div({
  position: "relative",
});
const ProductCart = ({ dataProduct,  eliminarProducto}) => {
  
  const handleSubmit = (cod) => {
    eliminarProducto(cod)
  }
  
  return (
    <Grid container alignItems={"center"} style={{ marginTop: "2vw" }}>
      <Grid item xs={1}>
        
      </Grid>
      <Grid item xs={4} md={3}>
        <ContainerImage>
          <ImageProduct src={dataProduct.images[0].src}  />
          <Sale>Sale</Sale>
          <div style={{backgroundColor:"#000", color:"#fff",paddingRight:"3px",paddingLeft:"3px", position: "absolute", top: "0.5vh", right: "0.8vh" }}>
          <a  onClick={() => handleSubmit(dataProduct.cod)} >X</a> 
          </div>
        </ContainerImage>
      </Grid>
      <Grid item xs={6} md={7} style={{marginLeft:'1vw'}}>
        <NameProduct>{dataProduct.name} </NameProduct>
        /
        <SubTitle>Size</SubTitle>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={2}md={2}>
            <ButtonSize>{dataProduct.size}</ButtonSize>
          </Grid>
          <Grid item xs={3} md={3}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"flex-start"}
              style={{
                border: "solid 1px rgb(218, 218, 218, 1)",
                borderRadius: 600,
              }}
            >
              <Grid item xs={4}>
                <p style={{ fontWeight: 300, textAlign: "right"}}></p> 
              </Grid>
              <Grid item xs={4}>
                <p style={{ fontWeight: 600, margin: 0 }}>x </p>
              </Grid>
              <Grid item xs={4}>
                { dataProduct.quantity }
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <PriceProduct>${dataProduct.price }</PriceProduct>
            <PriceProduct>${dataProduct.totalPrice }</PriceProduct>
          </Grid>
        </Grid>
        
        
      </Grid>
    </Grid>
  );
};
export default ProductCart;
