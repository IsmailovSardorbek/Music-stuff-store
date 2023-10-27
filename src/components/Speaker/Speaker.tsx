import { useContext } from 'react'
import Context from '../../context/context'
import { Link } from 'react-router-dom'
import './speaker.css'

export default function Speaker() {
  const { products } = useContext<any>(Context)

  return (
    <div
      className='speaker-info__section'
      data-aos='fade-in'
      data-aos-delay='100'
    >
      <div className='hero-container'>
        <div className='speaker-info' id='first'>
          <div
            className='section-left'
            data-aos='fade-right'
            data-aos-delay='300'
          >
            {<img src={products[0].productImgLink} alt='' />}
          </div>
          <div
            className='section-right'
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <div className='right-content'>
              <h1>{products[0].name}</h1>
              <p>
                Upgrade to premium speakers that are phenominally build to
                deliver truly remarkable sound.
              </p>
              <Link
                to={`/category/speakers/${products[0].id}`}
                className='speaker-link'
              >
                see product
              </Link>
            </div>
          </div>
        </div>
        <div className='speaker-info' id='second'>
          {<img src={products[1].productImgLink} />}
          <div
            className='section-right'
            data-aos='fade-right'
            data-aos-delay='200'
            style={{ zIndex: 11111 }}
          >
            <div className='right-content' style={{ paddingLeft: '55%' }}>
              <h1>{products[1].name}</h1>
              <Link
                to={`/category/speakers/${products[1].id}`}
                className='speaker-link'
              >
                see product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
