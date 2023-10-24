import { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../data/links.js'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp, BsChevronRight } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import cardImage from '../../assets/images/1.jpg'
import headphoneImg from '../../assets/images/headphones.png'
import speakersImg from '../../assets/images/speakers.png'
import earphonesImg from '../../assets/images/earphones.png'
import './navbar.css'
import 'aos/dist/aos.css'

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [isMenuActive, setIsMenuActive] = useState(false)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  return (
    <div className='page-nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          {windowWidth <= 768 && (
            <button
              className='menu-toggler'
              onClick={() => setIsMenuActive((active) => !active)}
              data-aos='fade-right'
            >
              {isMenuActive ? <IoCloseSharp /> : <FaBars className='fa-bars' />}
            </button>
          )}

          <div className='page-logo' data-aos='fade-right'>
            <Link
              to='/'
              className='home-link'
              onClick={() => setIsMenuActive(false)}
            >
              audiophile
            </Link>
          </div>
          <ul className={`nav-list ${isMenuActive ? 'menu-active' : ''}`}>
            {windowWidth > 768 ? (
              links.map((link) => {
                return (
                  <li key={link} className='nav-item'>
                    <Link
                      to={link === '' ? '/' : `/category/${link}`}
                      className='nav-link'
                    >
                      {link || 'home'}
                    </Link>
                  </li>
                )
              })
            ) : (
              <ul className='nav-list-mobile'>
                <li className='nav-item-mobile'>
                  <Link
                    to='/category/headphones'
                    onClick={() => setIsMenuActive(false)}
                  >
                    <div className='product-link-box'>
                      <img src={headphoneImg} className='product-img' />
                      <h5>headphones</h5>
                      <h4>
                        shop
                        <BsChevronRight className='bs-icon' />
                      </h4>
                    </div>
                  </Link>
                </li>
                <li className='nav-item-mobile'>
                  <Link
                    to='/category/speakers'
                    onClick={() => setIsMenuActive(false)}
                  >
                    <div className='product-link-box'>
                      <img src={speakersImg} className='product-img' />
                      <h5>speakers</h5>
                      <h4>
                        shop
                        <BsChevronRight className='bs-icon' />
                      </h4>
                    </div>
                  </Link>
                </li>
                <li className='nav-item-mobile'>
                  <Link
                    to='/category/earphones'
                    onClick={() => setIsMenuActive(false)}
                  >
                    <div className='product-link-box'>
                      <img src={earphonesImg} className='product-img' />
                      <h5>earphones</h5>
                      <h4>
                        shop
                        <BsChevronRight className='bs-icon' />
                      </h4>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </ul>

          <div className='nav-end' data-aos='fade-left'>
            <div className='shopping-cart'>
              <AiOutlineShoppingCart className='cart' />
              <div className='items-counter'>5</div>
            </div>
            <div
              className='account-details'
              onClick={() => setIsFormOpen((open) => !open)}
            >
              {windowWidth <= 752 ? (
                <AiOutlineUser className='user-profile' />
              ) : (
                <>
                  <span>My account</span>
                  {isFormOpen ? <BsChevronUp /> : <BsChevronDown />}
                </>
              )}
            </div>
            {isFormOpen && (
              <div className='form-card'>
                <img src={cardImage} className='card-image' />
                <div className='card-text'>Log in and see your purchases</div>
                <div className='buttons'>
                  <Link to='/login' className='login'>
                    LOG IN
                  </Link>
                  <div>
                    <Link to='/signup' className='signup'>
                      SIGN UP
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
