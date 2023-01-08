import styled from "styled-components";

export const HeaderContainer = styled.div`
   width: 90%;
   height: 100%;
   margin: 0 auto;
   display: flex;
   overflow: hidden;
   flex-direction: column;
`

export const HeaderTop = styled.div`
     transform: translateX(110%);
     opacity: 0;
     transition:transform 1s ease,opacity 1s ease ;
     &.active{
      opacity: 1;
      transform: translateX(0);
     }
`

export const HeaderWrapp = styled.div`
   width: 80%;
   height: 100%;
   margin: 0 auto;
   display: flex;
   padding: 55px;
   transition: width .9s;


   @media only screen and (max-width:1188px){
    width: 100%;
   }
   @media only screen and (max-width:960px){
    flex-direction: column;
    align-items: center;
   }
`

export const SliderDiv = styled.div`
  width:420px;
  height:280px;
  display: flex;
  justify-content: center;
  transition: opacity .9s ease;
  
`

export const SliderImg = styled.img`
`

export const HeaderInfo = styled.div`
   display: flex;
   width: 550px;
   align-items: flex-end;
   flex-direction: column;
 
   @media only screen and (max-width:960px){
      width: 400px;
   }
`
export const HeaderTitle = styled.h1`
  font-family: 'Roboto';
  font-style: italic;
  font-size: 50px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.second};
  @media only screen and (max-width:960px){
      font-size: 40px;
      text-align: center;
   }
`

export const Span = styled.span`
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`
export const SpanTitle = styled(Span)`
  font-size: 50px;
`

export const SpanPrice = styled(Span)`
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.second};
`


export const OrderButton = styled.button`
width: 100px;
height: 40px;
border: none;
cursor: pointer;
border-radius: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
letter-spacing: 1px;
color:${({ theme }) => theme.colors.body} ;
background-color: ${({ theme }) => theme.colors.primary};
`

export const IconstDiv = styled.div`
 font-size:30px;
 cursor: pointer;
 color: ${({ theme }) => theme.colors.primary};
 svg{
    margin: 0 10px;
 }
`

export const SliderReg = styled.div`
 margin-right: 30px;
 display: flex;
  svg{
      margin: 0 5px;
      cursor: pointer;
      font-size: 20px;
  }

`

export const HeaderFooter = styled.div`
  width: 100%;
  display: flex;
  padding-top:50px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-110%);
  transition:transform .9s ease ,opacity .9s ease;
  opacity: 0;
     &.active{
      opacity: 1;
      transform: translateX(0);
     }
`

export const HeaderFooterWrapp = styled.div`
  width: max-content;
`

export const HeaderFooterTitle = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: ${({ theme }) => theme.colors.second};
`

export const HeaderFooterTitle2 = styled(HeaderFooterTitle)`
   font-size: 35px;
   color: ${({ theme }) => theme.colors.primary};
`

export const HeaderFooterContainer = styled.div`
  img{
    margin: 20px 22px;

    @media only screen and (max-width:626px) {
        width: 173px;
    }  
    
  }
`
