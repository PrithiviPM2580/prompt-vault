import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const SignIn = () => {
    return (
        <div className='sign-in__container'>
            <div className="sign-in__left">
                <div className="sign-in__box">
                    <div className="box">
                        <img src="/images/prompt-vault.png" alt="" />
                    </div>
                    <div className='content'>
                        <h1 className='title'>Welcome to PromptVault</h1>
                        <p className='description'>Organize your best AI prompts effortlessly. Save, tag, and access your creative ideas anytime, anywhere — all in one secure place.</p>
                    </div>
                </div>
            </div>
            <div className="sign-in__right">
                <div className="header">
                    <div className="img">
                        <img src="/images/PromptVault.png" alt="" />
                    </div>
                    <p className="tag">Dont have an account? <span><Link to="/sign-up">Sign Up</Link></span></p>
                </div>
                <div className="form">
                    <div>
                        <h1>Welcome back to  PromptVault</h1>
                        <p>Please enter your details to signin in your account!</p>
                    </div>
                    <form action="">
                        <div className='input'>
                            <label htmlFor="identifier">Email or Username</label>
                            <input type="text" name='identifier' placeholder='Enter your email or username' required minLength={3} maxLength={50} />
                        </div>
                        <div className='input'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='********' required minLength={6} maxLength={20} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn