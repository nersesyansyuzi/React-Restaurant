import React from 'react'
import { AiFillStar } from "react-icons/ai"
import * as S from "./../../styles/SectionFirst.styled"

function Section() {
  return (
    <section>
      <S.SectionContainer>
        <S.SectionTitle size="20px" weight="700" padding=" 50px 15px" color="#2A435D" align="center">
          RICH & HEALTHY
        </S.SectionTitle>
        <S.SectioWrapper>
          <S.SectionImg src='img/image_richHealthy_1.png' />
          <S.Sectiondiv>
            <S.SectionTitle size="35px" color="#CC3333" weight="600" width="500px" padding="0px 10px" mdWidth="440px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </S.SectionTitle>

            <S.SectionTitle size="25px" color="#2A435D" weight="400" padding="20px 10px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni facilis nostrum quia impedit et quas pariatur praesentium libero, vel at eos ex numquam iste 
            </S.SectionTitle>

            <S.SectionTitle size="25px" color="#2A435D" weight="400" padding="20px 10px">
              <AiFillStar color='#CC3333' />
              Lorem ipsum dolor sit amet
            </S.SectionTitle>
            <S.SectionTitle size="25px" color="#2A435D" weight="400" padding="20px 10px" >
              <AiFillStar color='#CC3333' />
              Lorem ipsum dolor sit amet, consectetur  
            </S.SectionTitle>
            <S.SectionTitle size="25px" color="#2A435D" weight="400" padding="20px 10px" >
              <AiFillStar color='#CC3333' />
              Lorem ipsum dolor sit amet
            </S.SectionTitle>
          </S.Sectiondiv>
          <S.SectionImg src='img/image_richHealthy_2.png' width="359px" height="377px" absolute="absolute" display="none" />
        </S.SectioWrapper>
      </S.SectionContainer>
    </section>
  )
}

export default Section