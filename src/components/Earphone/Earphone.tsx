import { useContext } from 'react'
import Context from '../../context/context'
import { Link } from 'react-router-dom'
import './earphone.css'

export default function Earphones() {
  const { products } = useContext<any>(Context)

  return (
    <>
      <div className='earphones-section'>
        <div className='hero-container'>
          <div className='section-wrapper'>
            <div className='e-left' data-aos='fade-right' data-aos-delay='400'>
              <img src={products[2].productImgLink} />
            </div>
            <div className='e-right' data-aos='fade-left' data-aos-delay='400'>
              <div className='e-right-content'>
                <h1>{products[2].name}</h1>
                <Link
                  to={`/category/earphones/${products[2].id}`}
                  className='speaker-link'
                >
                  see product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
