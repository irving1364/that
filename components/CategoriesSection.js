import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from 'react'
import Link from "next/link";



const Card = styled.div({
  marginTop: "15vh",
  width: "100%",
  position: "relative",
  ":hover": {
    "& >div> img": {
      transform: "scale(1.1)",
    },
  },
});
const Image = styled.img({
  width: "100%",
  transition: "all 0.4s",
});
const ContainerImage = styled.div({
  width: "100%",
  height: "90vh",
  overflow: "hidden",
  marginBottom: "2vh",
});
const ContainerText = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  cursor: "pointer",
});
const Arrow = styled.img({
  width: "4vh",
});
const Tittle = styled.p({
  fontSize: 50,
  color: "white",
  textTransform: "uppercase",
});
const Button = styled.div({
  marginBottom: "10%",
  backgroundColor: "white",
  fontSize: 12,
  cursor: "pointer",
  padding: 10,
});


const data = [
  {
    img: "/images/Categories/13.png",
    tittle: "Men",
  },
  {
    img: "/images/Categories/32.png",
    tittle: "Kids",
  },
  {
    img: "/images/Categories/6.png",
    tittle: "Women",
  }
];


const CategoriesSection = ({categories}) => {
  console.log(categories)
    
  return (
    <>
      <Grid container>
        {categories.map((item, index) => {

          
          

          if (item.id === 40) {
            return <Grid item xs={12} md={4}>
                <Link key={item.id}  legacyBehavior href={`Kids`}>
                  <Card>
                    <ContainerImage>
                      <Image src={item.image.src} />
                    </ContainerImage>
                    <ContainerText>
                      <p></p>
                      <Tittle>{item.name}</Tittle>
                      <Button>
                        Shop {item.name}
                        
                      </Button>
                    </ContainerText>
                  </Card>
                  </Link>
              </Grid>
          } 

          if (item.id === 16) {
            return <Grid item xs={12} md={4}>
                <Link key={item.id}  legacyBehavior href={`Mens`}>
                  <Card>
                    <ContainerImage>
                      <Image src={item.image.src} />
                    </ContainerImage>
                    <ContainerText>
                      <p></p>
                      <Tittle>{item.name}</Tittle>
                      <Button>
                        Shop {item.name}
                        
                      </Button>
                    </ContainerText>
                  </Card>
                  </Link>
              </Grid>
          } 

          if (item.id === 31) {
            return <Grid item xs={12} md={4}>
                <Link key={item.id}  legacyBehavior href={`Women`}>
                  <Card>
                    <ContainerImage>
                      <Image src={item.image.src} />
                    </ContainerImage>
                    <ContainerText>
                      <p></p>
                      <Tittle>{item.name}</Tittle>
                      <Button>
                        Shop {item.name}   
                      </Button>
                    </ContainerText>
                  </Card>
                </Link>  
              </Grid>
          } 

          

       
          
        })}
      </Grid>
    </>
  );
};


  

export default CategoriesSection;

