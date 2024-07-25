import {Routes, Route } from 'react-router-dom'
import './App.css'
import { ProductDetails } from './components/ProductDetails/ProductDetails'

export function App() {

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    <ProductDetails/>
    </>
  )
}
