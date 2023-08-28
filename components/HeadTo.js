import React from 'react';
import { Grid } from '@mui/material'
import styled from '@emotion/styled';
import LightButton from './LightButton';

const Container = styled.div({
      width: "100%",
  marginTop: "20vh",
})
const BackgroundImage = styled.img({
width: '100%'
})
const ContainerSection = styled.div({
    position: 'relative',
    cursor: 'pointer'
})
const ContainerText = styled.div({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left:"10vh"
})
const Text = styled.p({
    letterSpacing: 1,
    lineHeight: 1.8,
    fontSize: "2vh",
    color: 'white',
    textAlign: 'left'
})
const Tittle = styled.p({
    textAlign: 'left',
    margin:0,
    fontSize: "6vh",
    color: 'white',
})

const HeadTo = () => {
    return (<Container>
        <Grid container>
            <Grid item xs={12}>
                <ContainerSection>
                    <BackgroundImage src={'/images/headTo/31.webp'} />
                    <ContainerText>
                        <Grid container justifyContent={"flex-start"}>
                            <Grid item xs={12}>
                        <Tittle>
                            Head to toe in French terry
                        </Tittle>
                            </Grid>
                            <Grid item xs={12}>
              <Text>
                            
                        A collection of hoodies, crews, pants, and shorts for
                        men<br/> and women—loungewear at its best.
                      
                        </Text>
                            </Grid>
                
                  <LightButton>
                            EXPLORE THE FOUNDATION COLLECTIONS
                        </LightButton>
                          
                        </Grid>

          
      
                    </ContainerText>
                </ContainerSection>

            </Grid>
    </Grid>
    </Container>)
}
export default HeadTo;