import './Carrossel.css'
import Carousel from 'react-bootstrap/Carousel';

export function Carrossel() {

    return (
        <>
            <main>
                <Carousel data-bs-theme="dark">
                    
                    <Carousel.Item>
                        <div className='container-fluid'>
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../src/image/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="">Ver Ofertas</a>
                            </div>
                            <img className='imagem-carrossel'
                                src="../src/image/air-force-home.png"
                                alt="Air-Force"
                            />
                            <img src="../src/image/decoracao-carrossel.png" className='decoracao-carrossel' />
                        </div>
                    </Carousel.Item>

                    {/* <Carousel.Item>
                        <div className='container-fluid'>
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../src/image/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="">Ver Ofertas</a>
                            </div>
                            <img className='imagem-carrossel'
                                src="../src/image/air-force-home.png"
                                alt="Air-Force"
                            />
                            <img src="../src/image/decoracao-carrossel.png" className='decoracao-carrossel' />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='container-fluid'>
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../src/image/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="">Ver Ofertas</a>
                            </div>
                            <img className='imagem-carrossel'
                                src="../src/image/air-force-home.png"
                                alt="Air-Force"
                            />
                            <img src="../src/image/decoracao-carrossel.png" className='decoracao-carrossel' />
                        </div>
                    </Carousel.Item> */}

                </Carousel>
            </main>
        </>
    )
}