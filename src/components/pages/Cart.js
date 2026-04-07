import { useEffect, useState } from 'react'
import { getCart, clearCart } from '../../services/cart'
import { saveOrder } from '../../services/orders'
import Container from '../layout/Container'
import Card from '../ui/Card'
import styles from './Cart.module.css'


function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  const total = cart.reduce((acc, item) => {
    return acc + Number(item.price.replace(',', '.'))
  }, 0)

 

function finalizarCompra() {
    saveOrder({ items: cart })
    clearCart()
    alert('Pedido realizado!')
  }

  return (
    <Container>
      <h1>Carrinho</h1>

      <Card>
        <h3>Itens no Carrinho</h3>
        {cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <div className={styles.cart}>
            {cart.map((item, i) => (
              <div key={i} className={styles.item}>
                <p>{item.name}</p>
                <p>R$ {item.price}</p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {cart.length > 0 && (
        <Card>
          <div className={styles.total}>
            <p>Total: R$ {total.toFixed(2)}</p>
          </div>
          <div className={styles.buttons}>
            <button className='buyButton' onClick={finalizarCompra}>Finalizar compra</button>
            <button className='clearButton' onClick={clearCart}>Limpar carrinho</button>
          </div>
        </Card>
      )}
    </Container>
  )
}

export default Cart