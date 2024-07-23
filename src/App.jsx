import {Routes, Route } from 'react-router-dom'
import './App.css'
import { CriarConta } from './pages/CriarConta/CriarConta'

export function App() {

  return (
    <>
    <CriarConta></CriarConta>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    </>
  )
}
