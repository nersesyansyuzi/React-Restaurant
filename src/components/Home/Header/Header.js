import React, { useRef, useState } from 'react'
import { BsFillCircleFill } from "react-icons/bs"
import { HeaderIcons, HeaderImg } from './../../utils/utils'
import * as S from "./../../styles/Header.styled"

import { useInView } from 'react-intersection-observer'

const Img = [
    "image1.png",
    "imgslider2.png",
    "imgslider3.png",
    "imgslider4.png",

]


function Header() {

    const [sliderId, setSliderId] = useState(0)


    const { ref, inView } = useInView(({
        triggerOnce: true,
        threshold: 0.5,
    }))


    return (
        <>
            <header style={{ width: "100%" }} ref={ref}>
                <S.HeaderContainer >
                    <S.HeaderTop className={inView ? "active" : ""}>
                        <S.HeaderWrapp>
                            <S.HeaderInfo >
                                <div>
                                    <S.Span>Best In Town</S.Span>
                                    <S.HeaderTitle>ENJO YOUR CHICKEN <S.SpanTitle >BURGER</S.SpanTitle> FAST FOOD</S.HeaderTitle>
                                </div>
                                <div>
                                    <S.OrderButton>Order</S.OrderButton>
                                    <S.SpanPrice>Price : $10.50</S.SpanPrice>
                                </div>
                            </S.HeaderInfo>
                            <S.SliderDiv>
                                <S.SliderImg src={"img/" + `${Img[sliderId]}`} alt="img" />
                            </S.SliderDiv>
                        </S.HeaderWrapp>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <S.IconstDiv>
                                {HeaderIcons.map((el) => {
                                    return <React.Fragment key={el.id}>
                                        {el.icons}
                                    </React.Fragment>
                                })}
                            </S.IconstDiv>
                            <S.SliderReg>
                                {new Array(4).fill(<BsFillCircleFill />).map((elem, id) => {
                                    return <div key={id} style={{ color: id == sliderId ? "red " : "black" }} onClick={() => setSliderId(id)} >{elem}</div>
                                })}
                            </S.SliderReg>
                        </div>
                    </S.HeaderTop>
                    <S.HeaderFooter className={inView ? "active" : ""}>
                        <S.HeaderFooterWrapp>
                            <S.HeaderFooterTitle>
                                Food Items
                            </S.HeaderFooterTitle>
                            <S.HeaderFooterTitle2>
                                Popular Dishes
                            </S.HeaderFooterTitle2>
                        </S.HeaderFooterWrapp>
                        <S.HeaderFooterContainer>
                            {HeaderImg.map((elem) => {
                                return <img src={elem.img} alt="img" key={elem.id} />
                            })}
                        </S.HeaderFooterContainer>
                    </S.HeaderFooter>
                </S.HeaderContainer>
            </header>
        </>

    )
}

export default Header