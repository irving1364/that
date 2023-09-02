import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import styled from "@emotion/styled";
import { BLUECOLOR, YELLOWCOLOR } from "../../colors/Colors";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import GooglePayButton from '@google-pay/button-react'
import styles from '../../styles/home.module.css';

import validator from 'validator'
import { useRouter } from 'next/navigation';
import axios from "axios";

const ContainerBlue = styled.div({
  width: "100%",
  backgroundColor: "#fff",
  padding: "1vw 2vw",
  borderRadius: "0vw 10px 10px 0vw",
});

const FormPay = ({ vaciarCarrito, totalPriceProds }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [phone, setPhone] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [city, setCity] = useState("");  
  const [state, setState] = useState(""); 
  const [postCode, setPostCode] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [stretAddress, setStretAddress] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [metodoPagoTitle, setMetodoPagoTitle] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [paid, setPaid] = useState(false);

  const [totalPrice, setTotalPrices] = useState(totalPriceProds);
  const [isLoad, setIsLoad] = useState(false);
  
  const { push } = useRouter();

  useEffect(() => {
    setIsLoad(true);
  }, []);
  
  

  const onSubmit = async () => {
    
    let paidM = false;
    let paymentSource = localStorage.getItem("paymentSource");
    let payerID = localStorage.getItem("payerID");

    if(paymentSource === ""){
      paymentSource = "";
      payerID = "";      
    }
    console.log(paymentSource)

    if(paymentSource != ""){
      let paidM = true;
      console.log(paidM)
    }
    

    var prodsCart = JSON.parse(localStorage.getItem("productosGlobal"));
    console.log(prodsCart);
    var prodItems = {};
    var meta = prodsCart;

    for(var i = 0; i < prodsCart.length; i++) {
        prodItems[i] = {};
        prodItems[i].product_id =  prodsCart[i].id;
        prodItems[i].quantity =  prodsCart[i].quantity;
        if(prodsCart[i].attributes[0]){
        var options = "";
            console.log(meta[i].attributes[0].options)
            
            for(var u = 0; u < meta[i].attributes[0].options.length; u++) {
                if(u == 0){
                    options = options + meta[i].attributes[0].options[u];
                }else{
                    options = options + ", " + meta[i].attributes[0].options[u];
                }
                
            }
        
        prodItems[i].meta_data =[ {
            "id": prodsCart[i].attributes[0].id,
            "key": prodsCart[i].attributes[0].name,
            "value": options
         }
        ]
    } 
}         

    console.log(prodItems);

    var data = {
        payment_method: paymentSource,
        payment_method_title: payerID,
        set_paid: paidM,
        customer_note: payerID,
        billing: {
          first_name: firstName,
          last_name: lastName,
          address_1:  stretAddress,
          address_2: "",
          city: city,
          state: state,
          postcode: postCode,
          country: country,
          email:  email,
          phone:  phone
        },
        shipping: {
          first_name: firstName,
          last_name: lastName,
          address_1: stretAddress,
          address_2: "",
          city:city,
          state: state,
          postcode: postCode,
          country: country
        },
        line_items: 
                prodItems
        ,
        shipping_lines: [
        ]
      };
      

      var formdata = new FormData();
      formdata.append("data", data);

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y2tfNGEzZjI1YjMxNWU5NTkzZjdlYTIwZDYxOTZhMzAxNTJkYjg1MmIwOTpjc19mMmE2OGNhMDk2NTg1YmY2YTc1NTI5ZDFmMmQwOGZkYTc0YjY0MWI3");
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders,
            redirect: 'follow'
        };

        const data2 = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/orders", requestOptions)
        const resulta = await data2.json();
        console.log(resulta)
        if(resulta.message){
            toast(resulta.message);
        }
        if(resulta.status){
            toast(resulta.status);
            localStorage.removeItem("payerID");
            localStorage.removeItem("paymentSource");
            localStorage.setItem('operacion', JSON.stringify(resulta))
            vaciarCarrito()
            push('/PaymentResult');
            //window.location.href = "/";
        }


   }

 

  const Label = styled.p({
    margin: 0,
    textAlign: "left",
    color: "rgb(140, 140, 140)",
    marginBottom: "0.5vw",
  });

  const Title = styled.p({
    color: BLUECOLOR,
    textAlign: "left",
    fontWeight: 700,
    fontSize: "4vh",
  });
  const Button = styled.div({
    textAlign: "center",
    backgroundColor: BLUECOLOR,
      color: "white",
    cursor:'pointer',
    fontWeight: 700,
      width: "100%",
      borderRadius: 6,
      padding: "1.4vh ",
      "& p": {
          margin:0
      }
  });

  const validateEmail = (e) => {
    var email = e.nativeEvent.target.value
  
    if (validator.isEmail(email)) {
      setEmail(email)
      console.log("valido")
    } else {
      setEmail("")
    }
  }

