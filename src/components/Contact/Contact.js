import React from 'react'
import * as S from '../styles/Contact.styled'
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram ,AiFillClockCircle} from "react-icons/ai"



function Contact() {
    return (
        <>
            <section>
                <S.ContactImg style={{ backgroundImage: `url("img/image_contact_bg.png")` }} >
                    <S.ContactTitle color=' #FFF8EE;' style={{ paddingTop: "80px" }}>
                        CONTACT US
                    </S.ContactTitle>
                    <S.ContactP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.
                    </S.ContactP>
                </S.ContactImg>
            </section>
            <section >
                <S.ContactContainer>
                    <S.Div>
                        <div>
                            <S.ContactTitle color='#CC3333'>ADDRESS</S.ContactTitle>
                            <p>28 Seventh Avenue, Neew York, 10014</p>
                            <p style={{padding:"25px 0"}}>+880 1630 225 015</p>
                            <p>resturents@gmail.com</p>
                        </div>
                        <div>
                            <S.ContactTitle color='#CC3333' >WORKING HOURS</S.ContactTitle>
                            <p><AiFillClockCircle style={{color:"#CC3333",fontSize:"19px"}}/> 7:30 am to 9:30pm on Weekdays</p>
                        </div>
                        <div>
                            <S.ContactTitle color='#CC3333'>FOLLOW US</S.ContactTitle>
                            <div style={{color:"#CC3333",fontSize:"25px",paddingTop:"25px",gap:"50px",display:"flex"}}>
                                <AiFillFacebook />
                                <AiOutlineInstagram />
                                <AiOutlineTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </S.Div>
                    <S.MapImg src='img/map.png'/>
                </S.ContactContainer>
                <S.ContactTitle style={{textAlign:"center",padding:"50px 0 "}}>Our Branch</S.ContactTitle>
            </section>
        </>
    )
}

export default Contact