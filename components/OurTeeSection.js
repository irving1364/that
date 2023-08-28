import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
const Image = styled.img({
  width: "100%",
  height: "auto",
});
const Container = styled.div({
  width: "100%",
  borderTop: "solid 1px rgb(20,20,20)",
  marginTop: "10vh",
});

const Tittle = styled.h3({
  fontSize: 35,
  textAlign: "left",
  fontWeight: 500,
});
const Card = styled.div({
  display: "inline-block",
  height: "99.4%",
  position: "relative",
  ":hover": {
    "& >div": {
      opacity: 1,
      cursor: "pointer",
    },
  },
});
const CardTittle = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  fontFamily: "Inter",
  background: "#F0F0F0",
  padding: 10,
  margin: 0,
  textAlign: "center",
});
const ContainerText = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(5, 5, 5, 0.7)",
  color: "#FFFFFF",
  opacity: 0,
  fontFamily: "Inter",
  transition: "opacity 0.5s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});
const Text = styled.p({
  textAlign: "justify",
  width: "85%",
  fontSize: "2vh",
});
const data = [
  {
    img: "/images/tee/25.webp",
    text: "Whether you're a beer enthusiast or just like to have a good time, our beer tees will help you express your love for all things brew. The fun, lighthearted designs will make you stand out in a crowd. Plus, they're sure to be conversation starters!",
    tittle: "Beer Tees",
  },
  {
    img: "/images/tee/26.webp",
    text: "Show off your love for the ocean with our surf tees! These stylish designs are perfect for hitting the beach or just relaxing in style. Plus, they make great gifts!",
    tittle: "Surf Tees",
  },
  {
    img: "/images/tee/29.webp",
    text: "Our music tees are perfect for the music lover in your life! Show off your favorite band or artist with these stylish designs. The vibrant colors and creative graphics will make a statement wherever you go. Plus, our music tees are lightweight and comfortable, so you can enjoy them all day long.",
    tittle: "Music Tees",
  },
  {
    img: "/images/tee/24.webp",
    text: "If you love coffee, then our coffee tees are perfect for you! So show your enthusiasm with these stylish and vibrant designs. From funny sayings to classic logos, we have something for every coffee lover.",
    tittle: "Coffe Tees",
  },
  {
    img: "/images/tee/17.webp",
    text: "Let your love for wine shine through with these stylish designs! With a variety of colors and sayings, our wine tees are perfect for any occasion. So enjoy them while you relax at home or out on the town.",
    tittle: "Wine Tees",
  },
];
const Link = styled.a({
  width: "100%",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 400,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const OurTeeSection = () => {
  return (
    <Container className="px-10 py-10">
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} >
          <Tittle>Our Tee Section</Tittle>
          <br></br>  
        </Grid >
        {data.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={2}>
                <Link href="product">
                                  <Card>
                  <Image src={item.img} />
                  <CardTittle>{item.tittle}</CardTittle>
                  <ContainerText>
                    <Text>{item.text}</Text>
                  </ContainerText>
                </Card>
                </Link>

              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};
export default OurTeeSection;
