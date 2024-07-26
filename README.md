# Projeto DripStore#   d r p i S t o r e G T 
 
 #   d r p i S t o r e G T 
 
 Preparado para: Documentar o ínicio do projeto de conclusão do módulo Desenvolvedor FrontEnd do programa Geração Tech. 
Preparado por: Bruno Saraiva;Wanessa Loureiro;Victor Hélio;Antonio Neto. 
Prepared to: Document the beginning of the project to complete the FrontEnd Developer module of the Geração Tech program. 
Prepared by: Bruno Saraiva;Wanessa Loureiro;Victor Hélio;Antonio Neto.
 
Objetivo do projeto:
O objetivo deste projeto é desenvolver uma aplicação web completa utilizando React. Vocês deverão implementar funcionalidades essenciais, seguindo os requisitos mínimos descritos na documentação, e entregar um projeto final que será avaliado com base em diversos critérios.

The objective of this project is to develop a complete web application using React. You must implement essential functionalities, following the minimum requirements described in the documentation, and deliver a final project that will be evaluated based on several criteria.
 
Arquivo HTML:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Store</title>
    <link rel="stylesheet" href="./CSS/style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <!-- <img src="logo.png" alt="Digital Store"> --> Colocar imagens
            </div>
            <nav>
                <ul>
                    <!-- <li><a href="#home">Home</a></li> -->
                    <!-- <li><a href="#produtos">Produtos</a></li> -->
                    <!-- <li><a href="#categorias">Categorias</a></li> -->
                    <!-- <li><a href="#meus-pedidos">Meus Pedidos</a></li> -->
                </ul>
            </nav>
            <div class="search">
                <input type="text" placeholder="Pesquisar produtos">
                <button>Pesquisar</button>
            </div>
            <div class="actions">
                <button>Cadastrar-se</button>
                <button>Entrar</button>
                <!-- <img src="cart.png" alt="Carrinho"> -->
            </div>
        </div>
    </header>
    
    <main>
<section id="home">
            <div class="container">
                <h1>Bem-vindo ao Digital Store!</h1>
                <p>Encontre os melhores produtos digitais para você!</p>
                <button>Ver mais</button>
            </div>
        </section>
        
        <section id="produtos">
            <div class="container">
                <h2>Produtos</h2>
                <div class="carousel">
                    <div class="carousel-item">
                        <!-- <img src="produto1.png" alt="Produto 1"> -->
                        <h3>Produto 1</h3>
                        <p>Descrição do produto 1</p>
                    </div>
                    <div class="carousel-item">
                        <!-- <img src="produto2.png" alt="Produto 2"> -->
                        <h3>Produto 2</h3>
                        <p>Descrição do produto 2</p>
                    </div>
                    <div class="carousel-item">
                        <!-- <img src="produto3.png" alt="Produto 3"> -->
                        <h3>Produto 3</h3>
                        <p>Descrição do produto 3</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="categorias">
            <div class="container">
                <h2>Categorias</h2>
                <ul>
                    <!-- <li><a href="#">Categoria 1</a></li>
                    <li><a href="#">Categoria 2</a></li>
                    <li><a href="#">Categoria 3</a></li> -->
                </ul>
            </div>
        </section>
        
        <section id="meus-pedidos">
            <div class="container">
                <h2>Meus Pedidos</h2>
                <p>Seus pedidos serão listados aqui</p>
            </div>
        </section>
    </main>
    
    <!-- <script src="">JS1</script> -->
