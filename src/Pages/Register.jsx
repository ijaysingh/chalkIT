import React from 'react'
import add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">ChalkIT</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder='Display Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="file" style={{display: 'none'}} id='file' />
                    <label htmlFor="file">
                        <img src={add} style={{width: '40px', height: '40px'}} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>

    )
}

export default Register