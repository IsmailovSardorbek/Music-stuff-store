import { Link } from 'react-router-dom'
import headphoneImg from '../../assets/images/headphones.png'
import speakersImg from '../../assets/images/speakers.png'
import earphonesImg from '../../assets/images/earphones.png'
import { BsChevronRight } from 'react-icons/bs'
import './products.css'

export default function Products() {
  return (
    <div className='products__section'>
      <ul
        className='nav-list-mobile'
        style={{ flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <li className='nav-item-mobile'>
          <Link to='/category/headphones'>
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
          <Link to='/category/speakers'>
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
          <Link to='/category/earphones'>
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
    </div>
  )
}