</body>
</html>
Página 2
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Store - Tênis</title>
    <link rel="stylesheet" href="./CSS/style2.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="./index1.html">► Digital Store</a></h1>
            <nav>
                <ul>
                    <li><a href="./index1.html">Home</a></li>
                    <!-- <li><a href="tenis.html" class="active">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li> -->
                </ul>
            </nav>
            <div class="search">
                <input type="text" placeholder="Pesquisar...">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    </svg>
                </button>
            </div>
            <!-- <div class="actions">
                <button>Cadastre-se</button>
                <button>Entrar</button>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                    </svg> -->
                </a>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <h2>Resultados para "Tênis" - 389 produtos</h2>
            <div class="filters">
                <h3>Filtrar por</h3>
                <div class="filter-group">
                    <h4>Marka</h4>
                    <input type="checkbox" id="adidas" name="marca">
                    <label for="adidas">Adiddas</label><br>
                    <input type="checkbox" id="calenciaga" name="marca">
                    <label for="calenciaga">Calenciaga</label><br>
                    <input type="checkbox" id="k-swiss" name="marca" checked>
                    <label for="k-swiss">K-Swiss</label><br>
                    <input type="checkbox" id="nike" name="marca">
                    <label for="nike">Nike</label><br>
                    <input type="checkbox" id="puma" name="marca">
                    <label for="puma">Puma</label><br>
                </div>
                <div class="filter-group">
                    <h4>Categoria</h4>
                    <input type="checkbox" id="esporte-e-lazer" name="categoria" checked>
                    <label for="esporte-e-lazer">Esporte e lazer</label><br>
                    <input type="checkbox" id="casual" name="categoria">
                    <label for="casual">Casual</label><br>
                    <input type="checkbox" id="utilitario" name="categoria">
                    <label for="utilitario">Utilitário</label><br>
                    <input type="checkbox" id="corrida" name="categoria">
                    <label for="corrida">Corrida</label><br>
                </div>
                <div class="filter-group">
                    <h4>Gênero</h4>
                    <input type="checkbox" id="masculino" name="genero" checked>
                    <label for="masculino">Masculino</label><br>
                    <input type="checkbox" id="feminino" name="genero">
                    <label for="feminino">Feminino</label><br>
                    <input type="checkbox" id="unisex" name="genero">
                    <label for="unisex">Unisex</label><br>
                </div>
                <div class="filter-group">
                    <h4>Estado</h4>
                    <input type="radio" id="novo" name="estado" checked>
                    <label for="novo">Novo</label><br>
                    <input type="radio" id="usado" name="estado">
                    <label for="usado">Usado</label><br>
                </div>
            </div>
            <div class="products">
                <div class="product">
                    <div class="discount">30% OFF</div>
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <div class="discount">30% OFF</div>
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="Tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> usar imagens diferentes-->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagwm" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
                <div class="product">
                    <!-- <img src="tenis imagem" alt="Tênis K-Swiss V8"> -->
                    <div class="product-info">
                        <h4>Tênis</h4>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <p>
                            <span class="old-price">$200</span> <span class="new-price">$100</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="container">
            <div class="footer-col">
                <h3>► Digital Store</h3>
                <p>Lorem<p>
  <div class="footer-col">
                <h3>Sobre</h3>
                <ul>
                    <li><a href="#">Sobre Drip Store</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Trabalhe conosco</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contato</h3>
                <ul>
                    <!-- <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Calças</a></li>
                    <li><a href="#">Bonés</a></li>
                    <li><a href="#">Headphones</a></li>  possibilidade de links com produtos externos-->
                </ul>
            </div>
            <div class="footer-col">
                <h3>Endereço</h3>
                <p>Av. Santos Dumont, 1510-1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
        </div>
    </footer>
    <script src=""></script>
</body>
</html>
Página 3:
<!DOCTYPE html>
<html>
<head>
  <title>Digital Store - Tênis Nike Revolution 6 Next Nature Masculino</title>
