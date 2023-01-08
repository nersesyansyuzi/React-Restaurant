import React from 'react'
import * as S from '../styles/Error.styled'

function Error() {
  return (
    <S.ErrorContainer>
         <S.ErrorImg src='img/error.png'/>
         <p>404</p>
         <span>OPPS! PAGE NOT FOUND</span>
    </S.ErrorContainer>
  )
}

export default Error