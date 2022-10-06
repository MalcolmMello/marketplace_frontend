import * as C from './styles'

export const AddItem = () => {
    return (
        <C.AddItem>
            <div className='input--area'>
                <input type="text" placeholder='Nome do Produto'/>
            </div>
            <div className='textarea'>
                <p>Descrição (Opcional)</p>
                <textarea placeholder='Insira a uma Descrição'></textarea>
            </div>
        </C.AddItem>
    );
}