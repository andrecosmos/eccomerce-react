const KEY = 'cart'

export function getCart() {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export function addToCart(produto) {
  const cart = getCart()

  cart.push(produto)

  localStorage.setItem(KEY, JSON.stringify(cart))
}

export function clearCart() {
  localStorage.removeItem(KEY)
  window.location.reload()
  
}

export function getCartCount() {
  const cart = getCart()
  return cart.length
}