import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Image = styled.img({
    width: '100%',
    height: 'auto'
})

const Container = styled.div({
  width: "100%",
  borderTop: "solid 1px rgb(20,20,20)",
  marginTop: "20vh",
});

const Tittle = styled.p({
  fontSize:"6vh",
  textAlign: "left",
});

const Text = styled.p({
  textAlign: "left",
  paddingLeft: "5vh",
  fontSize: 12,
  margin: 0,
});

const ContainerCheckBox = styled.div({
  marginTop: "6vh",
});

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  margin: 0;
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;
  &:checked {
    background-color: rgba(255, 194, 0, 1);
  }
`;

const Input = styled.input({
  width: "100%",
  borderRadius: 200,
  padding: 10,
  outline: "none",
  border: "solid 1px rgb(0,0,0)",
});

const Button = styled.button({
  width: "100%",
  marginTop: "6vh",
  backgroundColor: "transparent",
  borderRadius: 200,
  padding: 10,
  outline: "none",
  cursor: "pointer",
  border: "solid 1px rgb(0,0,0)",
  transition: "0.2s ease",
  ":hover": {
    backgroundColor: "rgb(250,250,250)",
  },
});

const data = ["Men", "Snow", "Women", "Moto"];

const Contact = () => {

  const [checked, setChecked] = React.useState(0);

  const handleCheckboxChange = (e, index) => {
    setChecked(index);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent={"space-between"}>
        <Grid item xs={12}md={6}>
          <Grid container justifyContent={"space-between"}  className="px-10 py-10">
            <Grid item xs={12}>
              <Tittle>
                Join our e-mail list and <br /> receive free overnight <br />
                shipping.
              </Tittle>
            </Grid>
            <Grid item xs={10} className="mt-10">
              <Input placeholder="E-mail" />
            </Grid>
            <Grid item xs={10}>
              <ContainerCheckBox>
                <Grid container rowSpacing={4}>
                  {data.map((item, index) => {
                    return (
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs={1}>
                            <Checkbox
                              type="checkbox"
                              checked={checked === index ? true : false}
                              onChange={(e) => handleCheckboxChange(e, index)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Text>{item}</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </ContainerCheckBox>
            </Grid>
            <Grid item xs={6}md={4}>
              <Button>Join E-mail List</Button>
            </Grid>
          </Grid>
        </Grid>
              <Grid item xs={12}md={5}>
                  <Image src={'/images/16.png'}/>
        </Grid>
                
      </Grid>
    </Container>
  );
};
export default Contact;
