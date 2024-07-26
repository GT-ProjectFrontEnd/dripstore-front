import {Routes, Route } from 'react-router-dom'
import './App.css'
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { PaginaSucesso } from './components/PaginaSucesso/PaginaSucesso'
import { ProductCard } from './components/ProductCard/ProductCard'

export function App() {

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    <ProductCard/>
    </>
  )
}
