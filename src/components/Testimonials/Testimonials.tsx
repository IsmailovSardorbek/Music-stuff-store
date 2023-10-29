import testimonialImg from '../../../public/images/image-best-gear.jpg'
import './testimonials.css'

export default function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='hero-container'>
        <div className='t-wrapper'>
          <div className='t-left' data-aos='zoom-in' data-aos-delay='100'>
            <h1>
              BRINGING YOU THE <span className='text-coral'>BEST</span> AUDIO
              GEAR
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className='t-right'>
            <img
              src={testimonialImg}
              data-aos='zoom-out'
              data-aos-delay='100'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
