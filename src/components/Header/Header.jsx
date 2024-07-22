import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header-f">
        <section className="header-main">
          <img
            className="logo"
            src="src/image/logo-dc.png"
            alt="Digital Store"
          />
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquisar produto..."
            />
            <img src="src/image/lupa.png" alt=""></img>
          </div>
          <div className="register">
            <a href="">Cadastre-se</a>
            <div className="button-container">
              <a href="#">
                <button className="button-login">Entrar</button>
              </a>{" "}
            </div>
          </div>
          <div className="cart">
            <img src="src/image/carrinho.png" alt="" />
          </div>
        </section>
        <nav className="nav">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/Products" className="link">
              Produtos
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/Categories" className="link">
              Categorias
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/Requests" className="link">
              Meus pedidos
            </Link>
            <div></div>
          </li>
        </nav>
      </header>
    </>
  );
}
