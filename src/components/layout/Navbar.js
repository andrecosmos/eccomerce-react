import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useState } from 'react'
import logo from '../../assents/logo1.png'
import { getCartCount } from '../../services/cart'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)

  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()

    if (!search) return

    navigate(`/?search=${search}`)
  }

  useEffect(() => {
    setCount(getCartCount())
  }, [])

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="AutoSystem Logo" className={styles.logoImg} />
      </Link>

      <form className={styles.search} onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Buscar peças..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul className={`${styles.menu} ${open ? styles.active : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/Cadastrar">Cadastrar Produto</Link></li>
        <li><Link to="/cart">🛒 {count}</Link></li>     
      </ul>

      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  )
}

export default Navbar