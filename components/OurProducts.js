import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const link = styled.a({
  width: "100%",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 400,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const Tittle = styled.h3({
  fontSize: 35,
  textAlign: "left",
  fontWeight: 500,
});
const Card = styled.div({
  width: "100%",
    marginBottom: "1vh",
});
const Image = styled.img({
  width: "100%",
  height: "auto",
});
const ContainerImage = styled.div({
  width: "100%",
  height: "55vh",
  overflow: "hidden",
  marginBottom: "1vh",
});
const TittleCard = styled.p({
  fontSize: "2.5vh",
  margin: 0,
  textAlign: "left",
});
const Price = styled.p({
  fontSize: "2vh",
  margin: 0,
  textAlign: "left",
});

const OurProducts = ({ bestSeeler }) => {
  console.log(bestSeeler)
  return (
    <>
      <Grid container className="px-10 py-10">
       
       
        <Grid item xs={12} className="mt-10">
          <Grid container columnSpacing={4} rowSpacing={5}>
            {bestSeeler.map((item, index) => {
              return (
                <Grid item xs={12} md={3} key={index} >
                  <Link legacyBehavior 
                    href={`products/${item.name}`}>
                    
                      <Card>
                        <ContainerImage>
                          {!item.images[0]
                              ? <p>No tiene imagen </p>
                              : <Image src={item.images[0].src} />
                          }
                        </ContainerImage>
                        <TittleCard>{item.name}</TittleCard>
                        <Price>${item.sale_price}</Price>
                      </Card>
                      
                   </Link>  
                </Grid>
              );
            })}



          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default OurProducts;
