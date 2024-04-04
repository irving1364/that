import Layout from "@layout/Layout";
import FaqOne from "@components/faq/FaqOne";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PricingOne from "@components/pricing/PricingOne";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";
import LatestBlog from "@components/blogs/LatestBlog";

import Head from 'next/head';

export default function Home() {
  return (
    <Layout>

              <Head>
                <title>Red venezolana de sobrevivientes de abusos eclesiásticos</title>
                <meta name="description" content="Asociación sin fines de lucros"></meta>
                <meta name="keywords" content="Mobiliario Médico, Acero Inoxidable, Soldadura de acero, inoxidable, Muebles Médicos, Mobiliario para hospitales, Mobiliario para Consultorios, Mobiliario para la industria de laboratorios, Mobiliario para la industria, Farmacéutica Muebles, Médicos en Aglomerado, Muebles Médicos en Hidrófugo, Mobiliario en acero inoxidable"></meta>
                <meta name="author" content="Irving salcedo - irvng1364@gmail.com"></meta>
                <meta property="og:title" content="Red venezolana de sobrevivientes de abusos eclesiásticos"></meta>
                <meta property="og:type" content="website" ></meta>
                <meta property="og:url" content="https://www.fadimet.com.pa" ></meta>
                <meta property="og:image" content="https://fadimet.com.pa/assets/img/logo1.webp"></meta>
                <meta property="og:description" content="Red venezolana de sobrevivientes de abusos eclesiásticos"></meta>
                <meta name="google-site-verification" content="q69ooG1JcwygD34SVUkuttAAHhiu0-yg37u-PCXVlvs"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            </Head>


      <Navbar navDark />
      <HeroSectionOne />
      {/* 
        <FeatureOne />
        <FeatureImgContentOne />
        <TestimonialOne darkBg />
        <WorkProcessOne />
        <PricingOne header="true" />
      */}
      <WorkProcessOne />
      <FaqOne />
      <LatestBlog />
      {/*
      <IntegrationOne />
      <SupportOne />
      */}
      <Footer footerGradient />
    </Layout>
  );
}
