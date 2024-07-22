
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

                <section>

                </section>

            </div>

        </>
    )
}
