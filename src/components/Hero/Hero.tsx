import { Link } from 'react-router-dom'
import { BsChevronDoubleDown } from 'react-icons/bs'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='hero-wrapper'>
          <div className='hero-left'>
            <h2
              className='hero-title'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              NEW PRODUCT
            </h2>
            <h1
              className='hero-subtitle'
              data-aos='fade-right'
              data-aos-delay='400'
            >
              XX99 MARK II HEADPHONES
            </h1>
            <p className='hero-text' data-aos='fade-right' data-aos-delay='600'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to='/category/headphones/'
              className='product-link'
              data-aos='zoom-in'
              data-aos-delay='800'
            >
              see product
            </Link>
          </div>
        </div>
        <BsChevronDoubleDown className='chevron-down' />
      </div>
    </div>
  )
}
