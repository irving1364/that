//import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect, Fragment} from 'react'
import Slideer from '../components/Slideer';
import OurProducts from '../components/OurProducts';
import CategoriesSection from '../components/CategoriesSection';
import OurHoodieSection from '../components/OurHoodieSection';
import OurTeeSection from '../components/OurTeeSection';
import HeadTo from '../components/HeadTo';
import FAQGS from '../components/FAQGS';
import CarouselSection from '../components/Carousel';
import Contact from '../components/Contact';
import BackgroundVideo from '../components/Video';


export default function Home({ agregarCarrito }) {


   const [allCategories, setCategories] = useState([]);
   const [bestSeeler, setBestSeeler] = useState([]);
   const [videoSource, setVideoSource] = useState();
   const [showModal, setShowModal] = useState(false);
  

   
   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

   function closeModal() {
      showModal(false)
   }

   useEffect(() => {
      obtenerDatos();
      
    }, []);

   const obtenerDatos = async () => {
   
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfNGEzZjI1YjMxNWU5NTkzZjdlYTIwZDYxOTZhMzAxNTJkYjg1MmIwOTpjc19mMmE2OGNhMDk2NTg1YmY2YTc1NTI5ZDFmMmQwOGZkYTc0YjY0MWI3");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    
    
      const data = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/products/categories?parent=0", requestOptions)
      const result = await data.json();
      setCategories(result);

      const load = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/products?category=22", requestOptions)
      const resulta = await load.json();
      setBestSeeler(resulta);

      const loadVideo = await fetch("https://happyhour987.com/wordpress/wp-json/wc/v3/products?sku=123", requestOptions)
      const response = await loadVideo.json();
      setVideoSource(response[0].downloads[0].file);
    }

    
    const scrollToBottom = () => {
      const bottomEle = document.querySelector("#video-bottom");
      bottomEle.scrollIntoView({ behavior: "smooth" });
    }

   return (
    <>
       <Head>
            <title>Thatslifestudio | Studio</title>
            
            <meta name="description" content="Thatslifestudio | Studio"></meta>
         
            <meta name="keywords" content="Mobiliario Médico, Acero Inoxidable, Soldadura de acero, inoxidable, Muebles Médicos, Mobiliario para hospitales, Mobiliario para Consultorios, Mobiliario para la industria de laboratorios, Mobiliario para la industria, Farmacéutica Muebles, Médicos en Aglomerado, Muebles Médicos en Hidrófugo, Mobiliario en acero inoxidable"></meta>
           
            <meta name="author" content="Irving salcedo - irvng1364@gmail.com"></meta>
            
            <meta property="og:title" content="Thatslifestudio | Studio"></meta>
            
            <meta property="og:type" content="website" ></meta>
            
            <meta property="og:url" content="https://happyhour987.com/wordpress" ></meta>
            
            <meta property="og:image" content="https://fadimet.com.pa/assets/img/favicon.ico"></meta>
            
            <meta property="og:description" content="Thatslifestudio | Studio"></meta>
            
            <meta name="google-site-verification" content="q69ooG1JcwygD34SVUkuttAAHhiu0-yg37u-PCXVlvs"></meta>
            
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
       </Head>

       <BackgroundVideo
          blur={0}
          videoSource={videoSource} >
        
        </BackgroundVideo>


         <OurProducts bestSeeler = { bestSeeler }/>

         <CategoriesSection categories={allCategories} />

         <OurHoodieSection />  

         <OurTeeSection />  

         <HeadTo />         

         <FAQGS />
         
        {/*
          <CarouselSection />
        */} 

         <Contact />

     
       

                    
    </>
 );
}

