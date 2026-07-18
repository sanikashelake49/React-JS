import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Nav = () => {
    const [isLogin, setisLogin] = useState(false)
    const location=useLocation();
    const navigate=useNavigate();

    const handleLogin=()=>{
        setisLogin(true);
        navigate('/user');
    }
     const handleLogout=()=>{
        setisLogin(false);
        navigate('/');
    }


  return (
     <div style={{background:'pink',text:'black', padding:'10px',marginBottom:'100 px'}}>
     <nav>    
       
       {isLogin && (<>
       <Link to='/user'>User</Link>
       <button onClick={handleLogout}>Logout</button>
       </>)}
       {!isLogin && (<>
       <Link to='/'>Home</Link>| {" "}
       <Link to='/about'>About</Link> | {" "}
       <Link to='/product'>Product</Link>| {" "}
       <br></br>
       <button onClick={handleLogin}>Login</button>
       </>)}
            </nav>
     </div>
  )
}

export default Nav
