import './ProductCard.css'

export function ProductCard(){

    return (
      <>
    <body>
    <main>
        <section class="cart">
            <div class="container">
                <h2>Meu Carrinho</h2>
                <div class="cart-items">
                    <div class="cart-item">
                        {/* <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> --> */}
                        <div class="cart-item-info">
                            <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                            <p>Cor: Vermelho / Branco</p>
                            <p>Tamanho: 42</p>
                        </div>
                        <div class="cart-item-actions">
                            <button class="decrease">-</button>
                            <input type="number" value="1" min="1" class="quantity">
                            <button class="increase">+</button>
                            <span class="price">R$ 219,00</span>
                            <button class="remove-item">Remover Item</button>
                        </div>
                    </div>
                </div>
                <div class="cart-summary">
                    <h3>Resumo</h3>
                    <ul>
                        <li>Subtotal: <span id="subtotal">R$ 0,00</span></li>
                        <li>Frete: <span id="frete">R$ 0,00</span></li>
                        <li>Desconto: <span id="desconto">R$ 30,00</span></li>
                        <li>Total: <span id="total" class="blink">R$ 219,00</span></li>
                    </ul>
                    <div class="coupon">
                        <h4>Cupom de desconto</h4>
                        <input type="text" placeholder="Insira seu código" class="coupon-code">
                        <button class="btn">OK</button>
                    </div>
                    <div class="shipping">
                        <h4>Calcular frete</h4>
                        <input type="text" placeholder="Insira seu CEP" class="shipping-cep">
                        <button class="btn">OK</button>
                    </div>
                    <button class="btn" id="continue">Continuar</button>
                </div>
            </div>
        </section>

        <section class="related-products">
            <div class="container">
                <h2>Produtos Relacionados</h2>
                <div class="products">
                    <div class="product">
                        <div class="discount">30% OFF</div>
                         {/* <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> --> */}
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         {/* <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> --> */}
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         {/* <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> --> */}
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         {/* <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> --> */}
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                </div>
                 <a href="#" class="btn">Ver todos →</a>
            </div>
        </section>
    </main>
</body>

      </>
    )
  }