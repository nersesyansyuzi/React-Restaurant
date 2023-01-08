import styled from "styled-components";

export const ErrorContainer=styled.div`
 width: 90%;
 margin:  0 auto;
 display: flex;
 gap: 50px;
 align-items: center;
 font-size: 45px;
 font-family: 'Roboto';
 font-style: normal;
 color: ${({theme})=>theme.colors.second};
`

export const ErrorImg=styled.img`
 width: 500px;
 height: 100%;
 display: inline-block;
`

