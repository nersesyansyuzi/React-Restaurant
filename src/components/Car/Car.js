import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import * as S from '../styles/Car.styled'
import { countDec, countInc, removeItem, totalPrice } from '../redux/slice/CarSlice'



function Car() {

    const dispatch = useDispatch()
    const { car, total, user } = useSelector(store => store.car)



    useEffect(() => {
        const price = [...car].reduce((sum, item) => {
            return (+item.price.slice(6) * item.count) + sum
        }, 0);

        dispatch(totalPrice(price))

    }, [car])



    return (
        <section style={{ backgroundColor: "white" }}>
            <S.CarImg style={{ backgroundImage: `url("img/Rectangle 58.png")` }}>Car</S.CarImg>
            <S.CarContainer>
                <S.Div>
                    <span>Product</span>
                    <span>Product Name</span>
                    <span>Unit Price</span>
                    <span>Quantity</span>
                    <span>Action</span>
                </S.Div>
                <S.DivItem>
                    {car.map((elem) => {
                        const { id, src: img, title, price, composition, count } = elem

                        return <S.Item key={id}>
                            <S.ItemImg src={`img/` + img + ".png"} />
                            <S.ItemInfo>
                                <S.ItemTitle>{title}</S.ItemTitle>
                                <S.ItemPrice>{price}</S.ItemPrice>
                                <S.QuantityDiv>
                                    <S.IncDiv onClick={() => dispatch(countInc(id))}><AiOutlinePlus /></S.IncDiv>
                                    <p>{count}</p>
                                    <S.DecDiv onClick={() => dispatch(countDec(id))}><AiOutlineMinus /></S.DecDiv>
                                </S.QuantityDiv>
                                <S.DeleteItem onClick={() => dispatch(removeItem(id))} > <AiOutlineClose /></S.DeleteItem>
                            </S.ItemInfo>
                        </S.Item>
                    })}

                </S.DivItem>
                <S.TotalPriceDiv>
                    ${total}
                </S.TotalPriceDiv>
            </S.CarContainer>
        </section>
    )
}

export default Car