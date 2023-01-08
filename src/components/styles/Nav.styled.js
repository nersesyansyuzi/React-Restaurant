import styled from "styled-components";

export const NavTop = styled.div`
   height: 35px;
   background-color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TimeWrap = styled.div`
  gap: 10px;
  display: flex;
  color: ${({ theme }) => theme.colors.body};
`

export const NumperWrap = styled(TimeWrap)`
`

export const Nav = styled.nav`
   width: 100%;
   height: 85px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   background-color: ${({ theme }) => theme.colors.body};
`

export const Ul = styled.ul`
  gap:40px;
  width: 496px;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.second};
    transition:  color .4s;
     
    &:nth-child(4){
      display: none;
    }

    &:hover{
      color:${({ theme }) => theme.colors.primary} ;
    }
    &.active{
      color:${({ theme }) => theme.colors.primary} ;
    }
    @media only screen and (max-width:1100px) {
        color:${({ theme }) => theme.colors.primary};
    }
    @media only screen and (max-width:600px) {
        &:nth-child(4){
        display: block;
    }
    }
  }

  @media only screen and (max-width:1100px) {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      justify-content: center;
      color: black;
      background-color: ${({ theme }) => theme.colors.second};
      flex-direction:column;
      overflow: hidden;
      position: fixed;
      z-index: 54444444444;
      transform: translateX(100%);
      transition: transform .8s;
      &.active{
        transform: translateX(0);
      }
      
    a:hover{
      color: white;
    }
  }

`

export const Left = styled.div`
   gap: 20px;
   display: flex;
   height: 100%;
   align-items: center;
`

export const CarWrapp = styled.div`
   width: 60px;
   height: 60px;
   display: flex;
   position: relative;
   border-radius: 50%;
   align-items: center;
   justify-content: center;
   transition: .5s ease;
   cursor: pointer;
   background-color: ${({ theme }) => theme.colors.second};
   svg{
       font-size: 25px;
       position: absolute;
       color: ${({ theme }) => theme.colors.body};
   }
 &:hover{
  background-color: ${({ theme }) => theme.colors.primary};
 }
   @media only screen and (max-width:600px) {
    display: none;
 
     svg{
      font-size: 20px;
     }

    }
   
`


export const Delivery = styled.div`
   gap:15px;
   display: flex;
   align-items:center;
   
`

export const DeliveryWrapp = styled.div`
  width:max-content;
  display:flex;
  flex-direction: column;
  p{
    font-weight: 700;
    font-size: 20px;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.second};
  };

   h5{
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 15px;;
   }

   @media only screen and (max-width:1100px) {
      z-index: 5;
      bottom: 25px;
      right: 70px;
      position: absolute;
      display: none;
    }

   & + img{
      @media only screen and (max-width:1100px) {
      z-index: 5;
      bottom: 25px;
      right: 35px;
      position: absolute;
      display: none;
    }
    }
   
  
  
`


export const LoginButton = styled.button`
width: 90px;
height: 35px;
border: none;
border-radius: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
cursor:pointer;
color: ${({ theme }) => theme.colors.body};
transition: .5s ease;
background-color: ${({ theme }) => theme.colors.primary};

&:hover{
  background-color: black;
}
`

export const MenuIcons = styled.div`
   font-size: 30px;
   cursor: pointer;
   z-index: 54444444444;
   display: none;

   @media only screen and (max-width:1100px) {
    display: block;
    margin-left: 25px;
    padding-top: 10px;
   }

`