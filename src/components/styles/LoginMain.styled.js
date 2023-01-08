import styled from "styled-components";

export const LoginImg = styled.div`
 width: 100%;
 height: 200px;
 font-family: 'Roboto';
 font-weight: 700;
 font-size: 35px;
 font-style: normal;
 background-size: cover;
 text-align: center;
 padding-top: 90px;
 color: ${({theme})=>theme.colors.body};
 background-repeat: no-repeat;
`


export const LoginContainer=styled.div`
  width: 90%;
  height: 100%;
  gap: 45px;
  padding: 35px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 650px) {
    flex-wrap: wrap;
 }
`

export const Div=styled.div`
 width: 450px;
 padding: 40px;
 background-color: ${({theme})=>theme.colors.body} ;

`

export const LoginTile = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 35px;
color:${({theme})=>theme.colors.primary}  ;

`

export const Input=styled.input`
width: 300px;
height: 40px;
margin-bottom: 20px;
border-radius: 10px;
border: 2px solid #CC3333;
padding-left: 20px;
@media only screen and (max-width: 850px) {
     width: 200px;
 }
 @media only screen and (max-width: 650px) {
    width: 300px;
 }
`

export const LoginButton=styled.button`
width: 100px;
height: 35px;
border: none;
cursor: pointer;
font-size: 17px;
color: ${({theme})=>theme.colors.body} ;
background-color: ${({theme})=>theme.colors.primary} ;
transition: background-color .8s ease;
&:hover{
    background-color: black;
}
`
export const RegisterButton=styled(LoginButton)