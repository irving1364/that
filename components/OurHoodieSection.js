import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import BlackButton from "./BlackButton";

const Container = styled.div({
  width: "100%",
  borderTop: "solid 1px rgb(20,20,20)",
  marginTop: "10vh",
});
const ContainerButton = styled.div({
  width: "100%",
  marginTop: "2vh",
  display: "flex",
  justifyContent: "flex-start",
  marginBottom:'4.5vh'
});
const Tittle = styled.h3({
  fontSize: 35,
  textAlign: "left",
  fontWeight: 500,
});
const Image = styled.img({
  width: "100%",
});
const data = [
  {
    img: "./assets/15.png",
    tittle: "Women",
  },
  {
    img: "./assets/12.png",
    tittle: "Men",
  },
];
const Text = styled.p({
  fontSize: 16,
  margin: 0,
  textAlign: "justify",
  lineHeight: 1.8,
  letterSpacing: " 0.1em",
});
const OurHoodieSection = () => {
  return (
    <>
      <Container className="px-10 py-10">
        <Tittle>Our Hoodie Section</Tittle>
        <Grid container className="mt-8">
        
            
                <Grid item xs={12} md={6}>
                  <Image src="/images/hoodies/15.png" />
                  <ContainerButton>
                    <BlackButton>
                        EXPLORE WOMEN INSULATED JACKETS
                    </BlackButton>
                  </ContainerButton>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Image src="/images/hoodies/12.png" />
                  <ContainerButton>
                    <BlackButton>
                        EXPLORE MEN INSULATED JACKETS
                    </BlackButton>
                  </ContainerButton>
                </Grid>
         
          <Grid item xs={12}>
            <br />
            <Text>
              Our hoodie section features gym hoodies for both men and women. So
              whether you're looking to show off your figure or just stay warm,
              our collection has something for everyone! With a range of colors
              and styles, we know you'll find something that catches your eye.
              In addition, our designs literally slay!.
            </Text>
          </Grid>
          <Grid item xs={12}>
            <Text>
              Wear our hoodies to the gym for a daily dose of motivation as
              well! Every time you look in the mirror, you'll see a statement
              that helps you stay motivated and continue working out!.
            </Text>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default OurHoodieSection;
