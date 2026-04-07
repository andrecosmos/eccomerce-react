import { useEffect, useState } from 'react'
import { getOrders } from '../../services/orders'
import Container from '../layout/Container'
import Card from '../ui/Card'
import styles from './Dashboard.module.css'

function Dashboard() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  const total = orders.reduce((acc, order) => {
    const soma = order.items.reduce((t, i) => {
      return t + Number(i.price.replace(',', '.'))
    }, 0)

    return acc + soma
  }, 0)

  return (
    <Container>
      <h1>Painel do Vendedor</h1>

      <div className={styles.dashboard}>
        <Card>
          <h3>Pedidos</h3>
          <p>{orders.length}</p>
        </Card>

        <Card>
          <h3>Faturamento</h3>
          <p>R$ {total.toFixed(2)}</p>
        </Card>

        <Card>
          <h3>Clientes</h3>
          <p>{orders.length}</p>
        </Card>
      </div>

      <Card>
        <h3>Pedidos Recentes</h3>
        <ul>
          {orders.slice(-5).reverse().map(order => (
            <li key={order.id}>
              Pedido #{order.id} - {order.date} - R$ {order.items.reduce((t, i) => t + Number(i.price.replace(',', '.')), 0).toFixed(2)}
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  )
}

export default Dashboard