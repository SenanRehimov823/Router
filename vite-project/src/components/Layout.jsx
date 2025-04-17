import React from 'react'
import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
       
        <Link to="/" style={{ margin: '0 10px' ,textDecoration:'none'}}>Home</Link>
        <Link to="/basket" style={{ margin: '0 10px' ,textDecoration:'none'}}>Səbət</Link>
        <Link to="/favorites" style={{ margin: '0 10px',textDecoration:'none' }}>Favorilər</Link>
      
      <Outlet />
    </div>
  )
}

export default Layout