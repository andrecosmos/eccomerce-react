import { useEffect, useState } from 'react'
import ProductCard from '../ui/ProductCard'
import { getProdutos } from '../../services/products'
import SkeletonCard from '../ui/SkeletonCard'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data)
      setLoading(false)
    })
  }, [])

  // Filtrar produtos baseado no parâmetro de busca
  const produtosFiltrados = search 
    ? produtos.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : produtos

  return ( 
    <div className="container">
      {search && (
        <h2>Resultados para: <strong>"{search}"</strong></h2>
      )}
      {loading ? (
        <div className='grid'>
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className='grid'>
          {produtosFiltrados.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </div>  
  )
}

export default Home