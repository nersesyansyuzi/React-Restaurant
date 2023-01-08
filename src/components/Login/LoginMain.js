import React, { useRef } from 'react'
import { auth, createUser, siginUser } from '../Firebase/Firebase'
import * as S from '../styles/LoginMain.styled'

function LoginMain() {
    const emailRef=useRef()
    const passwordRef=useRef()

    
    async function handleSigin(e) {
        e.preventDefault()
        const { email, password } = { ...Object.fromEntries([...new FormData(e.target)]) }
        await siginUser(auth, email, password)
        emailRef.current.value=""
        passwordRef.current.value=""
    }



    async function handleRegist(e) {
        e.preventDefault()
        const { email, password } = { ...Object.fromEntries([...new FormData(e.target)]) }
        await createUser(auth, email, password)
        emailRef.current.value=""
        passwordRef.current.value=""
    }

    return (
        <section style={{ backgroundColor: "white" }}>
            <S.LoginImg style={{ backgroundImage: `url("img/Rectangle 58.png")` }}>
                My Account
            </S.LoginImg>
            <S.LoginContainer>
                <S.Div>
                    <S.LoginTile> Login</S.LoginTile>
                    <form onSubmit={(e) => handleSigin(e)}>
                        <div >
                            <h4 style={{ padding: "15px 0" }}>Email address *</h4>
                            <S.Input type="text" name='email' ref={emailRef} />
                        </div>
                        <div>
                            <h4 style={{ padding: "15px 0" }}>Password  *</h4>
                            <S.Input type="password" name='password'ref={passwordRef} />
                        </div>
                        <S.LoginButton>Log in</S.LoginButton>
                    </form>
                </S.Div>
                <S.Div>
                    <S.LoginTile> Register</S.LoginTile>
                    <form onSubmit={(e) => handleRegist(e)}>
                        <div >
                            <h4 style={{ padding: "15px 0" }}>Email address *</h4>
                            <S.Input type="email" name='email' ref={emailRef} />
                        </div>
                        <div>
                            <h4 style={{ padding: "15px 0" }}>Password  *</h4>
                            <S.Input type="password" name='password' ref={passwordRef} />
                        </div>
                        <S.LoginButton>Register</S.LoginButton>
                    </form>
                </S.Div>
            </S.LoginContainer>
            <h2 style={{ textAlign: "center", padding: "50px 0px", fontSize: "45px" }}>Our Branch</h2>
        </section>
    )
}

export default LoginMain