import React, { useState } from 'react'
import * as S from './../../styles/Nav.styled'
import { AiFillClockCircle, AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { NavLink, useNavigate } from "react-router-dom";
import { NavLinkItem } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { MdRestaurantMenu, MdOutlineMenuBook } from "react-icons/md"
import { auth } from '../../Firebase/Firebase';
import { signOut } from 'firebase/auth';




function Nav() {

    const Navigate = useNavigate()
    const { car, user } = useSelector(store => store.car)
    const [showMenu, setShowMenu] = useState(false)

    function handleNavigate() {
        if (user) {
            signOut(auth)
        }
        else {
            Navigate("/Login")
        }
    }

    function handleshowMenu() {
        setShowMenu(!showMenu)
        showMenu ? document.body.style.overflow = "visible" : document.body.style.overflow = "hidden"
    }
    function handleCloseMenu() {
        setShowMenu(!showMenu)
        document.body.style.overflow = "visible"
    }

    return (
        <>
            <S.NavTop>
                <S.Container>
                    <div style={{ display: "flex", gap: 100, cursor: 'pointer' }}>
                        <S.TimeWrap >
                            <AiFillClockCircle style={{ fontSize: 19 }} />
                            <p>7.30 AM - 9.30 PM</p>
                        </S.TimeWrap>
                        <S.NumperWrap>
                            <BsFillTelephoneFill style={{ fontSize: 19 }} />
                            <p>+880 1630 225 015</p>
                        </S.NumperWrap>
                    </div>
                </S.Container>
            </S.NavTop>
            <S.Nav>
                <S.Container>
                    <img src="/img/logo.png" alt="logo" onClick={() => Navigate("/")} style={{ cursor: 'pointer' }} />
                    <S.Ul className={showMenu ? "active" : ""}>
                        {NavLinkItem.map((elem) => {
                            const { id, path, title } = elem
                            return (
                                <NavLink key={id} to={path} onClick={() => handleCloseMenu()} >{title}</NavLink>
                            )
                        })}
                    </S.Ul>
                    <S.Left>
                        <S.CarWrapp onClick={() => Navigate("/car")}>
                            <AiOutlineShoppingCart />
                            <p style={{ position: "absolute", fontSize: "16px", color: "white", top: "5px" }}>{car.length}</p>
                        </S.CarWrapp>
                        <S.Delivery>
                            <S.DeliveryWrapp >
                                <p>Delivery Order</p>
                                <h5>+880 1630 225 015</h5>
                            </S.DeliveryWrapp >
                            <img src="/img/food 1.png" alt="food" />
                            <div style={{display:"flex",flexDirection:"column",marginLeft:"40px",gap:"10px",alignItems:"center"}}>
                                {user}
                                <S.LoginButton onClick={handleNavigate}>{user ? "Sig in" : " Login"}</S.LoginButton>
                            </div>
                            <S.MenuIcons onClick={() => handleshowMenu()}>
                                {showMenu ? <MdRestaurantMenu /> : <MdOutlineMenuBook />}

                            </S.MenuIcons>
                        </S.Delivery>
                    </S.Left>

                </S.Container>
            </S.Nav>
        </>
    )
}

export default Nav