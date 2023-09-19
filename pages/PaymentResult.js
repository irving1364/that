import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { AiFillCheckCircle } from "react-icons/ai";
import { BLUECOLOR } from "../colors/Colors";
import Link from "next/link";
import { useEffect, useState } from "react";

const Container = styled(Grid)({
  height: "100vh",
});

const Title = styled.p({
  fontSize: "5vh",
  color: BLUECOLOR,
  fontWeight: 700,
  margin: 0,
  textAlign: "center"
});
const Card = styled.div({
  width: "100%",
  boxShadow: "0 5px 10px 0 rgba(0, 23, 48,0.1)",
  borderRadius: 4,
  padding: "0.5vh",
  paddingBottom: "4vh",
  paddingTop: "4vh",
});
const ContainedButton = styled.div({
  padding: "2vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: BLUECOLOR,
  color: "white",
  borderRadius: 5,
  cursor: "pointer",
});

const Text = styled.p({
    textAlign: 'left',
    color:'rgb(100,100,100)'
})
const TextStrong = styled.p({
    textAlign: 'right',
    fontWeight: 700,
        color:'rgb(30,30,30)'
})
const PaymentResult = () => {
  const [data, setData] = useState();
  
  
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("operacion")));
    console.log(JSON.parse(localStorage.getItem("operacion")))
    localStorage.removeItem("operacion");
  
    setIsLoad(true);
  }, []); 

  if(isLoad){
  
  return (
    <>
      <Container container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} md={4}>
          <Card>
            <Grid container justifyContent={"space-around"} rowSpacing={2}>
              <Grid item xs={8} md={1}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <AiFillCheckCircle style={{ fontSize: "5rem", color: BLUECOLOR }}/>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Title>Payment success!</Title>
                          </Grid>
                          <Grid item xs={12}>
                            
                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Transition:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.number }</TextStrong>
                                      </Grid>
                                  </Grid>
                                
                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Date created:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.date_created }</TextStrong>
                                      </Grid>
                                  </Grid>

                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Payment Method:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.payment_method }</TextStrong>
                                      </Grid>
                                  </Grid>

                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Currency:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.currency }</TextStrong>
                                      </Grid>
                                  </Grid>

                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Total:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.total }</TextStrong>
                                      </Grid>
                                  </Grid>

                                  <Grid container justifyContent={"space-around"}>
                                      <Grid item xs={5}>
                                        <Text>Status:</Text>
                                      </Grid>
                                      <Grid item xs={5}>
                                        <TextStrong>{ data.status }</TextStrong>
                                      </Grid>
                                  </Grid>  
                          
                             
                              
                          </Grid>
              
              <Grid item xs={10} md={10}>
                <Link legacyBehavior href={"/"}>
                  <ContainedButton>Back to shop</ContainedButton>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
};
export default PaymentResult;