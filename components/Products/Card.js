import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
/*import { PrincipalFont } from "../../../fonts/Fonts";*/
const Container = styled.div({
  boxShadow: " 0px 4px 17px 2px rgba(0, 0, 0, 0.08)",
  borderRadius: 11,
  padding: "2vw 0.6vw",
});
const Title = styled.p({
  color: "rgb(0,0,0)",
  /*fontFamily: PrincipalFont,*/
  fontWeight: 600,
  textAlign: "left",
  marginTop: 0,
});
const Text = styled.p({
  color: "rgba(94, 94, 94, 1)",
  textAlign: "left",


});
const Icon = styled.img({
  width: "3vh",
  height: "auto",
});
const Card = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Grid container alignItems={"flex-start"}>
            <Grid item xs={2}md={1}>
              
            </Grid>
            <Grid item xs={10}md={11}>
              <Title>Free shipping</Title>
              <Text>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
                <br />
                vulputate libero et velit interdum, ac aliquet odio
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}md={1}>
              
            </Grid>
            <Grid item xs={10}md={11}>
              <Title>Return policy</Title>
              <Text>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                <br /> vulputate libero et velit interdum, ac aliquet odio
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Card;
