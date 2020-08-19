import React,{useState} from 'react'
import Login from '../user/Login';
import Logout from '../user/Logout';
import Register from '../user/Register';
function UserBar({user,setUser}) {
    if(user){
    return (
                <Logout user={user} setUser={setUser} />
            )
    }  
    else{
        return(
            <React.Fragment>
                <Login setUser={setUser}/>
                <Register setUser={setUser} />
            </React.Fragment>
        )
    } 
}

export default UserBar
