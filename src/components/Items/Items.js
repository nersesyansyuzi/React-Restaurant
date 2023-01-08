import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllItem } from '../redux/slice/ItemsSlice'
import { Link } from "react-router-dom"
import * as S from '../styles/Items.styled'


function Items() {

    const dispatch = useDispatch()
    const { items, status } = useSelector(store => store.item)
    const [inputValue,setInputValue]=useState("")
    const [show,setShow]=useState(false)

    useEffect(() => {
        dispatch(fetchAllItem())
    }, [])

    function handleSearch(){
        dispatch(fetchAllItem(inputValue.toUpperCase()))
        setInputValue("")
        setShow(true)
    }

    function handleSearchAll(){
        dispatch(fetchAllItem())
        setShow(false)
    }

    return (
        <section>
            <S.ItemsImg style={{ backgroundImage: `url("img/Rectangle 58.png")` }}>
                <h2>ITEMS</h2>
                <p style={{ fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</p>
            </S.ItemsImg>
            <S.ItmesTitle>
                It’s the food and groceries you Love, delivered
            </S.ItmesTitle>
            <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
                <S.InputDiv>
                    <S.Input type={"search"} placeholder="Search your Items"  onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                </S.InputDiv>
                <S.InputButton onClick={handleSearch}>Go</S.InputButton>
                {show && <S.InputButton onClick={()=>handleSearchAll()}>All</S.InputButton>}
            </div>
            <S.ItemContainer>
                {
                    status === "LOADING" ?
                        <S.SpinWrapeer>
                            <S.Spiner/>
                        </S.SpinWrapeer>
                        : 
                        <>
                            <S.ItemTop>
                                <S.ItemDivLeft>
                                    {items.slice(0, 5).map((elem) => {
                                        const { id, src, title, price, composition } = elem

                                        return <Link key={id} to={`/details/${id}`}>
                                            <S.Item >
                                                <div style={{display:"flex",flexDirection:"column"}}>
                                                    <h3>{title}</h3>
                                                    <h5>{composition}</h5>
                                                    <h5>{price}</h5>
                                                </div>
                                                <img src={"img/" + src + ".png"} alt={title} />
                                            </S.Item>
                                        </Link>
                                    })}
                                </S.ItemDivLeft>
                                <S.ItemDivRight>
                                    <S.Img1 src="img/image_itemsList_ooffer.png" />
                                    {items.slice(5, 7).map((elem) => {
                                        const { id, src, title, price, composition } = elem

                                        return <Link key={id} to={`/details/${id}`}>
                                            <S.Item  >
                                                <div style={{display:"flex",flexDirection:"column"}}>
                                                    <h3>{title}</h3>
                                                    <h5>{composition}</h5>
                                                    <h5>{price}</h5>
                                                </div>
                                                <img src={"img/" + src + ".png"} alt={title} />
                                            </S.Item>
                                        </Link>
                                    })}
                                </S.ItemDivRight>
                            </S.ItemTop>
                            <S.ItemBottom>
                                <S.Img2 src='img/image_itemsList_ooffer_2.png' />
                                <S.ItemWraper>
                                    <S.ItemBottomLeft>
                                        {items.slice(7, 11).map((elem) => {
                                            const { id, src, title, price, composition } = elem

                                            return <Link key={id} to={`/details/${id}`}>
                                                <S.Item >
                                                    <div style={{display:"flex",flexDirection:"column"}}>
                                                        <h3>{title}</h3>
                                                        <h5>{composition}</h5>
                                                        <h5>{price}</h5>
                                                    </div>
                                                    <img src={"img/" + src + ".png"} alt={title} />
                                                </S.Item>
                                            </Link>
                                        })}
                                    </S.ItemBottomLeft>
                                    <S.ItemBottomRight>
                                        {items.slice(11).map((elem) => {
                                            const { id, src, title, price, composition } = elem

                                            return <Link key={id} to={`/details/${id}`}>
                                                <S.Item >
                                                    <div style={{display:"flex",flexDirection:"column"}}>
                                                        <h3>{title}</h3>
                                                        <h5>{composition}</h5>
                                                        <h5>{price}</h5>
                                                    </div>
                                                    <img src={"img/" + src + ".png"} alt={title} />
                                                </S.Item>
                                            </Link>
                                        })}
                                    </S.ItemBottomRight>
                                </S.ItemWraper>
                            </S.ItemBottom>
                        </>
                }

            </S.ItemContainer>
        </section>
    )
}

export default Items