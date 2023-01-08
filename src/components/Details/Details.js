import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import * as S from '../styles/Details.styled'
import { Button } from '../styles/Items.styled'
import {addCar} from "../redux/slice/CarSlice"

function Details() {

    const { id } = useParams()
    const { items } = useSelector(store => store.item)
    const Item = [...items].filter((elem) => elem.id === id)
    const dispatch=useDispatch()


    return (
        <section>
            <S.DetailsImg style={{backgroundImage:`url("/img/Rectangle 58.png")`}}>
                  {/* {Item[0].title} */}
            </S.DetailsImg>
            <S.DetailsContainer>
                {Item.map((elem) => {
                    return (
                        <S.DivItem key={elem.id}>
                            <S.DivLeft src={`/img/` + elem.src + ".png"}></S.DivLeft>
                            <S.DivRight>
                                {elem.composition}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </S.DivRight>
                            <Button onClick={()=>dispatch(addCar(elem))}>Buy</Button>
                        </S.DivItem>
                    )
                })}


            </S.DetailsContainer>
        </section>
    )
}

export default Details