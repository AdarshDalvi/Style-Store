import { useEffect, useRef, useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(false)
  const cartCount = useSelector(state => state.cart.cartItems.length)
  const favCount = useSelector(state => state.favorite.favorites.length)
  const navRef = useRef()
  useEffect(() => {
    function watchWindowWidth() {
      if (window.innerWidth > 725) {
        setShowNavbar(prevNavBar => false)
      }
    }
    window.addEventListener('resize', watchWindowWidth)

    return function () {
      window.removeEventListener('resize', watchWindowWidth)
    }
  })

  const showHamburger = () => {
    setShowNavbar(prevNavBar => !prevNavBar)
  }


  return (
    <>
      <header>
        <NavLink to='.'>
          <img className='logo' src="/general/main-logo.png" alt="logo-icon" />
        </NavLink>
        <div className='nav-wrapper'>

          <div className='icon-wrapper favorite'>
            <NavLink to='favorite'> <MdFavoriteBorder /> </NavLink>
            {favCount > 0 && <span>{favCount}</span>}
          </div>

          <div className='icon-wrapper cart'>
            <NavLink to='cart'> <AiOutlineShoppingCart /> </NavLink>
            {cartCount > 0 && <span>{cartCount}</span>}
          </div>

          <div className='hamburger-menu'>
            {!showNavbar ? <BiMenuAltRight className='hamburger-icon' onClick={() => showHamburger()} /> : <GrFormClose className='hamburger-icon' onClick={() => showHamburger()} />}
          </div>

          <nav className={`${showNavbar && 'active-nav'}`}>
            <NavLink to='.' onClick={() => setShowNavbar(prevValue => false)} className={({ isActive }) => isActive ? 'activeLink' : null}>Home</NavLink>
            <NavLink to='products/3' onClick={() => setShowNavbar(prevValue => false)} className={({ isActive }) => isActive ? 'activeLink' : null}>Shop</NavLink>
            <NavLink to='about' onClick={() => setShowNavbar(prevValue => false)} className={({ isActive }) => isActive ? 'activeLink' : null}>About</NavLink>
            <NavLink to='contact' onClick={() => setShowNavbar(prevValue => false)} className={({ isActive }) => isActive ? 'activeLink' : null}>Contact</NavLink>
          </nav>

        </div>
      </header>
    </>
  )
}
