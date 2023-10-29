import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/context'
import formatter from '../utils/numberFormatter'
import { cartItem } from '../components/Navbar/Navbar'

export default function ProductInfo() {
  const { products, shoppingCartItems, setShoppingCartItems } =
    useContext<any>(Context)

  const { id } = useParams()

  const product = products.find((p: cartItem) => p.id === id)

  const [itemQuantity, setItemQuantity] = useState<number>(0)

  const addToCart = () => {
    if (!shoppingCartItems.some((item: cartItem) => item.id === product.id)) {
      setShoppingCartItems((cartItems: cartItem[]) =>
        [...cartItems, { ...product, quantity: itemQuantity }].filter(
          (item) => item.quantity > 0
        )
      )
    } else {
      setShoppingCartItems((cartItems: cartItem[]) => {
        return cartItems
          .map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: itemQuantity }
            }
            return item
          })
          .filter((item: cartItem) => item.quantity > 0)
      })
    }
  }

  return (
    <>
      <div className='product-info' style={styles}>
        <div className='hero-container'>
          <div className='product__info-wrapper'>
            <div className='image-gallery'>
              <div className='g-left'>
                <img src={product.img1Link} style={{ height: 100 }} />
                <img src={product.img2Link} style={{ height: 100 }} />
              </div>
              <div className='g-right'>
                <img src={product.img3Link} style={{ height: 100 }} />
              </div>
            </div>
            <div className='description'>
              <h1>{product.name}</h1>
              <p>{product.features}</p>
              <h3 className='price'>
                {formatter.format(product.price).replace('US', '')}
              </h3>

              <div className='buttons'>
                <div className='quantity'>
                  <button
                    className='decrement'
                    disabled={itemQuantity === 0}
                    onClick={() =>
                      setItemQuantity((prevQuantity) => prevQuantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className='item-count'>{itemQuantity}</div>
                  <button
                    className='increment'
                    onClick={() =>
                      setItemQuantity((prevQuantity) => prevQuantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button className='add-to-cart' onClick={addToCart}>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  marginTop: '120px',
}
