import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const Contacto = () => {
  return (
    <Layout title="Contact Us" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contáctanos"
        desc="¿Estás listo para ponerte en contacto con un grupo de facilitadores que seran mano amiga dentro de tu caso!"
      />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default Contacto;
