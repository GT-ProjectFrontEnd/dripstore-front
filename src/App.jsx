import { Routes, Route } from 'react-router-dom'
import './App.css'
// importação das paginas
import { Header } from './components/Header/Header'
import { FormCriarConta } from './pages/FormCriarConta/FormCriarConta'
import { CriarConta } from './pages/CriarConta/CriarConta'
import { Login } from './pages/Login/Login'
import { ProductListing } from './pages/ProductListing/ProductListing'
import { MeusPedidos } from './pages/MeusPedidos/MeusPedidos'

import { Carrossel } from '../src/components/Carrossel/Carrossel'
import { Section } from '../src/components/Section/Section'
import { ProdutosEmAlta } from '../src/components/ProdutosEmAlta/ProdutosEmAlta'
import { OfertaEspecial } from '../src/components/OfertaEspecial/OfertaEspecial'
import { Footer } from './components/Footer/Footer'

export function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/CriarConta' element={<CriarConta />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FormCriarConta' element={<FormCriarConta />} />
        <Route path='/Produtos' element={<ProductListing />} />
        <Route path='/Pedidos' element={<MeusPedidos />} />

      </Routes>

      <Carrossel />
      <Section />
      <ProdutosEmAlta />
      <OfertaEspecial />
      <Footer />
    </>
  )
}
