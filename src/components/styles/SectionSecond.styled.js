import styled, { keyframes } from "styled-components";


export const Title = styled.div`
margin-top: 25px;
text-align: center;
`

export const TabButtonContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
transform: translateX(-100%);
  transition:transform .9s ease ,opacity .9s ease;
  opacity: 0;

     &.active{
      opacity: 1;
      transform: translateX(0);
     }

@media only screen and (max-width: 605px) {
  column-gap: 30px;
 }

`


export const Tab = styled.button`
  width: 244px;
  height: 60px;
  border: none;
  font-size: 25px;
  margin: 25px 10px;
  font-weight: 400;
  font-style: normal;
  font-family: 'Roboto';
  cursor: pointer;
  border-right:1px solid #2A435D;
  color:  ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
 &.active{
    background-color: ${({ theme }) => theme.colors.primary};
    color:  ${({ theme }) => theme.colors.body};
 }
 @media only screen and (max-width: 605px) {
   width: 180px;
 }
 @media only screen and (max-width: 500px) {
   width: 176px;
 }
`

export const TabActiveDiv = styled.div`
  width: 100%;
  height: 800px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 15px;
  display: flex;
  position: relative;
  transform: translateX(110%);
  transition:transform .9s ease ,opacity .9s ease;
  opacity: 0;
     &.active{
      opacity: 1;
      transform: translateX(0);
     }

 svg{
  z-index: 5555;
  cursor: pointer;
  font-size: 35px;
  position: absolute;
  color: ${({ theme }) => theme.colors.primary}; 
 }
 .left{
  right:70px;
 }
 .right{
   right: 0;
   transform: rotate(180deg);
 }

 @media only screen  and (max-width:600px){
 height: 1000px;
}
`

export const Div = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  margin-top: 10px;
  position: absolute;
  align-items: center;
  justify-content: space-evenly;
  transition: transform 700ms linear,opacity 700ms linear;


  &.active{
    opacity: 1;

    transform: translateX(0);
  }
  &.next{
    transform: translateX(100%);
  }
  &.last{
       transform: translateX(-100%);
  }

`
export const InfoDiv = styled.div`
position: relative;


@media only screen  and (max-width:1100px){
  width: 90%;
}

`

export const ItemImg = styled.img`
    width: 505px;
    height: 615px;


@media only screen  and (max-width:1220px){
   width: 400px;
}
@media only screen  and (max-width:1100px){
  display: none;
}
`

export const ItemTitle = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 25px;

color: ${({ theme }) => theme.colors.primary};
`

export const ItemComposition = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 55px;
color: ${({ theme }) => theme.colors.second};
`
export const Line = styled.div`
  width: 100%;
  border-bottom: 2px dashed red;
`

export const Price = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
position: absolute;
right: -50px;
bottom: 0;
color: ${({ theme }) => theme.colors.primary};
`



const spin=keyframes`
    0% {
        transform: rotate(0deg);
      }
      
      100% {
        transform: rotate(360deg);
      }
`



export const SpinWrapeer = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 width: 100%;
 min-height: 70vh;
 
`


export const Spiner = styled.div`
  
  position: absolute;
  height: 60px;
  width: 60px;
  border: 3px solid transparent;
  border-top-color: #A04668;
  left: 50%;
  margin: -30px;
  border-radius: 50%;
  animation:  ${spin} 2s linear infinite;

  &:before,
  &:after {
      content: '';
      position: absolute;
      border: 3px solid transparent;
      border-radius: 50%;
  }
  
  &:before {
      border-top-color: #254E70;
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
      animation: ${spin} 3s linear infinite;
  }

    &:after {
        border-top-color: red;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        animation: ${spin} 4s linear infinite;
    }
    

`