if (totalPrice > 0) {
  
  /* push('/cart');*/
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    
    <Grid container justifyContent={"space-around"} rowSpacing={2}>
        <Grid item xs={11}>
          <Title>How would you like to get your order?</Title>
        </Grid>
        
       
        <Grid item xs={11} md={5}>
          <Label>First name</Label>
          <input className={styles.inputMiu} id="first" name="first" onChange={e => setFirstName(e.target.value)} />
        </Grid>
        <Grid item xs={11} md={5}>
          <Label>Last name</Label>
          <input className={styles.inputMiu} id="last" name="last" onChange={e => setLastName(e.nativeEvent.target.value)} />
        </Grid>
        <Grid item xs={11}>
          <Label>Phone</Label>
          <input className={styles.inputMiu} type="email" id="correo" onChange={e => setPhone(e.nativeEvent.target.value)}/>
        </Grid>
        <Grid item xs={11}>
          <Label>E-mail</Label>
          <input className={styles.inputMiu} type="email" id="correo" onChange={(e) => validateEmail(e)} />
        </Grid>
        <Grid item xs={11} md={5}>
          <Label>City</Label>
          <input className={styles.inputMiu} onChange={e => setCity(e.nativeEvent.target.value)}/>
        </Grid>
        <Grid item xs={11} md={1}>
          <Label>State</Label>
          <input className={styles.inputMiu} onChange={e => setState(e.nativeEvent.target.value)}/>
        </Grid>
        <Grid item xs={5} md={3}>
          <Label>Post code</Label>
          <input className={styles.inputMiu} onChange={e => setPostCode(e.nativeEvent.target.value)}/>
        </Grid>
        <Grid item xs={5} md={11}>
          <Label>Country</Label>
          <input className={styles.inputMiu} onChange={e => setCountry(e.nativeEvent.target.value)}/>
        </Grid>
        <Grid item xs={11}>
          <Label>Street Address</Label>
          <input className={styles.inputMiu} onChange={e => setStretAddress(e.nativeEvent.target.value)}/>
        </Grid>

        {firstName != "" && phone != "" && email != "" &&
          <Grid container className="mt-5" justifyContent={"space-around"} rowSpacing={2}>
            <Grid item xs={11}>
                <Button  onClick={onSubmit}>
                  Buy and pay later
                </Button>
            </Grid>

            <Grid item xs={11}>
              <PayPalScriptProvider options={{ clientId: "AZ51IszbJLx4g0E2qXG5BFDUO1EdcAlau4MEoyDOmrpeQflg8xAJeHW5oU3-zLkq8PaXJO5AuGLOHKea" }}>
                <PayPalButtons createOrder={async () => {
                  try{
                    const res = await axios({
                      url: "https://thatslifestudio.com/api/pay/"+ totalPrice +"/",
                      method: "POST",
                      headers:{
                        "Content-Type": "application/json"
                      },
                    });
                    return res.data.id
                  } catch (error) {
                    console.log(error)
                  }
                }} 
                onCancel={(data) => console.log("compra cancelada")}
                onApprove={(data, actions) =>{
                  console.log(actions)
                  console.log(data)
                  //data.paymentSource = paypal
                  //data.payerID = id
                  localStorage.setItem('paymentSource', data.paymentSource)	
                  localStorage.setItem('payerID', data.payerID)	
                  onSubmit(data.paymentSource, data.payerID);
                  actions.order.capture()
                }}
                style={{ layout: "vertical", color: "blue" }} />
            </PayPalScriptProvider>
          </Grid>

          <Grid item xs={11}>
            <GooglePayButton
              buttonSizeMode="fill"
              style={{width:"100%"}}
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: "1.00",
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
              
            />


  
          </Grid>  

          </Grid>  
        }


        

        <Grid item xs={11}>
       

         

          
        </Grid>

        

      </Grid>

    </>
  );
 }
};
export default FormPay;
