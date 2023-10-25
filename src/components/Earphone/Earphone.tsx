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
            <div className='e-left'>
              <img src={products[2].productImgLink} />
            </div>
            <div className='e-right'>
              <div className='e-right-content'>
                <h1>{products[2].name}</h1>
                <Link to={`${products[1].id}`} className='speaker-link'>
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
