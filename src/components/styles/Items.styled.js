import styled, { keyframes } from "styled-components";


export const ItemsImg = styled.div`
width: 100%;
height: 240px;
background-size: cover;
text-align: center;
padding-top: 90px;
font-family: 'Roboto';
font-weight: 700;
font-size: 30px;
font-style: normal;
line-height: 50px;
color: ${({ theme }) => theme.colors.body};
background-repeat: no-repeat;
`

export const ItmesTitle = styled.div`
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  padding: 30px;
  color: ${({ theme }) => theme.colors.second};
`

export const InputDiv = styled.div`
  width: 300px;
  padding: 20px ;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Input = styled.input`
width:90%;
height: 40px;
padding: 15px ;
outline: none;
border: none;
border-radius: 20px;
background-color: ${({ theme }) => theme.colors.body};

`

export const InputButton = styled.button`
  width: 90px;
  height: 80px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.body};
  transition: background-color .5s ease;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover{
    background-color: black;
  }
`

export const ItemContainer = styled.div`
  width: 90%;
  margin: 0 auto;

`
export const ItemTop = styled.div`
    height: 100%;
    display: flex;
    margin-top: 75px;
    justify-content: space-evenly;

    @media only screen and (max-width:640px){
       flex-wrap: wrap;
       gap:25px
  }

    `

export const ItemDivLeft = styled.div`
  gap: 31px;
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
  }
`


export const Item = styled.div`
  gap: 20px;
  display: flex;
  padding:10px ;
  cursor: pointer;
  align-items: center;
  line-height: 25px;
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.second};
  transition: transform .8s ease, box-shadow .8s ease;

  img{
    width: 100px;
  }
  &:hover{
    transform: scale(1.1);
    box-shadow: 0px 1px 4px 2px red;
  }
  @media only screen and (max-width:1180px){
        width: 90%;
        line-height: 20px;
  }
  @media only screen and (max-width:870px){
        width: 90%;
        height: 170px;
        line-height: 20px;
  }
  @media only screen and (max-width:640px){
      width: 100%;
  }

  

`

export const Img1 = styled.img`
  height: 420px;

  @media only screen and (max-width:927px){
      width: 100%; 
  }
  @media only screen and (max-width:870px){
      height:470px; 
      width: 100%; 
      display: none;
  }

`


export const ItemDivRight = styled(ItemDivLeft)``

export const ItemBottom = styled.div``
export const Img2 = styled.img` 
 width: 85%;
 margin: 20px 0;
 transform: translate(8%, 0) ;

 @media only screen and (max-width:1000px){
   width: 100%;
   transform: translate(0, 0) ;
  }
`
export const ItemWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
    
  @media only screen and (max-width:640px){
    flex-wrap:wrap;
    gap: 25px;
  }


`

export const ItemBottomLeft = styled(ItemDivLeft)`
    @media only screen and (max-width:1180px){
      &>div{
        width: 90%;
        height: 170px;
        line-height: 20px;
      }
  }
  @media only screen and (max-width:640px){
    &>div{
      width: 100%;
      height: 150px;
      line-height: 25px;
    }
  }

`
export const ItemBottomRight = styled(ItemBottomLeft)`
 margin-bottom: 20px;
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
 min-height: 50vh;
 
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
export const Button=styled.button`
  width: 90px;
  padding: 10px;
  border: none;
  align-self: end;
  cursor: pointer;
  font-size: 17px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary} ;
  color: ${({ theme }) => theme.colors.second};
  transition: color .8s ease,background-color .8s ease;

  &:hover{
    color: ${({ theme }) => theme.colors.body};
    background-color:black;
  }
` 