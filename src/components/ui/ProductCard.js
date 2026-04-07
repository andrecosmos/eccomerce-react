
import { Link } from 'react-router-dom'
import Card from './Card'
import styles from './ProductCard.module.css'

function ProductCard({ id, name, price, image }) {
  return (
    <Link to={`/produto/${id}`} className={styles.link}>
      <Card>
        <img className={styles.image} src={image} alt={name} />
        <h3>{name}</h3>
        <p className={styles.price}>R$ {price}</p>
      </Card>
    </Link>
  )
}

export default ProductCard



/*
import styles from './ProductCard.module.css'

function ProductCard({ name, price, image }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image || 'https://via.placeholder.com/280x120?text=Sem+imagem'}
        alt={name ? `${name} imagem` : 'Produto'}
      />
      <h3>{name}</h3>
      <p className={styles.price}>R$ {price}</p>
      <button>Comprar</button>
    </div>
  )
}

*/