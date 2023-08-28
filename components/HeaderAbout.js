import React from "react";
import styled from "@emotion/styled";
import image from "/public/images/1.webp"
import { Grid } from "@mui/material";
import { PrincipalFont } from "../fonts/Fonts";
import styles from '../styles/components/Header.module.css';
const Icon = styled.img({
  width: 18,
  height: 26,
  borderRadius: 100,
});
const ContainerIcon = styled.div({
  padding: "0.6vh",
  border: "solid 2px white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 400,
  width: 40,
  height: 40,
  marginTop: "2vh",
});
const ImageBackground = styled.div({
  width: "100%",
  backgroundSize: "cover" /* Ajusta el tamaño de la imagen al div */,
  backgroundPosition: "center" /* Centra la imagen en el div */,
  height: "100vh",
});
const ShadowContent = styled.div({
  height: "100%",
  background:
    " linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(50,50,50,0.5), rgba(0,0,0,0.4))",
});
const Title = styled.p({
  margin: 0,
  fontFamily: PrincipalFont,
  fontWeight: 700,
  lineHeight: "9vh",
  color: "white",
  fontSize: "10vh",
  textAlign: "left",
  borderBottom: "solid 2px rgb(255,255,255)",
paddingBottom:'2vh'
});
const Text = styled.p({
  fontFamily: PrincipalFont,
  textAlign: "justify",
  fontSize: "2.5vh",
  color: "white",
});
const ContainerText = styled.div({
  position: "absolute",
  bottom: "-5vh",
  left: 0,
  right: 0,
  padding: "5vh",
});

const HeaderAbout = () => {
  return (
    <>
      <ImageBackground className={styles.bgImage}>
        <ShadowContent>
          <ContainerText>
            <Grid container>
              <Grid item xs={11}>
                <Title>
                  Talk about
                  <br /> your brand
                </Title>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={11}>
                <Text>
                  Share information about your brand with your customers.
                  <br /> Describe a product, make announcements, or welcome
                  customers to your store.
                </Text>
              </Grid>
              <Grid item xs={12} md={1}>
                <ContainerIcon>
                    
                </ContainerIcon>
              </Grid>
            </Grid>
          </ContainerText>
        </ShadowContent>
      </ImageBackground>
    </>
  );
};
export default HeaderAbout;
