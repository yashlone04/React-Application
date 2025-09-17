import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='myclass'>
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

        <Outlet/>
    </div>
  )
}

export default Main
