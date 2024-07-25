import './ProdutosEmAlta.css'
import { Header } from '../Header/Header'
import { Carrossel } from '../Carrossel/Carrossel'
import { Section } from '../Section/Section'
import { Footer } from '../Footer/Footer'
import { OfertaEspecial } from '../OfertaEspecial/OfertaEspecial'

export function ProdutosEmAlta() {

  return (
    <>
      <Header />
      <Carrossel />
      <Section />

      <div className='titulo-em-alta'>
          <h2>Produtos em alta</h2>
          <a className='ver-mais-produtos' href="#">Ver todos →</a>
        </div>
      <div className='container-fluid' id='itens'>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount1'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount1'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

        <div className='produto'>
          <div className='imagem-produto'>
            <p className='discount'>30% OFF</p>
            <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
          </div>
          <div className='texto-produto'>
            <h4>Tênis</h4>
            <h3>K-Swiss V8 - Masculino</h3>
            <p>
              <span>$200</span>
              <span className='valor'>$100</span>
            </p>
          </div>
        </div>

      </div>
      <OfertaEspecial />
      <Footer />
    </>
  )
}
