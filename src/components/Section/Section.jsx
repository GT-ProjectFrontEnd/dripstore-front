import './Section.css'
import { Header } from '../Header/Header'
import { Carrossel } from '../Carrossel/Carrossel'
import { Footer } from '../Footer/Footer'

export function Section() {

  return (
    <>
    <Header />
    <Carrossel /> 
      <section>

        <div className='container'>
          <h2 id='titulo-destaques'>Coleções em destaque</h2>

          <div className='cards-destaque'>

            <div className='card'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Novo drop Supreme</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/camisa-destaques.png" alt="" />
            </div>

            <div className='card'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Coleção Adidas</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/tenis-destaques.png" alt="" />
            </div>

            <div className='card'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Novo <br/> Beats Bass</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/fone-destaques.png" alt="" />
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}
