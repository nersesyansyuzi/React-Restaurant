
import styled from "styled-components";

export const DetailsImg=styled.div`
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

export const DetailsContainer=styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const DivItem=styled.div`
  gap:25px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 700px) {
     gap: 50px;
     margin: 25px 0; 
     flex-wrap: wrap;
  }
`

export const DivLeft=styled.img`
  height: 100%;
`

export const DivRight=styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  width: 570px;
  line-height: 27px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.second};
`