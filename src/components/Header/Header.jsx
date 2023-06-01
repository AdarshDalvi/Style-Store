import { useEffect, useState } from 'react'
import './Header.scss'
import { NavLink} from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(()=>{
    function watchWindowWidth(){
      if(window.innerWidth>725){
        setShowNavbar(prevNavBar=> false)
      }
    }
    window.addEventListener('resize',watchWindowWidth)

    return function(){
      window.removeEventListener('resize',watchWindowWidth)
    }
  })

  const showHamburger = () =>{
    setShowNavbar(prevNavBar=> !prevNavBar)
  }

  return (
    <>
      <header>
        <NavLink to='.'>
          <img className='logo'  src="/images/main-logo.png" alt="logo-icon" />
        </NavLink>
        <div className='nav-wrapper'>
          <NavLink to='account'><FaUserAlt className='icons account'/></NavLink>
          <NavLink to='cart'><AiOutlineShoppingCart className='icons cart'/></NavLink>
          <div className='hamburger-menu'>
            {!showNavbar ? <BiMenuAltRight className='hamburger-icon' onClick={()=>showHamburger()}/>: <GrFormClose className='hamburger-icon' onClick={()=>showHamburger()}/>}
          </div>
          <nav className={!showNavbar?'nav-deactivate':null}>
            <NavLink to='.' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>Home</NavLink>
            <NavLink to='shop/0' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>Shop</NavLink>
            {showNavbar&& <NavLink to='account' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>Account</NavLink>}
            {/* {showNavbar&&<NavLink to='cart' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>Cart</NavLink>} */}
            <NavLink to='about' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>About</NavLink>
            <NavLink to='contact' onClick={()=>setShowNavbar(prevValue=>false)} className={({isActive}) => isActive ? 'activeLink' : null}>Contact</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}