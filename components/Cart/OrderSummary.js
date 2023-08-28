import React,{useState,useEffect} from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BLUECOLOR } from "../../colors/Colors";
import { PrincipalFont } from "../../fonts/Fonts";
import Link from "next/link";

const Icon = styled.img({
  width: "2vw",
  height: "2vw",
});
const ButtonBlue = styled.div({
  borderRadius: 200,
  padding: "1vh",
  backgroundColor: BLUECOLOR,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const Tittle = styled.p({
  color: BLUECOLOR,
  fontWeight: 700,
  textAlign: "left",
});
const Text = styled.p({
  textAlign: "left",
  fontSize: "2.8vh",
  marginTop:'1.8vh',
  fontWeight: 700,
});
const PriceUnit = styled.p({
  fontWeight: 700,
  textAlign: "right",
});
const PriceTotal = styled.p({
  fontWeight: 700,
  textAlign: "right",
  fontSize: "2.8vh",
  marginTop:'1.8vh'
});
const OrderSumary = ({ data, totalPriceProds } ) => {
      const [count, setCount] = useState(0);
      const [price,setPrice]=useState(0)

    console.log(totalPriceProds)

  useEffect(() => {

  }, []);
  return (
    <><div style={{
        padding:'1.4vh 2vw',
        boxShadow:" 0px 4px 17px 2px rgba(0, 0, 0, 0.08)",
        borderRadius: 11
    }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Tittle>ORDER SUMARY</Tittle>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* <Grid item xs={6}>
              <Text>x 1 Pieces</Text>
            </Grid>
            <Grid item xs={6}>
              <PriceUnit>$50</PriceUnit>
            </Grid>
             */}
            <Grid item xs={6}>
              <Text>Total</Text>
            </Grid>
            <Grid item xs={6}>
              <PriceTotal>$ {totalPriceProds}</PriceTotal>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className="mt-6">
          
        {totalPriceProds > 0 &&
            <ButtonBlue>
              <Link legacyBehavior href="/Payment">
                <a 
                  style={{
                    fontSize: "2vh",
                    fontWeight: 600,
                    color: "white",
                    margin: " 0",
                    textDecoration:'none'
                  }}
                >
                  Checkout now
                </a>
              </Link>
            <div style={{display:'flex',alignItems:'center'}}>
              
            </div>
          </ButtonBlue>
        }
            
        </Grid>
        
      </Grid>
    </div>

    </>
  );
};
export default OrderSumary;
