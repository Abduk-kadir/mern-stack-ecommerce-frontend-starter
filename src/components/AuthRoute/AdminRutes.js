import React from 'react'
import Login from '../Users/Forms/Login'
const AdminRoutes =({children})=>{
    let user=JSON.parse(localStorage.getItem('userInfo'))
    let isAdmin=user?.userFound?.isAdmin?true:false
    if(!isAdmin){return <h2>Access denied</h2>}
    return (
        <div>{children}</div>
    )
}
export default AdminRoutes