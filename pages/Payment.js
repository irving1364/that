import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import OrderData from "../components/Cart/OrderData";

import imageProduct from "../public/images/products/13.png";
import OrderSumary from "../components/Cart/OrderSummary";
import PaymentMethod from "../components/Cart/PaymentMethod";
import FormPay from "../components/Cart/FormPay";

const ContainerImage = styled.div({
  position: "relative",
});

const Image = styled.img({
  height: "99.9vh"
});

const Text = styled.p({
  color: "white",
  fontWeight: 700,
  fontSize: "1.6vw",
  width: "100%",
  textAlign: "left",
});
const ContainerText = styled.div({
  position: "absolute",
  paddingLeft: "2vw",
  right: 0,
  left: 0,
  bottom: 0,
});

const Payment = ({ eliminarProducto, productosGlobal, vaciarCarrito, totalPriceProds}) => {


  const [totalPrice, setIstotalPrice] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  
  useEffect(() => {
    setIstotalPrice(totalPriceProds)
    setIsLoad(true);
  }, []);
if(isLoad){
  return (
    <>
    <Grid container justifyContent={"center"} className="mb-10">
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={11} md={12}>
        <Grid container columnSpacing={4} justifyContent={"space-around"}>
          <Grid item xs={12} md={6}>

     
            <FormPay vaciarCarrito = { vaciarCarrito }
                     totalPriceProds = { totalPriceProds }
            />
          </Grid>
          <Grid item xs={12}md={6} className="mt-14">
            <ContainerImage>
                <Image src="/images/bgPayment.webp" />
                <ContainerText>
                  <Text>
                    “Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et”
                  </Text>
                  <Text style={{ fontWeight: 400 }}>Gorem ipsum</Text>
                </ContainerText>
              </ContainerImage>
            {/*<FormPay vaciarCarrito = { vaciarCarrito }/>*/}
            
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
} 
};
export default Payment;
