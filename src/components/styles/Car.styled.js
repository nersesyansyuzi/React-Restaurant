import styled from "styled-components";

export const CarImg=styled.div`
 width: 100%;
 height: 180px;
 background-size: cover;
 text-align: center;
 padding-top: 90px;
 font-family: 'Roboto';
 font-weight: 700;
 font-size: 35px;
 font-style: normal;
 color: ${({theme})=>theme.colors.body};
 background-repeat: no-repeat;
`

export const CarContainer=styled.div`
   width: 90%;
   height: 100%;
   margin: 0 auto;
`

export const Div=styled.div`
width: 100%;
height: 60px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 25px;
display: flex;
padding: 0 15px;
align-items: center;
margin-bottom: 25px;
justify-content: space-between;
color: ${({theme})=>theme.colors.body};
background-color: ${({theme})=>theme.colors.primary};

@media only screen and (max-width:820px) {
     display: none;
}
`
export const DivItem=styled.div`
  padding: 25px 0;
  min-height:30vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  `

export const Item=styled.div`
display:flex;
gap: 15px;
align-items: center;

@media only screen and (max-width:820px) {
  justify-content: center;
}
`

export const ItemImg=styled.img`
 width: 180px;
 @media only screen and (max-width:820px) {
   width: 250px;
  }
  
  `
export const ItemInfo=styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width:820px) {
     gap:25px;
     align-items: center;
     flex-direction: column;
}
`

export const ItemTitle=styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
text-align: center;
width: 180px;
color: ${({theme})=>theme.colors.second};

`
export const ItemPrice=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${({theme})=>theme.colors.second};
`

export const QuantityDiv=styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`

export const IncDiv=styled.div`
width: 35px;
height: 25px;
cursor: pointer;
font-size: 17px;
line-height: 30px;
text-align: center;
border: 1px solid #CC3333;
`

export const DecDiv=styled(IncDiv)``

export const Total=styled(ItemPrice)``

export const DeleteItem=styled.div`
 cursor: pointer;
 font-size: 25px;
 color: ${({theme})=>theme.colors.primary};
`


export const TotalPriceDiv=styled.div`

 display: flex;
 justify-content: end;
 font-size: 25px;
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 padding-bottom: 25px;
 color: ${({theme})=>theme.colors.second};
`