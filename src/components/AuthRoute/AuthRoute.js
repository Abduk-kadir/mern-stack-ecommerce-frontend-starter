import React from 'react'
import Login from '../Users/Forms/Login'
const AuthRoute =({children})=>{
    let user=JSON.parse(localStorage.getItem('userInfo'))
    let isLogged=user?.token?true:false
    if(!isLogged){return <Login/>}
    return (
        <div>{children}</div>
    )
}
export default AuthRoute