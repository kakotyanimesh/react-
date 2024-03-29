import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import  {logout} from  '../../store/authslice'

function LogoutButton() {
    const dispatch = useDispatch()
  const logoutHandler = () =>{
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button 
    className='inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full'>logout</button>
  )
}

export default LogoutButton