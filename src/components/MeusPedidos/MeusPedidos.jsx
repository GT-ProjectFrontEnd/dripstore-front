
import './MeusPedidos.css'

export function MeusPedidos() {

    return (
        <>
            <div className='meus-pedidos'>

                <aside id='menu-pedidos'>
                    <a href="#">
                        <p className='menu-opcoes'>Meu Perfil</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p className='menu-opcoes' id='menu-opcoes1'>Meus Pedidos</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p>Minhas Informações</p>
                        <hr />
                    </a>

                    <a href="#">
                        <p>Métodos de pagamento</p>
                        <hr />
                    </a>
                </aside>

                <section id='status-pedidos'>
                    <div id='titulo-pedidos'>
                        <h2>Meus Pedidos</h2>
                        <p>STATUS</p>
                    </div>
                    <hr />
                    <div id='situacao-pedido'>
                        <img src="../src/image/tenis-pedidos.png" alt="" />
                        <div>
                            <p>Pedido n° 2234981932</p>
                            <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        </div>
                        <p>Produto em trânsito</p>
                    </div>

                </section>

            </div>

        </>
    )
}
