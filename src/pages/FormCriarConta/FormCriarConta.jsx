import "./FormCriarConta.css";
import { Footer } from "../../components/Footer/Footer";

export function FormCriarConta() {
  return (
    <>
      <header>
        <img src="src/image/logo-dc.png" alt="" />
      </header>
      <main>
        <div className="boxLogin t">
          <h2>Criar Conta</h2>
          <div className="form-login">
            <p>Informações pessoais</p>
            <form>
              <div>
                <label htmlFor="login">Nome completo *</label>
                <input
                  type="text"
                  id="login"
                  placeholder="Insira seu login ou email"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="CPF">CPF *</label>
                <input
                  type="text"
                  id="CPF"
                  placeholder="Insira seu CPF"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="E-mail">E-mail *</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Insira seu E-mail"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="celular">Celular *</label>
                <input
                  type="text"
                  id="celular"
                  placeholder="Insira seu celular"
                  className="input"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="boxLogin">
          <div className="form-login"> 
          <p>Informações de Entrega</p>
            <form>
              <div>
            <label htmlFor="login">Nome completo *</label>
            <input
              type="text"
              id="login"
              placeholder="Insira seu login ou email"
              className="input"
              required
            />
          </div>
          <div>
            <label htmlFor="CPF">CPF *</label>
            <input
              type="text"
              id="CPF"
              placeholder="Insira seu CPF"
              className="input"
              required
            />
          </div>
          <div>
            <label htmlFor="E-mail">E-mail *</label>
            <input
              type="text"
              id="email"
              placeholder="Insira seu E-mail"
              className="input"
              required
            />
          </div>
          <div>
            <label htmlFor="celular">Celular *</label>
            <input
              type="text"
              id="celular"
              placeholder="Insira seu celular"
              className="input"
              required
            />
          </div>
        </form>
        </div></div>
        
        <p>
          <a href="#">Esqueci minha senha</a>
        </p>
        <button type="submit">Acessar Conta</button>

        <div className="lgn-icons">
          <p>Ou faça login com</p>
          <img src="src/image/gmail-login.png" alt="" />
          <img src="src/image/facebook-login.png" alt="" />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
