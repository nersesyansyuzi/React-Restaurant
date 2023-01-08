import React from 'react'
import * as S from '../styles/About.styled'

function About() {
    return (
        <section>
            <S.AboutImg style={{ backgroundImage: `url("img/image_about-bg.png")` }}>
                <h2>About Us</h2>
                <p style={{ fontSize: "17px" }}>Read our Story, How we started and about the Team</p>
            </S.AboutImg>
            <S.AboutContainer>
                <S.DivTop>
                    <S.Img src='img/image_about_1.png' />
                    <S.Div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis a beatae sequi repellat perspiciatis, neque non deserunt temporibus </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quo, voluptatibus fugiat deserunt voluptates odit sapiente accusantium maiores quod quam pariatur, quae eos tempore? At eos quae provident laborum distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima. Natus tem</p>
                    </S.Div>
                </S.DivTop>
                <h2 style={{ textAlign: "center", paddingTop: "25px", fontSize: "30px", color: "#CC3333" }}>OUR STORY</h2>
                <S.DivBottom>
                    <S.Div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage</p>
                    </S.Div>
                    <S.Img src='img/image_ourStory_1.png' />
                </S.DivBottom>
            </S.AboutContainer>
            <div style={{ backgroundColor: "#FFDFDF" }}>
                <S.AboutContainer>
                    <S.AboutFooter>
                        <S.Div>
                            <h3>TASTY AND CRUNCHY</h3>
                            <p>Our Chef</p>
                            <p style={{ width: "600px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
                        </S.Div>
                        <S.FImg src='img/image_ourChef.png' />
                    </S.AboutFooter>
                </S.AboutContainer>
            </div>
        </section>
    )
}

export default About