</head>
<body>
  <div class="container">
    <header class="header">
      <a href="#" class="logo">► Digital Store</a>
      <nav class="nav">
        <ul>
          <!-- <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Meus Pedidos</a></li> -->
        </ul>
      </nav>
      <div class="search">
        <input type="text" placeholder="Pesquisar...">
        <button>Buscar</button>
      </div>
      <!-- <a href="#" class="cart"><i class="fas fa-shopping-cart"></i></a> -->
    </header>

    <div class="content">
      <div class="product">
        <!-- <img src="tenis nike" alt="Tênis Nike Revolution 6 Next Nature Masculino" class="image"> -->
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
          <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> -->
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
            <!-- <img src="kswiss" alt="K-Swiss V8 - Masculino" class="image"> -->
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            <!-- <img src="tenis k-swiss" alt="K-Swiss V8 - Masculino" class="image"> -->
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            <!-- <img src="K-Swiss V8" alt="K-Swiss V8 - Masculino" class="image"> -->
            <div class="details">
              <h2>K-Swiss V8 - Masculino</h2>
              <div class="price">
                <span class="old">R$ 200</span>
                R$ 100
              </div>
            </div>
          </div>
          <div class="product">
            <!-- <img src="k-swiss" alt="K-Swiss V8 - Masculino" class="image"> -->
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

    <footer class="footer">
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
    </footer>
  </div>

  <!-- <script>
    // Selecionando os elementos da página
    const sizeOptions = document.querySelectorAll('.size .option');
    const selectedSize = document.querySelector('.size .option.selected');

    // Adicionando o evento de clique para as opções de tamanho
    sizeOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Removendo a classe 'selected' da opção atual
        selectedSize.classList.remove('selected');

        // Adicionando a classe 'selected' à opção clicada
        option.classList.add('selected');

        // Atualizando o elemento 'selectedSize' para a opção clicada
        selectedSize = option;
      });
    });

    // Função para animar o piscar
    function blink() {
      // Selecionando o elemento a ser animado
      const element = document.querySelector('.product .image');

      // Alterando a opacidade do elemento para 0,5 e depois para 1
      element.style.opacity = 0.5;
      setTimeout(() => {
        element.style.opacity = 1;
      }, 1500);

      // Chamando a função 'blink' novamente após 3 segundos
      setTimeout(blink, 3000);
    }

    // Iniciando a animação
    blink();
  </script> -->
</body>
</html>
Página 4:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Store</title>
    <link rel="stylesheet" href="./CSS/style4.css">
</head>
<body>
    <header>
        <div class="container">
            <!-- <a href="#" class="logo"> -->
                ► Digital Store
            </a>
            <nav>
                <input type="text" placeholder="Tênis" class="search">
                <ul>
                    <!-- <li><a href="#">Home</a></li>
                    <li><a href="#" class="active">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li> -->
                </ul>
            </nav>
            <div class="actions">
                <!-- <a href="#" class="btn">Cadastre-se</a>
                <a href="#" class="btn">Entrar</a>
                <a href="#" class="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg>
                    <span class="cart-count">0</span> -->
                </a>
            </div>
        </div>
    </header>

    <main>
        <section class="cart">
            <div class="container">
                <h2>Meu Carrinho</h2>
                <div class="cart-items">
                    <div class="cart-item">
                        <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> -->
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
                         <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> -->
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> -->
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> -->
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                    <div class="product">
                         <!-- <img src="tenisimagem" alt="Tênis Nike Revolution 6 Next Nature Masculino"> -->
                        <h3>Tênis</h3>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <p><s>R$ 200</s> <span>R$ 100</span></p>
                    </div>
                </div>
                <!-- <a href="#" class="btn">Ver todos →</a> -->
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-col">
                <!-- <a href="logo" class="logo"> -->
                    ► Digital Store
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul class="social-media">
                    <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>  links para as páginas reais -->
                </ul>
            </div>
            <div class="footer-col">
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
            <div class="footer-col">
                <h3>Categorias</h3>
                <ul>
                    <!-- <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Calças</a></li>
                    <li><a href="#">Bonés</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Tênis</a></li> -->
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contato</h3>
                <ul>
                    <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                    <li>(85) 3051-3411</li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>© 2022 Digital College</p>
        </div>
    </footer>

    <!-- <script src="script.js"></script> -->
