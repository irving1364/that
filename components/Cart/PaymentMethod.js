import React from 'react';
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { BLUECOLOR } from '../../colors/Colors';
import paypal from '../../public/images/pay/p.png';
import binance from '../../public/images/pay/b.png';
import coinbase from '../../public/images/pay/c.jpg';
import stripe from '../../public/images/pay/s.png';
import visa from '../../public/images/pay/v.jpg';
import mastercard from '../../public/images/pay/m.png'
const Title = styled.p({
        fontSize: '3vh',
    textAlign: 'left',
    color: BLUECOLOR,
    fontWeight:700
})
const Image = styled.img({
    width: 'auto',
    height: '4vh',
    
})
const Images = ["/images/pay/p.png","/images/pay/b.png","/images/pay/c.jpg","/images/pay/s.png", "/images/pay/v.jpg", "/images/pay/m.png"]
const PaymentMethod = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Title>
                    WE ACCEPT
</Title>
            </Grid>
            {Images.map((i) => (
                <Grid item xs={6} md={4}>
                    
                <Image src={i} />
                    </Grid>
           ) )}
        </Grid>
    )
}
export default PaymentMethod;