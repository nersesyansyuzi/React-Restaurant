import styled from "styled-components";

export const ContactImg=styled.div`
  width: 100%;
  height: 280px;
  text-align:center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({theme})=>theme.colors.body};
`

export const ContactTitle=styled.h2`
  font-weight: 700;
  font-size: 35px;
  color: ${({color})=>color};
`

export const ContactP=styled.p`
  width: 450px;
  margin: 0 auto;
  padding-top: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

`

export const ContactContainer=styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding-top: 25px;
  justify-content: space-evenly;

 @media only  screen and (max-width: 750px){
   gap: 25px;
   align-items: center;
   flex-direction: column-reverse;
  }
`

export const Div=styled.div`
  gap: 45px;
  display: flex;
  flex-direction: column;
`

export const MapImg=styled.img`

  @media only  screen and (max-width: 930px){
    width: 350px;
    height: 100%;
  }
`