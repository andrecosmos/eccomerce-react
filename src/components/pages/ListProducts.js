// src/components/pages/ProdutosList.js
import { useEffect, useState } from 'react'
import { getProdutosStorage } from '../../services/Storage'
import ProductCard from '../ui/ProductCard'



function ProdutosList() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setProdutos(getProdutosStorage())
  }, [])

  return (
    <div className="container">
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <div className="grid">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProdutosList