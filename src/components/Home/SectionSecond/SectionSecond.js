import React, { useEffect, useState } from 'react'
import { TabTitle } from '../../utils/utils'
import * as Se from "./../../styles/SectionSecond.styled"
import * as S from "./../../styles/SectionFirst.styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchItem, setActive } from '../../redux/slice/TabSlice';
import { AiFillLeftCircle } from "react-icons/ai"

import { useInView } from 'react-intersection-observer';

function SectionSecond() {
  const { item, active,status } = useSelector(state => state.tab)
  const dispatche = useDispatch()
  const [sliderId, setSliderId] = useState(0)

  const { ref, inView } = useInView(({
    triggerOnce: true,
    threshold: 0.5,
  }))

  useEffect(() => {
    dispatche(fetchItem(active))
  }, [active])

  useEffect(() => {
    if (sliderId < 0) {
      setSliderId(item.length - 1)
    }

    if (sliderId > item.length - 1) {
      setSliderId(0)
    }
  }, [sliderId])

  return (
    <section style={{minHeight:"100vh"}}>
      <S.SectionContainer>
        <Se.Title >
          <S.SectionTitle size="20px" weight="700" padding=" 50px 0 0 0" color="#CC3333" >
            SPECIALS
          </S.SectionTitle>
          <S.SectionTitle size="35px" weight="700" color="#2A435D" >
            Check out our menu
          </S.SectionTitle>
          <S.SectionTitle size="15px" weight="400" color="#2A435D" padding="5px 0" ref={ref}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptatum vitae illum 
          </S.SectionTitle>
        </Se.Title>

        {status === "LOADING" ?
          <Se.SpinWrapeer>
            <Se.Spiner />
          </Se.SpinWrapeer>
          :
          <>
            <Se.TabButtonContainer className={inView ? "active" : ""}>
              {TabTitle.map((elem) => {
                return <Se.Tab key={elem.id} className={elem.title === active ? "active" : ""} onClick={() => dispatche(setActive(elem.title))}>
                  {elem.title}
                </Se.Tab>
              })}
            </Se.TabButtonContainer>
            <Se.TabActiveDiv className={inView ? "active" : ""}>
              <AiFillLeftCircle className='left' onClick={() => setSliderId(sliderId - 1)} />
              <AiFillLeftCircle className='right' onClick={() => setSliderId(sliderId + 1)} />
              {item.map((elem) => {
                const { id, src, menu } = elem
                let position = "next"
                if (sliderId === +id) position = "active"
                if (+id === sliderId - 1 || (sliderId === 0 && +id === elem.length - 1)) position = "last"

                return (
                  <Se.Div key={id} className={position}>
                    <Se.ItemImg src={"img/" + src} />
                    <Se.InfoDiv>
                      {menu.map((elem) => {
                        return (
                          <Se.InfoDiv key={elem.id}>
                            <Se.ItemTitle>{elem.title}</Se.ItemTitle>
                            <Se.ItemComposition>{elem.composition}</Se.ItemComposition>
                            <Se.Line />
                            <Se.Price>{elem.price}</Se.Price>
                          </Se.InfoDiv>
                        )

                      })}
                    </Se.InfoDiv>
                  </Se.Div >

                )
              })
              }

            </Se.TabActiveDiv>

          </>
        }

      </S.SectionContainer>
    </section>
  )
}

export default SectionSecond