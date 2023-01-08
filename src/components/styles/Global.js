import {  createGlobalStyle} from "styled-components";

export const theme={
    colors:{
        primary:"#CC3333",
        second:"#2A435D",
        body:"#FFF8EE"
    }
}



export const GlobalCss=createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Montserrat&family=Noto+Sans+Mono:wght@600&family=Roboto:ital,wght@0,500;0,700;1,400&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    min-width: 470px;
    background-color: ${theme.colors.body};
  }
`


