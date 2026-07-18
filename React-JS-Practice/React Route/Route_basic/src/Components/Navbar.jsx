import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{background:'pink', padding:'10px',marginBottom:'100 px'}}>
      <NavLink style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          padding: "8px 15px",
          borderRadius: "5px",
          backgroundColor: isActive ? "orange" : "transparent",
        })} to="/">Home</NavLink> | {" "}

      <NavLink style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          padding: "8px 15px",
          borderRadius: "5px",
          backgroundColor: isActive ? "orange" : "transparent",
        })} to={'/about'}>About</NavLink> | {""}

      <NavLink style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          padding: "8px 15px",
          borderRadius: "5px",
          backgroundColor: isActive ? "orange" : "transparent",
        })} to={'/product'}>Product</NavLink> | {""}

      <NavLink style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          padding: "8px 15px",
          borderRadius: "5px",
          backgroundColor: isActive ? "orange" : "transparent",
        })} to={'/user'}>User</NavLink> | {" "}
      
      
      
      </div>
      
      
      
      
        // {/* <nav>
        //     <Link to={'/'}>Home</Link>| {" "}
        //     <Link to={'/about'}>About</Link> | {" "}
        //     <Link to={'/product'}>Product</Link> | {" "}
        //     <Link to={'/user'}>User</Link>
        // </nav> */}
        

  )
}

export default Navbar