const KEY = 'produtos'

export function saveProdutos(produtos) {
  localStorage.setItem(KEY, JSON.stringify(produtos))
}

export function getProdutosStorage() {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}


export function addProduto(novoProduto) {
  const produtos = getProdutosStorage()

  produtos.push({
    ...novoProduto,
    id: Date.now()
  })

  saveProdutos(produtos)
}

export function clearProdutos() {
  localStorage.removeItem(KEY)
}