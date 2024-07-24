import { Footer } from '../../components/Footer/Footer'
import './ProductListing.css'

export function ProductListing() {

  return (
    <>
      <section>
        <div className='container' id='resultados'>
          <h2>Resultados para "Tênis" <span id='quant-produtos'>- 389 produtos</span></h2>
          <div class="btn-group">
            <button id='ordenar-por' type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Ordenar por: <span id='ordenar'>mais relevantes</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button class="dropdown-item" type="button">menos relevantes</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">mais vendidos</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">menor preço</button>
              </li>
            </ul>
          </div>
        </div>

        <div className='container' id='container'>

          {/* Filtrar */}
          <div id='filters'>
            <h3 className='titulo-item'>Filtrar por</h3>
            <hr />
            <div>
              <p className='titulo-item'>Marka</p>
              <ul>
                <li>
                  <input type="checkbox" name="marca" id="adidas"/>
                  <label for="adidas">Adiddas</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="calenciaga" />
                  <label for="calenciaga">Calenciaga</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="k-swiss"/>
                  <label for="k-swiss">K-Swiss</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="nike" />
                  <label for="nike">Nike</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="puma" />
                  <label for="puma">Puma</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Categoria</p>
              <ul>
                <li>
                  <input type="checkbox" name="categoria" id="esporte-e-lazer"/>
                  <label for="esporte-e-lazer">Esporte e lazer</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="casual" />
                  <label for="casual">Casual</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="utilitario" />
                  <label for="utilitario">Utilitário</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="corrida" />
                  <label for="corrida">Corrida</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Gênero</p>
              <ul>
                <li>
                  <input type="checkbox" name="genero" id="masculino"/>
                  <label for="masculino">Masculino</label>
                </li>
                <li>
                  <input type="checkbox" name="genero" id="feminino"/>
                  <label for="feminino">Feminino</label>
                </li>
                <li>
                  <input type="checkbox" name="genero" id="unisex" />
                  <label for="unisex">Unisex</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Estado</p>
              <ul>
                <li>
                  <input type="radio" name="estado" id="novo"/>
                  <label for="novo">Novo</label>
                </li>
                <li>
                  <input type="radio" name="estado" id="usado" />
                  <label for="novo">Usado</label>
                </li>
              </ul>
            </div>

          </div>

          {/* Lista de Produtos */}
          <div className='container' id='itens'>
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
        </div>
      </section>

      <Footer />
    </>
  )
}