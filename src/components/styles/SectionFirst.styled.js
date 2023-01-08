import styled from "styled-components";

export const SectionContainer=styled.div`
   width: 90%;
   height: 100%;
   margin: 0 auto;
   overflow: hidden;
`

export const SectionTitle=styled.h2`
font-family: 'Roboto';
font-style: normal;
width: ${({width})=>width};
font-weight:  ${({weight})=>weight};
font-size: ${({size})=>size};
color: ${({color})=>color};
text-align: ${({align})=>align};
padding: ${({padding})=>padding} ;

svg{
    margin-right: 20px;
    color: ${({color})=>color};
}
@media only screen and (max-width:620px){
    width: ${({mdWidth})=>mdWidth};
}

`

export const Sectiondiv=styled.div`
width: 100%;
display: flex;
gap: 25px;
flex-direction:column;
`

export const SectioWrapper=styled(Sectiondiv)`
display:flex;
flex-direction: row;
position: relative;
@media only screen and (max-width:930px){
 flex-direction: column;
 align-items: flex-end;
}
`
export const SectionImg=styled.img`
right: 0;
bottom: 0;
z-index: -1;
color: wheat;
width: ${({width})=>width};
height: ${({height})=>height};
position:${({absolute})=>absolute} ;
@media only screen and (max-width:1300px){
  display: ${({display})=>display};
}
@media only screen and (max-width:930px){
 width: 300px;
 height: 100%;
 position: absolute;
}
@media only screen and (max-width:620px){
 width: 200px;
 height: 50%;
 position: absolute;
}
`

