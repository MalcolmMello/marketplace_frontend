import * as C from './styles'

export const Menu = () => {
    return (
        <C.Menu>
            <C.AddCategoryArea>
                <button>Adicionar Categoria</button>
            </C.AddCategoryArea>
            <C.CategoryArea>
                <C.NameCategory>
                    Ração
                </C.NameCategory>
                <C.ProductArea>
                    <div></div>
                    <div className='add--item'>
                        <h2>+</h2> Adicionar Item
                    </div>
                </C.ProductArea>
            </C.CategoryArea>
        </C.Menu>   
    );
};