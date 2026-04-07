import { useState } from 'react'
import { addProduto } from '../../services/Storage'
import styles from './ProdutoForm.module.css'

function ProdutoForm({ onProdutoAdicionado }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })

  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setErro('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validação
    if (!formData.name.trim()) {
      setErro('Nome do produto é obrigatório')
      return
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setErro('Preço deve ser um valor positivo')
      return
    }

    // Adicionar produto
    try {
      addProduto(formData)
      setSucesso('Produto adicionado com sucesso!')
      
      // Limpar formulário
      setFormData({
        name: '',
        price: '',
        description: '',
        image: ''
      })

      // Callback para atualizar lista
      if (onProdutoAdicionado) {
        onProdutoAdicionado()
      }

      // Limpar mensagem após 3 segundos
      setTimeout(() => setSucesso(''), 3000)
    } catch (error) {
      setErro('Erro ao adicionar produto')
    }
  }

  return (
    <div className="container">
    <div className={styles.formContainer}>
      <h2>Adicionar Novo Produto</h2>

      {erro && <div className={styles.erro}>{erro}</div>}
      {sucesso && <div className={styles.sucesso}>{sucesso}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome do Produto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Correia Dentada"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Preço (R$)</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            placeholder="Ex: 99.90"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição do produto..."
            rows="4"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">URL da Imagem</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Ex: https://exemplo.com/imagem.png"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Adicionar Produto
        </button>
      </form>
    </div>
    </div>
  )
}

export default ProdutoForm