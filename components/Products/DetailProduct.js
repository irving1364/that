import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Divider, Grid } from "@mui/material";
import { BLUECOLOR, YELLOWCOLOR } from "../../colors/Colors";
import { PrincipalFont } from "../../fonts/Fonts";
import Card from "./Card";

const Title = styled.p({
  textAlign: "left",
  fontSize: "3.5vh",
  fontWeight: 600,
});
const ShortText = styled.p({
  textAlign: "left",
  margin: 0,
  fontSize: "0.8vw",
  marginLeft: "0.8vw",
});


const YelowText = styled.p({
  color: YELLOWCOLOR,
  fontSize: "2vh",
});
const Icon = styled.img({
  width: "4vh",
  height: "4vh",
});
const IconRegla = styled.img({
  width: "2.5vh",
});
const SubTitle = styled.p({
  fontSize: "2vh",
  fontFamily: PrincipalFont,
  fontWeight: 600,
  margin: "1vw 0",
  textAlign: "left",
});
const Button = styled.div({
  width: "4vh",
  height: "4vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `solid 1px ${BLUECOLOR}`,
  borderRadius: 200,
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: BLUECOLOR,
    color: "white",
  },
});
const ButtonSize = styled.div({
  padding: "0.5vw 2vw",
  borderRadius: 200,
  marginRight: " 0.5vw",
  border: "solid 1px rgb(218, 218, 218, 1)",
  cursor: "pointer",
  color: BLUECOLOR,
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: BLUECOLOR,
    color: "white",
  },
});
const Price = styled.p({
  fontSize: "2.5vh",
  fontFamily: PrincipalFont,
  fontWeight: 700,
  textAlign: "left",
});
const ContainerSizes = styled.div({
  display: "flex",
  flexDirection: "row",
});
const ContainerMargin = styled.div({
  margin: "1vw 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const ButtonBlue = styled.div({
  borderRadius: 200,
  width: "90%",
  backgroundColor: BLUECOLOR,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  padding:'0.6vh'
});
const ButtonWhite = styled.div({
  borderRadius: 200,
  width: "90%",
  backgroundColor: "rgba(0,0,0,0)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: `solid 1px ${BLUECOLOR}`,
});
const Link = styled.a({
  margin: 0,
  textDecoration: "none",
});
const Sizes = ["S", "M", "L", "XL"];

const DetailProduct = ({ producto, agregarCarrito }) => {
  
  const [selectedSize, setSelecteSize] = useState(0);
  const [amount, setAmount] = useState(1);
  
  const handleSubmit = (producto) => {
    agregarCarrito(producto, selectedSize, amount)
	}

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={10} md={12}>
        <Grid container justifyContent={"flex-start"} alignItems={"center"}>
          <Grid item xs={10} md={8}>
            <Title>{ producto.name }</Title>
          </Grid>
          <Grid item xs={2} md={4}>
            
          </Grid>
          <Grid item xs={2}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
             
            </div>
          </Grid>
          <Grid item xs={2}>
          
          </Grid>
          <Grid item xs={12}>
            <Price>${producto.price}</Price>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <SubTitle>Size</SubTitle>
          </Grid>
          <Grid item xs={12}>
            <ContainerSizes>
              {producto.attributes[0].options.map((item, index) => {
                return (
                  <ButtonSize
                    key={index}
                    style={{
                      backgroundColor:
                        selectedSize === item ? BLUECOLOR : "rgba(0,0,0,0)",
                      color: selectedSize === item ? "white" : BLUECOLOR,
                    }}
                    onClick={() => setSelecteSize(item) }
                  >
                    {item}
                  </ButtonSize>
                );
              })}
            </ContainerSizes>
          </Grid>
          <Grid item xs={12}>
            <ContainerMargin style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "1vw" }}>               
              </div>
              {!producto.downloads[0]
						    ? <></>
    						: <a key={producto.downloads[0].file} href={(producto.downloads[0].file)} target=" _blank" > <YelowText>Size Guide</YelowText> </a> 
						  }
            </ContainerMargin>
          </Grid>
          <Grid item xs={12}>
            <SubTitle>Stock: {producto.stock_quantity}</SubTitle>
          </Grid>
          <Grid item xs={4} md={2}>
            <Grid container alignItems={"center"} justifyContent={"flex-start"}>
              <Grid item xs={3}>
                <Button onClick={() => setAmount(amount < 2 ? 1 : amount - 1)}>
                  <p style={{ margin: 0 }}>-</p>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <p
                  style={{
                    fontFamily: PrincipalFont,
                    fontWeight: 600,
                    margin: 13,
                  }}
                >
                  {amount}
                </p>
              </Grid>
              <Grid item xs={4}>
                

              {producto.stock_quantity != amount &&
                  <Button onClick={() => setAmount(amount + 1)}>
                    <p style={{ margin: 0 }}>+</p>
                  </Button>
                }

                
              
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={12} />
          <Grid item xs={12} md={8}>
            <div style={{ margin: "2vw 0" }}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <Grid item xs={6} md={6}>
                  <Link href="/cart">
                    <ButtonBlue>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "white",
                          margin: "1.2vw 0",
                        }}
                      >
                        Check Out
                      </p>
                      <div>
                        
                      </div>
                    </ButtonBlue>
                  </Link>
                </Grid>

                {producto.stock_quantity > 0 &&
                  <Grid item xs={6} md={6}>
                    <ButtonWhite onClick={() => handleSubmit(producto)}>
                      <p
                        style={{
                          fontWeight: 600,
                          color: BLUECOLOR,
                          margin: "1.2vw 0",
                        }}
                      >            
                        Add to cart
                      </p>
                    </ButtonWhite>
                  </Grid>
                }

                
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12}md={10}>
            <br />
            <Card />
            <br /> <br />
              
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DetailProduct;
