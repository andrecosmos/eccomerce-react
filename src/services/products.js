
import correia from '../assents/correia.png'
import correiadente from '../assents/correiadente.png'
import rolamento from '../assents/rolamento.jpg'
import pastilha from '../assents/pastilha.png'
import axios from '../assents/axios.png'
import bombagua from '../assents/bombagua.png'



export function getProdutos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Correia Dentada', price: '89,90', image: correiadente },
        { id: 2, name: 'Filtro de Óleo', price: '25,00', image: correia },
        { id: 3, name: 'Pastilha de Freio', price: '120,00', image: pastilha },
        { id: 4, name: 'Rolamento', price: '89,90', image: rolamento},
        { id: 5, name: 'Pneu', price: '275,00', image: bombagua },
        { id: 6, name: 'Batente', price: '123,00', image: axios},
        { id: 6, name: 'Batente', price: '123,00', image: axios},
        { id: 6, name: 'Batente', price: '123,00', image: axios},
        { id: 6, name: 'Batente', price: '123,00', image: axios},
        { id: 6, name: 'Batente', price: '123,00', image: axios},
        { id: 4, name: 'Rolamento', price: '89,90', image: rolamento},
      ])
    }, 1000)
  })
}



