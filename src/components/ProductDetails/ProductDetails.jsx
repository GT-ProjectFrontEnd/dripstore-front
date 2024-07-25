// import './src./Header'
// import './src./Footer'
import './ProductDetails.css'

export function ProductDetails(){

  
return (
  <>
  <div class="container">
    <div class="content">
      <div class="product">
        <img src='../src/image/air-force-detail.png'/>
          <div class="details">
            <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p>Casual | Nike | REF: 38416711</p>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>(90 avaliações)</span>
            </div>
            <div class="price">
              R$ 219,00
              <span class="old">R$ 210,00</span>
            </div>
            {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> --> */}
            <div class="size">
              <div class="option" data-size="39">39</div>
              <div class="option" data-size="40">40</div>
              <div class="option selected" data-size="41">41</div>
              <div class="option" data-size="42">42</div>
              <div class="option" data-size="43">43</div>
            </div>
            <button class="button">COMPRAR</button>
          </div>
      </div>

      <div class="related-products">
        <h2 class="title">Produtos Relacionados</h2>
        <div class="products">
          <div class="product">
            {/* <!-- <img src="kswiss" alt="K-Swiss V8 - Masculino" class="image"> --> */}
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            {/* <!-- <img src="tenis k-swiss" alt="K-Swiss V8 - Masculino" class="image"> --> */}
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            {/* <!-- <img src="K-Swiss V8" alt="K-Swiss V8 - Masculino" class="image"> --> */}
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            {/* <!-- <img src="k-swiss" alt="K-Swiss V8 - Masculino" class="image"> --> */}
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <footer class="footer">
      <div class="container">
        <div class="column">
          <h3>► Digital Store</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <ul class="social">
            <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li> -->
          </ul>
        </div>
        <div class="column">
          <h3>Informação</h3>
          <ul>
            <!-- <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li> -->
          </ul>
        </div>
        <div class="column">
          <h3>Categorias</h3>
          <ul>
            <!-- <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li> -->
          </ul>
        </div>
        <div class="column">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2022 Digital College</p>
      </div>
    </footer> */}

  </div>
  </>
  )
}