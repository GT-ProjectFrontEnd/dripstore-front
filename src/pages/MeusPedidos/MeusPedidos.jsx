import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import './MeusPedidos.css'

export function MeusPedidos() {

    return (
        <>
            <Header></Header>
            <div className='meus-pedidos'>

                <aside id='menu-pedidos'>
                    <a href="#">
                        <p className='menu-opcoes'>Meu Perfil</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p className='menu-opcoes'>Meus Pedidos</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p className='menu-opcoes'>Minhas Informações</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p className='menu-opcoes'>Métodos de pagamento</p>
                    </a>
                </aside>

                <section id='status-pedidos'>
                    <div id='titulo-pedidos'>
                        <h2>Meus Pedidos</h2>
                        <p>STATUS</p>
                    </div>
                    <hr />
                    <div id='situacao-pedido'>
                        <div className='pedidos'>
                            <div className='pedido-unit'>
                                <img src="../src/image/tenis-pedidos.png" alt="" />
                                <div className='descricao-pedido-unit'>
                                    <p className='numero-pedido'>Pedido n° 2234981932</p>
                                    <p className='descricao-pedido'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                </div>
                            </div>
                            <p className='situacao-pedido' id='em-transito'>Produto em trânsito</p>
                        </div>
                        <hr />

                        <div className='pedidos'>
                            <div className='pedido-unit'>
                                <img src="../src/image/tenis-pedidos.png" alt="" />
                                <div className='descricao-pedido-unit'>
                                    <p className='numero-pedido'>Pedido n° 2234981932</p>
                                    <p className='descricao-pedido'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                </div>
                            </div>
                            <p className='situacao-pedido'>Finalizado</p>
                        </div>
                        <hr />

                        <div className='pedidos'>
                            <div className='pedido-unit'>
                                <img src="../src/image/tenis-pedidos.png" alt="" />
                                <div className='descricao-pedido-unit'>
                                    <p className='numero-pedido'>Pedido n° 2234981932</p>
                                    <p className='descricao-pedido'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                </div>
                            </div>
                            <p className='situacao-pedido' id='cancelado'>Cancelado</p>
                        </div>
                        <hr />

                        <div className='pedidos'>
                            <div className='pedido-unit'>
                                <img src="../src/image/tenis-pedidos.png" alt="" />
                                <div className='descricao-pedido-unit'>
                                    <p className='numero-pedido'>Pedido n° 2234981932</p>
                                    <p className='descricao-pedido'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                </div>
                            </div>
                            <p className='situacao-pedido'>Finalizado</p>
                        </div>
                        <hr />

                        <div className='pedidos'>
                            <div className='pedido-unit'>
                                <img src="../src/image/tenis-pedidos.png" alt="" />
                                <div className='descricao-pedido-unit'>
                                    <p className='numero-pedido'>Pedido n° 2234981932</p>
                                    <p className='descricao-pedido'>Tênis Nike Revolution 6 Next Nature Masculino</p>
                                </div>
                            </div>
                            <p className='situacao-pedido'>Finalizado</p>
                        </div>
                        

                    </div>

                </section>

            </div>

            <Footer />

        </>
    )
}
