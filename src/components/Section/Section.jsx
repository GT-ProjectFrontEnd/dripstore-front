import './Section.css'

export function Section() {

  return (
    <>
      <section>

        <div className='container'>
          <h2 id='titulo-destaques'>Coleções em destaque</h2>

          <div className='cards-destaque'>

            <div className='card'>
              <div className='texto-card'>
                <p>30% OFF</p>
                <h3>Novo drop Supreme</h3>
                <a href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/camisa-destaques.png" alt="" />
            </div>

            <div className='card'>
              <div className='texto-card'>
                <p>30% OFF</p>
                <h3>Novo drop Supreme</h3>
                <a href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/tenis-destaques.png" alt="" />
            </div>

            <div className='card'>
              <div className='texto-card'>
                <p>30% OFF</p>
                <h3>Novo drop Supreme</h3>
                <a href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/fone-destaques.png" alt="" />
            </div>

          </div>

        </div>

      </section>
    </>
  )
}
