import React from 'react'
import "./style.css"

const SignUp = () => {
    return (
        <div className='sign-up__container'>
            <div className="sign-up__left">
                <div className="sign-up__box">
                    <div className="box">
                        <img src="/images/prompt-vault.png" alt="" />
                    </div>
                    <div className='content'>
                        <h1 className='title'>Your Prompt Library Awaits</h1>
                        <p className='description'>Keep your favorite AI prompts safe and easy to find. Start building your personal vault today.</p>
                    </div>
                </div>
            </div>
            <div className="sign-up__right">
                <div className="header">
                    <div className="img">
                        <img src="/images/PromptVault.png" alt="" />
                    </div>
                    <p className="tag">Already have an account? <span>Sign In</span></p>
                </div>
                <div className="form">
                    <div>
                        <h1>Welcome back to  PromptVault</h1>
                        <p>Please enter your details to signup in your account!</p>
                    </div>
                    <form action="">
                        <div className='input'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' placeholder='Ram Bahadur' required minLength={3} maxLength={50} />
                        </div>
                        <div className='input'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='ram@example.com' required />
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

export default SignUp