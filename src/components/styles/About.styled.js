import styled from "styled-components";

export const AboutImg=styled.div`
 width: 100%;
 height: 280px;
 background-size: cover;
 text-align: center;
 padding-top: 90px;
 font-family: 'Roboto';
 font-weight: 700;
 font-size: 35px;
 font-style: normal;
 line-height: 50px;
 color: ${({theme})=>theme.colors.body};
 background-repeat: no-repeat;
`

export const AboutContainer=styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`
export const DivTop=styled.div`

 width: 100%;
 height: 100%;
 gap: 10px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 padding: 45px ;
 margin: 45px 0;
 border-radius: 15px;
 border: 2px solid #CC3333;
 @media only screen and (max-width:1040px){
     flex-direction: column;
     gap: 15px;
 }
`

export const Img=styled.img`
   @media only screen and (max-width:700px){
      width: 350px;
 }
`

export const Div=styled.div`
 font-family: 'Roboto';
 font-style: normal;
 font-size: 20px;
 width: 480px;
 z-index: 5;
 @media only screen and (max-width:700px){
      width: 350px;
 }

`

export const DivBottom=styled.div`
  width: 100%;
 height: 100%;
 gap: 10px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 padding: 45px ;

 @media only screen and (max-width:1000px){
     flex-direction: column;
     gap: 15px;
 }
`

export const AboutFooter=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media only screen and (max-width:880px) {
    padding: 25px 0;
  }
  @media only screen and (max-width:735px) {
    div{
      width: 100% !important;
    }
    p{
      width: 450px !important;
    }
  }
`
export const FImg=styled.img`
  @media only screen and (max-width:880px) {
      display: none;
  }
`