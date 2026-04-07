const KEY = 'orders'

export function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem(KEY)) || []

  orders.push({
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...order
  })

  localStorage.setItem(KEY, JSON.stringify(orders))
}

export function getOrders() {
  return JSON.parse(localStorage.getItem(KEY)) || []
}