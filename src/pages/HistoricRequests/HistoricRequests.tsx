import { Link, Outlet } from 'react-router-dom'
import * as C from './styles'

export const HistoricRequests = () => {
    return (
        <C.HistoricRequests>
            <section className='title'>
                <div>
                    <h1>Pedidos</h1>
                    <p>Gerencie seu histórico de pedidos</p>
                </div>
                <div>
                    <button>    
                        Ver página da loja
                    </button>
                </div>
            </section>
            <C.NestedMenu>
                <Outlet />
            </C.NestedMenu>
        </C.HistoricRequests>
    )
}
