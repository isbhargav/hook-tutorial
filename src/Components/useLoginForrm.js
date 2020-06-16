import React from 'react'

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('prevent default')
}

export const LoginForm = () => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Login Form </h3>
                <div><input type='text' placeholder='username'></input></div>
                <div><input type='password' placeholder='password'></input></div>
                <button type='submit'>Login</button>
            </form>
        </>
    );
}