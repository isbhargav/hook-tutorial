import React, { useReducer, useEffect } from 'react'


// just replicates authentication 
const Login = async ({ username, password }) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'bhargav' && password === 'lad') {
                resolve()
            }
            else {
                reject()
            }
        }, 1000)
    })

}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, isLoading: true, error: null, isLoggedin: false }
        case 'onChange':
            return { ...state, [action.name]: action.value, isLoggedin: false }
        case 'error':
            return { ...init_val, error: action.msg, isLoggedin: false }
        case 'success':
            return { ...state, isLoggedin: true, error: null, isLoading: false }
        case 'logout':
            return { ...init_val }
        default:
            return state;
    }
}


const init_val = {
    username: '',
    password: '',
    error: null,
    isLoading: false,
    isLoggedin: false

}
export const LoginForm = () => {
    const [state, dispatcher] = useReducer(loginReducer, init_val)


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatcher({ type: 'login' })
        try {
            await Login({ username: state.username, password: state.password })
            dispatcher({ type: 'success' })
        } catch (error) {
            dispatcher({ type: 'error', msg: 'Invalid username or password' })
        }


    }
    const form = (
        <form onSubmit={handleSubmit}>
            <h3>Login Form </h3>
            <p style={{ color: 'red' }} >{state.error}</p>
            <div><input type='text' name='username' placeholder='username' value={state.username} onChange={e => dispatcher({ type: 'onChange', name: e.target.name, value: e.target.value })}></input></div>
            <div><input type='password' name='password' placeholder='password' value={state.password} onChange={e => dispatcher({ type: 'onChange', name: e.target.name, value: e.target.value })}></input></div>
            <button type='submit'>Login</button>
        </form>)

    const hello = (<div>
        <h2>Welcome {state.username}</h2>
        <button onClick={() => dispatcher({ type: 'logout' })}>Log out</button>
    </div>
    )

    const loading = (<h4>Loading ...</h4>)
    return state.isLoading ? loading : (state.isLoggedin ? hello : form);
}