import {Routes, Route } from 'react-router-dom'
import './App.css'
import { Carrossel } from './components/Carrossel/Carrossel'
import { Section } from './components/Section/Section'
import { ProdutosEmAlta } from './components/ProdutosEmAlta/ProdutosEmAlta'

export function App() {

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
     <ProdutosEmAlta />
    </>
  )
}
