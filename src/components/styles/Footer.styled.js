import styled from "styled-components";


export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const FooterTop = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   gap:20px;
   flex-wrap: wrap;
   padding: 20px 0;
   align-items: center;
   justify-content: space-around;
`

export const Div = styled.div`
  text-align: center;
  color:${({ theme }) => theme.colors.body};
`

export const FooterBotton = styled.div`
  text-align: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.second};
  color:${({ theme }) => theme.colors.body}
 `