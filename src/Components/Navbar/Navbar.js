import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import myLogo from './cdac.jpg';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
        
    }

  }, [])

  return (
    <div className="topbar">
      <ul className="left">
        <li><img className="logo" src="cdac.png" width="65" height="40" alt="" /></li>
      </ul>
            
      <div className="center"> 
      <nav>
      
        {(toggleMenu || screenWidth > 500) &&  (
        
      <ul className="list">
        {/* <li><img className="logo" src="./cdac.png" width="65" height="40" /></li> */}
        <ul className="list">
          <li className="items"><Link to="/palette">Home</Link></li>
          <li className="items"><Link to="/aboutus">About</Link></li>
          <li className="items">Contact</li>
          <li className="items"><Link to="/services">Services</Link></li>
        {/* <li className="items"><button className="bttn" type="submit"><p>Login</p></button><button className="bttn" type="submit"><p>Signup</p></button></li> */}
        {/* <li className="items"></li> */}
        {/* <li className="items">Login/Signup</li> */}
        </ul>
        <ul className="rights">
          <li className="right"><p id="p0"><Link to="/login">Login</Link></p></li>
            {/* <button className="bttn" type="submit"> */}
              
              {/* </button> */}
            {/* <button className="bttn" type="submit"> */}
             <li className="right"><p id="p0"><Link to="/signup">Signup</Link></p></li>
              {/* </button> */}
          
        </ul>
      </ul>
        
    
      )}
      {/* <Login /> */}
    </nav>
    </div>
    <button onClick={toggleNav} className="btn">≡</button>
    </div>
  )
}

// export default Loggin;