</body>
</html>
Página 5:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Store</title>
    <link rel="stylesheet" href="./CSS/style5.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="#">Digital Store</a></h1>
        </div>
    </header>
    <main>
        <div class="container">
            <section class="login">
                <h2>Acesse sua conta</h2>
                <!-- <p>Novo cliente? Então registre-se <a href="cadastro.html" id="registrar-se">aqui</a>.</p> -->
                <form>
                    <div>
                        <label for="login">Login:</label>
                        <input type="text" id="login" name="login" placeholder="Insira seu login ou email" required>
                    </div>
                    <div>
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Insira sua senha" required>
                    </div>
                    <a href="#">Esqueci minha senha</a>
                    <button type="submit">Acessar Conta</button>
                    <p>Ou faça login com <a href="#">Google</a> <a href="#">Facebook</a></p>
                </form>
            </section>
            <section class="tenis">
                <!-- <img src="tenise" alt="Tênis" id="tenis-esquerdo">
                <img src="tenisd" alt="Tênis" id="tenis-direito"> -->
            </section>
        </div>
    </main>
    <footer>
        <div class="container">
            <div class="info">
                <h2>Informação</h2>
                <ul>
                    <!-- <li><a href="#">Sobre Drip Store</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Trabalhe conosco</a></li>
                    <li><a href="#">Meus Pedidos</a></li> -->
                </ul>
            </div>
            <div class="categorias">
                <h2>Categorias</h2>
                <ul>
                    <!-- <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Calças</a></li>
                    <li><a href="#">Bonés</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Tênis</a></li> -->
                </ul>
            </div>
            <div class="contato">
                <h2>Contato</h2>
                <ul>
                    <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                    <li>(85) 3051-3411</li>
                </ul>
            </div>
            <p>&copy; 2023 Digital College</p>
        </div>
    </footer>
    <!-- <script src="script.js"></script> -->
</body>
</html>

Página 6:
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Store</title>
    <link rel="stylesheet" href="./CSS/style6.css">
</head>
<body>
    <header>
        <div class="container">
            <!-- <h1><a href="#">► Digital Store</a></h1> -->
        </div>
    </header>

    <main>
        <section class="create-account">
            <div class="container">
                <div class="box">
                    <h2>Crie sua conta</h2>
                    <p>Já possui uma conta? Entre <a href="#">aqui</a>.</p>
                    <form action="#">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Insira seu email" required>
                        <button type="submit">Criar Conta</button>
                    </form>
                    <p>Ou faça login com:</p>
                    <ul class="social-media">
                        <!-- <li><a href="#"><img src="images/google.svg" alt="Google"></a></li>
                        <li><a href="#"><img src="images/facebook.svg" alt="Facebook"></a></li> -->
                    </ul>
                </div>
                <div class="box">
                    <!-- <img src="imagestenis" alt="Tênis"> -->
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="column">
                <h3>► Digital Store</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul class="social-media">
                    <!-- <li><a href="#"><img src="images/facebook.svg" alt="Facebook"></a></li>
                    <li><a href="#"><img src="images/instagram.svg" alt="Instagram"></a></li>
                    <li><a href="#"><img src="images/twitter.svg" alt="Twitter"></a></li> -->
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
                    <li><a href="#">Tênis</a></li>
                </ul> -->
            </div>
            <div class="column">
                <h3>Contato</h3>
                <ul>
                    <li>Av. Santos Dumont, 1510-1 - andar - Aldeota, Fortaleza - CE, 60150-161</li>
                    <li>(85) 3051-3411</li>
                </ul>
            </div>
        </div>
        <p class="copyright">&copy; 2022 Digital College</p>
    </footer>

    <!-- <script src="script.js"></script> -->
</body>
<!-- Seção de informações -->
<section class="information">
    <div>
        <h3>Sobre Drip Store</h3>
        <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
        </ul>
    </div>
    <div>
        <h3>Categorias</h3>
        <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
        </ul>
    </div>
    <div>
        <h3>Contato</h3>
        <ul>
            <li>Av. Santos Dumont, 1510-1 - andar - Aldeota, Fortaleza - CE, 60150-161</li>
            <li>(85) 3051-3411</li>
        </ul>
    </div>
</section>

<!-- Seção de rodapé -->
<footer>
    <p class="copyright">&copy; 2022 Digital College</p>
</footer>
</html>


Arquivo CSS:
01:
/* Global Styles */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
