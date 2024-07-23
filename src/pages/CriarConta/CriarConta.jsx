import "./CriarConta.css";
import { Footer } from "../../components/Footer/Footer";


export function CriarConta() {
  return (
    <>
      <header>
        <img src="src/image/logo-dc.png" alt="" />
      </header>
      <main>
        <div id="boxLogin">
          <div className="form-login">
            <h2>Acesse sua conta</h2>
            <p>
              Novo cliente? Então registre-se <a href="#">aqui</a>.
            </p>
            <form>
              <div>
                <label htmlFor="login">Login *</label>
                <input type="text" id="login" placeholder="Insira seu login ou email" className="input" required/>
              </div>
              <div>
                <label htmlFor="password">Senha *</label>
                <input type="password" id="password" placeholder="Insira sua senha" className="input" required/>
              </div>
              <p>
                <a href="#">Esqueci minha senha</a>
              </p>
              <button type="submit">
                Acessar Conta
              </button>
            </form>
            <div className="lgn-icons">
              <p>Ou faça login com</p>
              <img src="src/image/gmail-login.png" alt="" />
              <img src="src/image/facebook-login.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tenis">
          <img src="src/image/tenis-login.png" alt="" />
        </div>
        
      </main>
      <Footer></Footer>
    </>
  );
}
