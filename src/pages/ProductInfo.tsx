import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/context'
import formatter from '../utils/numberFormatter'

export default function ProductInfo() {
  const { products, shoppingCartItems, setShoppingCartItems } =
    useContext(Context)

  const { id } = useParams()

  const product = products.find((p: object) => p.id === id)

  const [itemQuantity, setItemQuantity] = useState(product.quantity || 0)

  // useEffect(() => {
  //   product.quantity = itemQuantity
  // }, [itemQuantity])

  const addToCart = () => {
    if (!shoppingCartItems.some((item) => item.id === product.id)) {
      setShoppingCartItems((cartItems) =>
        [...cartItems, product].filter((item) => item.quantity > 0)
      )
    } else {
      setShoppingCartItems((cartItems) => {
        return cartItems
          .map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: itemQuantity }
            }
            return item
          })
          .filter((item) => item.quantity > 0)
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
  marginTop: '150px',
}
