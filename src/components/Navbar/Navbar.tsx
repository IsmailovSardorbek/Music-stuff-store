import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../data/links.js'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import cardImage from '../../../public/images/1.jpg'
import MobileNav from '../MobileNav/MobileNav.js'
import Context from '../../context/context.js'
import formatter from '../../utils/numberFormatter.js'
import './navbar.css'

const Navbar = () => {
  const { shoppingCartItems, setShoppingCartItems } = useContext<any>(Context)

  const [isFormOpen, setIsFormOpen] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [isMenuActive, setIsMenuActive] = useState(false)

  const [scrollY, setScrollY] = useState(window.scrollY)

  const [isCartOpen, setIsCartOpen] = useState(false)

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY)
  })

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  const removeFromCart = (id) => {
    setShoppingCartItems((cartItems:Array<object>) => {
      return cartItems.filter((item:object) => item.id !== id)
    })
  }

  let totalPrice = shoppingCartItems.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  )

  return (
    <div className={`page-nav ${scrollY > 90 ? 'scroll-header' : ''}`}>
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
          <ul
            className={`nav-list ${isMenuActive ? 'menu-active' : ''}`}
            data-aos={`${windowWidth > 768 ? 'fade-down' : ''}`}
          >
            {windowWidth > 768 ? (
              links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className='nav-item'
                    data-aos='fade-down'
                    data-aos-delay={index * 100}
                  >
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
              <MobileNav />
            )}
          </ul>

          <div className='nav-end' data-aos='fade-left'>
            <div className='shopping-cart'>
              <AiOutlineShoppingCart
                className='cart'
                onClick={() => setIsCartOpen((open) => !open)}
              />
              {shoppingCartItems.length > 0 && (
                <div className='items-counter'>{shoppingCartItems.length}</div>
              )}
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
            {isCartOpen && (
              <div className='shopping-cart-list'>
                <div className='cart-content'>
                  <ul>
                    {shoppingCartItems.length > 0 ? (
                      shoppingCartItems.map((cartItem) => (
                        <li key={cartItem.id}>
                          <div className='c-left'>
                            <img src={cartItem.productImgLink} />
                            <div>
                              <h6>
                                {cartItem.name}
                                &nbsp; &nbsp;
                                {
                                  shoppingCartItems.find(
                                    (item) => item.name === cartItem.name
                                  ).quantity
                                }
                                x
                              </h6>
                              <p>
                                {formatter
                                  .format(cartItem.price)
                                  .replace(/us/i, '')}
                              </p>
                            </div>
                          </div>
                          <div className='c-right'>
                            <button
                              className='remove-btn'
                              onClick={() => removeFromCart(cartItem.id)}
                            >
                              &times;
                            </button>
                          </div>
                        </li>
                      ))
                    ) : (
                      <p>No Products Added yet</p>
                    )}
                  </ul>
                </div>
                {shoppingCartItems.length > 0 && (
                  <div className='total-price'>
                    Total price
                    <h3 className='total'>
                      {formatter.format(totalPrice).replace(/us/i, '')}
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
