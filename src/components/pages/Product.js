import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProdutos } from '../../services/products'
import styles from './Product.module.css'
import { addToCart } from '../../services/cart'
import { Link } from 'react-router-dom'



function Product() {
  const { id } = useParams()

  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <h1>Carregando...</h1>

  const produto = produtos.find(p => p.id === Number(id))

  if (!produto) return <h1>Produto não encontrado</h1>

  return (
    <div className="container">
      <div className={styles.productPage}>
        
        <div className={styles.imageBox}>
          <img src={produto.image} alt={produto.name} />
        </div>

        <div className={styles.info}>
          <h1>{produto.name}</h1>
          <p className={styles.price}>R$ {produto.price}</p>

          <div className='buttons'>
            <button className='buyButton' onClick={() => {
              addToCart(produto)
              window.location.reload()
            }}>Adicionar ao carrinho</button>
            <button className='backButton' onClick={() => window.history.back()}>Continuar Comprando</button>
            <button className='buyButton'><Link to="/cart">Ir para o Carrinho</Link></button>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default Product
