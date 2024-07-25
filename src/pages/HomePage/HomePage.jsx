// import './HomePage.css'
import { Carrossel } from '../src/components/Carrossel/Carrossel'
import { Section } from '../src/components/Section/Section'
import { ProdutosEmAlta } from '../src/components/ProdutosEmAlta/ProdutosEmAlta'
import { OfertaEspecial } from '../src/components/OfertaEspecial/OfertaEspecial'


export function HomePage() {

    return (
      <>
      <Carrossel />
      <Section />
      <ProdutosEmAlta />
      <OfertaEspecial />
      </>
    )
  }