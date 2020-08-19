import React,{useState} from 'react'

function Register({setUser}) {
    const [username,setUsername]=useState('')
    const [password,setPassword] = useState('')
    const [passwordRepeat,setPasswordRepeat]=useState('')
    function handleUsername(evt){
        setUsername(evt.target.value)
    }

    function handlePassword(evt){
        setPassword(evt.target.value)
    }

    function handlePasswordRepeat(evt){
        setPasswordRepeat(evt.target.value)
    }
    return (
        <form onSubmit={e => { e.preventDefault(); setUser(username) }}>
        <label htmlFor="register-username">Username:</label>
        <input onChange={handleUsername} type="text" name="register-username" id="register-username" />
        <label htmlFor="register-password">Password:</label>
        <input onChange={handlePassword} type="password" name="register-password" id="register-password" />
        <label htmlFor="register-password-repeat">Repeat password:</label>
        <input onChange={handlePasswordRepeat} type="password" name="register-password-repeat" id="register-password-repeat" />
        <input disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat}  type="submit" value="Register" />
      </form>
    )
}

export default Register
