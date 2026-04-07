
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/layout/Footer';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import ProdutoForm from './components/pages/ProdutoForm';
import ProdutosList from './components/pages/ListProducts';

function App() {
  return (
   <div className="app">
     <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/Cadastrar" element={<ProdutoForm/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/produtos" element={<ProdutosList />} />
        </Routes>

        <Footer />
      </Router>
   </div>
  );
}

export default App;