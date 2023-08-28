import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import styled from "@emotion/styled";
import { BLUECOLOR, YELLOWCOLOR } from "../colors/Colors";
//import LogoWhite from "../../../assets/logo.svg";
//import bgI from "../../../assets/backgorundImage.png";
import styles from '../styles/components/Header.module.css';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";


const info = [
  {
    icon: "phone",
    text: "00040004004",
  },
  {
    icon: "mail",
    text: "Loremipsumdolor@gmail.com",
  },
  {
    icon: "maps",
    text: "Lorem ipsum dolor sit amet consectetur. Egestas vitae egestas auctor tellus hendrerit massa.",
  },
];

const ContainerBlue = styled.div({
  width: "100%",
  backgroundColor: BLUECOLOR,
  padding: "1vw 2vw",
  borderRadius: "0vw 10px 10px 0vw",
});
const ContainerBlueRounded = styled.div({
  width: "100%",
  backgroundColor: BLUECOLOR,
  padding: "5vh 2vh",
  borderRadius: "10px",

});
const Contact = () => {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    notes: "",
  };

  
  const { register, formState: { errors}, handleSubmit } = useForm();
  
    const onSubmit = async (e) => {
    console.log(e)


    
      var formdata = new FormData();
      formdata.append("nombres", e.name);
      formdata.append("tlf", e.phone);
      formdata.append("correo", e.email);
      formdata.append("mensaje", e.note);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("https://happyhour987.com/backendWoocomerceStudio/index.php/auth/formContacto?nombres=name&tlf=234234&correo=irving1364@gmail.com&mensaje=sadasdasdasdas", requestOptions)
        .then(response => response.text())
        .then(result => 
                toast("The form was sent"),
                window.location.href = "/"
            )
        .catch(error => 
            toast("Error")
            );


   }


  const Button = styled.button({
    width: "100%",
    color: BLUECOLOR,
    backgroundColor: YELLOWCOLOR,
    borderRadius: 4,
    border: 0,
    fontSize: "1.2vw",
    fontWeight: 600,
    padding: "0.8vw 0",
    transition: "all 0.2s ease",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.9,
    },
  });
  const Logo = styled.img({
    width: "100%",
  });
  const ContainerImage = styled.div({
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "10px 0px 0px 10px",
  });
  const Title = styled.p({
    fontSize: "3vw",
    fontWeight: 600,
    color: "white",
    margin: 0,
    textAlign: "left",
  });
  const Text = styled.p({
    fontSize: 15,
    color: "white",
    textAlign: "left",
    margin: 0,
  });
  const SocialImage = styled.img({
    width: "auto",
    height: "2vw",
    padding: "0.5vw",
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: "1vw",
  });
  const Tittle = styled.p({
        fontSize: "3vw",
    fontWeight: 600,
    color: "white",
    margin: 0,
    textAlign: "center",
  })
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

        <Head>
            <title>Thatslifestudio | Contact</title>
            <meta name="description" content="Thatslifestudio | Fashion store."></meta>
            <meta property="og:description" content="Thatslifestudio | Fashion store."></meta>
            
        </Head>

      <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
            }}
            className="nav-bar"
          >
        <Grid container justifyContent={"center"} >
        <Grid item xs={8}>
            <Grid container>
            <Grid item xs={12} md={6}  sx={{ display: { xs: "none", md: "flex" } }}>
                <ContainerImage  className={ styles.bgImageContact } alt="Imagen de contacto">
                <div style={{    borderRadius: "10px 0px 0px 10px", backgroundColor: 'rgba(50,50,50,0.5)', height: '100%', backdropFilter: 'blur(2px)' }}>
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"space-around"}
                    style={{ height: "100%" }}
                >
                    <Grid item xs={10} style={{marginTop:'2vw'}}>
                    <Title>GET IN TOUCH</Title>
                    <Text>
                        WE’re open for any suggestion or just to have a chat
                    </Text>
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "1vh"}}>
                    {info.map((item, index) => (
                        <Grid
                        key={ item.text }
                        container
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        style={{ margin: "1.5vw 0" }}
                        >
                        <Grid item xs={2}>
                        
                        
                        </Grid>
                        <Grid item xs={10}>
                            <Text>{item.text}</Text>
                        </Grid>
                        </Grid>
                    ))}
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "4vw" }}>
                    <Text>FOLLOW US!</Text>

                    <div
                        style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop: "1vw",
                        }}
                    >
                        {/*<SocialImage src={fb} />
                        */}
                    </div>
                    </Grid>
                </Grid>
                </div>

                </ContainerImage>
            </Grid>
            <Grid item xs={12}md={6} sx={{display:{xs:'flex',md:'flex'}}}>
                <ContainerBlue>
                <Grid container justifyContent={"center"} rowSpacing={2}>
                    <Grid item xs={12}>
                    <Tittle>
                    Checkout now!
                    </Tittle>
                    </Grid>
                    <form style={{width:"90%"}}  onSubmit={handleSubmit(onSubmit)}>
                    <Grid item xs={12} md={12}>
                    <div>
                        <Text  className="mt-2"> Name </Text>  
                        
                        <input type="text" id="name" {...register('name', {
                        required:true,
                        maxLength:50
                        })} className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                        {errors.name?.type === 'required' && <p className='text-sm'>The field is required</p>}
                        {errors.name?.type === 'maxLength' && <p className='text-sm'>The field exceeds the allowed length</p>}

                    </div>
                    </Grid>

                    <Grid item xs={12}>
                    <div>
                    <Text> Phone </Text>
                    <input type="text" id="phone" {...register('phone', {
                        required:true,
                        maxLength:50
                        })}  className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
                        {errors.phone?.type === 'required' && <p className='text-sm'>The field is required </p>}
                        {errors.phone?.type === 'maxLength' && <p className='text-sm'>The field exceeds the allowed length</p>}

                    </div>
                    </Grid>

                    <Grid item xs={12}>
                    <div>
                    <Text> Email </Text>
                    <input type="email" id="email" {...register('email', {
                        required:true,
                        maxLength:50
                        })}  className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
                        {errors.email?.type === 'required' && <p className='text-sm'>The field is required </p>}
                        {errors.email?.type === 'maxLength' && <p className='text-sm'>The field exceeds the allowed length</p>}

                    </div>
                    </Grid>

                    <Grid item xs={12}>
                    
                    </Grid>

                    

                    <Grid item xs={12}>
                    <div>
                        <Text> Note </Text>
                        
                        <textarea id="note" rows="4" {...register('note', {
                        required:true,
                        maxLength:150
                        })}   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" ></textarea>
                        {errors.note?.type === 'required' && <p className='text-sm'>The field is required </p>}
                        {errors.note?.type === 'maxLength' && <p className='text-sm'>The field exceeds the allowed length </p>}
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <Button type="submit" style={{fontSize:'2vh', backgroundColor:"#fff", marginTop:"2rem"}}>Send</Button>
                    </Grid>
                    </form>
                </Grid>
                </ContainerBlue>
            </Grid>
                
            </Grid>
        </Grid>
        </Grid>
      </motion.div>  
    </>

  );
};
export default Contact;
