import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const totalPrice = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )

      const totalQuantity = cartList.length

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="button-remove"
                  type="button"
                  onClick={onClickRemoveAll}
                >
                  Remove All
                </button>
                <CartListView />
                {
                  /* TODO: Add your code for Cart Summary here */
                  <div className="cart-summery">
                    <h1 className="total-cost">
                      Order Total:
                      <span className="span"> Rs {totalPrice}/-</span>
                    </h1>
                    <p className="total-items">{totalQuantity} items in cart</p>
                    <button className="button-sp" type="button">
                      Checkout
                    </button>
                  </div>
                }
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
