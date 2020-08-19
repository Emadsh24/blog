import React,{useState} from 'react'

function Login({setUser}) {
    const [username,setUserName]=useState('');

    function handleUsername(evt){
        setUserName(evt.target.value)
    }
    return (
       <form onSubmit={e => { e.preventDefault(); setUser(username) }}>
            <label htmlFor="login-username">Username</label>
            <input value={username} onChange={handleUsername} type="text" name="login-username" id="login-username"></input>
            <label htmlFor="login-password">Password</label>
            <input type="password" name="login-password" id="login-password"></input>
            <input disabled={username===0} type="submit" value="Login"></input>

        </form>
    )
}

export default Login
