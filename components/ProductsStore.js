import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect, Component} from 'react'
import Link from "next/link";
import Head from 'next/head';
import { useRouter} from 'next/router';

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
  height: "33vh",
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
const Cart = styled.p({
    fontSize: "2vh",
    margin: 0,
    textAlign: "right",
    marginTop: "-1.3rem"
  });


  


export default function ProductsStore({ products, agregarCarrito }) {

  const products1 = JSON.parse(localStorage.getItem("Products")) ?? [];
		
 
  console.log(	products	)
  return (
    
    <>
      <Grid container className="px-10 py-0">
      
      
        <Grid item xs={12} className="">
          <Grid container columnSpacing={4} rowSpacing={5}>
            
          {products.map((item, index) => {
              return (
                <Grid item xs={12} md={3} key={index} >
                  
                  <Link 
                            legacyBehavior 
                            href={`products/${item.name}`}
                            >
                    <Card>
                   
                      
                          <ContainerImage>

                          {!item.images[0]
                              ? <p>No tiene imagen </p>
                              : <Image src={item.images[0].src} />
                          }

                            
                          </ContainerImage>
                        
                        
                        <TittleCard>{item.name}</TittleCard>
                        <Price>${item.sale_price}</Price>
                      
                        {item.stock_quantity > 0 &&
                          <Cart> 
                            <button
                              className="btn"
                              onClick={() => agregarCarrito(item)}
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                              </svg>               
                            </button>
                          </Cart>
                        }
                       
                      
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

