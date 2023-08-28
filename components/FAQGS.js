import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
const Container = styled.div({
  width: "100%",
  borderTop: "solid 1px rgb(20,20,20)",
  marginTop: "20vh",
});
const Tittle = styled.p({
  fontSize: 40,
  textAlign: "left",
});
const Text = styled.p({
  textAlign: "justify",
  fontSize: 12,
  lineHeight: 1.6,
});
const Card = styled.div({
  backgroundColor: "rgb(245,245,245)",
  padding: "2vh",
});
const data = [
  {
    q: "What kind of clothing does ThatsLifeStudio offer?",
    a: "We offer hoodies for men and women, as well as a variety of tees, including music, surf, beer, coffee, and wine.",
  },
  {
    q: "What materials do you use?",
    a: "All our clothing is made with high-quality materials that are breathable and comfortable. Plus, they are designed to last and look great for years to come.",
  },
  {
    q: "Where do you ship?",
    a: "We offer worldwide shipping, so wherever you are, you can enjoy our collections!",
  },
  {
    q: "Do you offer discounts?",
    a: "Yes, we offer discounts and promotional codes from time to time. Keep an eye on our website for the latest offers!",
  },
  {
    q: "What is your return policy?",
    a: "Since all of our orders are print-on-demand, we do not offer returns or exchanges. Refunds, however, are offered. If you do receive a faulty item, we will send you a free replacement or a refund, given that you reach out to us within 30 days of delivery with proof of damage.",
  },
  {
    q: "Do you do custom designs?",
    a: "Yes, we offer custom designs for our hoodies and tees. Contact us today to get started!",
  },
  {
    q: "How do I figure out the size I need?",
    a: "You can check out our size chart for more information.",
  },
  {
    q: "How do I care for my clothing?",
    a: "For best results, we recommend washing in cold water and hanging or laying flat to dry. Please refer to the product page for further instructions.",
  },
];
const FAQGS = () => {
  return (
    <Container className="px-10 py-10">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Tittle>FAQS</Tittle>
          <Text>
            Some of the frequently asked questions are mentioned below:
          </Text>
        </Grid>
        {data.map((item, index) => {
          return (
            <>
              <Grid item xs={12}md={3}>
                <Card>
                  <Text>Q: {item.q}</Text>
                  <Text>A: {item.a}</Text>
                </Card>
              </Grid>
            </>
          );
        })}
        <Grid item xs={12}md={5}>
          <Text>
            Thanks for choosing ThatsLifeStudio! We hope you love <br /> your
            new wardrobe as much as we do. Enjoy!
          </Text>
        </Grid>
      </Grid>
    </Container>
  );
};
export default FAQGS;
