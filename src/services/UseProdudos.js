// hook customizado
import { getProdutosStorage } from './Storage'
import { useState, useEffect } from 'react'


export function useProdutos() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProdutosStorage().then((produtos) => {
      setProdutos(produtos)
      setLoading(false)
    })
  }, [])

  return { produtos, loading }
}