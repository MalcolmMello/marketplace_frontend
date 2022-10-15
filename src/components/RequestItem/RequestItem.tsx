import * as C from './styles';

interface RequestItem {
    id: string,
    username: string,
    status: string,
    total: number,
    created_at: string,
    address: {
        id: string,
        state: string,
        city: string,
        district: string,
        street: string,
        zip_code: string,
        number: string
    },
    products: {
        id: string,
        product_name: string,
        description: string,
        front_cover: string,
        price: number,
        length: number
    }[]
};

export const RequestItem = ({ id, username, status, total, created_at, address, products }: RequestItem) => {
    const date = `às ${new Date(created_at).getHours()}:${new Date(created_at).getMinutes()}`;
    
    return (
        <C.RequestItem>
            <div className='top--area'>
                {status !== "Pendente" ? username : null} Pedido #{id.substring(0,8)} - Feito {date}
            </div>
            <div className='address'>
               {address.street}, {address.number}, {address.city} - {address.district} - {address.state} - CEP {address.zip_code}
            </div>
            <div className='request--data'>
                <div className='status'><h4>{status}</h4></div>
                {products.map(item => (
                    <div className='item'>
                        <ul>
                            <li>{item.length}x</li>
                            <li className='product--name'>{item.product_name}</li>
                            <li className='price'>R${item.price.toFixed(2).replace('.', ',')}</li>
                        </ul>
                    </div>
                ))}
                <div className='total'>
                    <div className='title'>Total</div>
                    <div>R$ {total.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
        </C.RequestItem>      
    )
}
