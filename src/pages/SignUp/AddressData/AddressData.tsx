import * as C from './styles';
import { LoadScript , Autocomplete } from '@react-google-maps/api';

export const AddressData = () => {
    return (
        <C.Responsible>
            <section className='container'>
                <h1>Dados do Responsável pela Loja</h1>
                <form>
                    <LoadScript googleMapsApiKey='' libraries={["places"]}>
                        <Autocomplete onLoad={(e) => {console.log(e)}} onPlaceChanged={() => {}}>
                            <input type="text" />
                        </Autocomplete>
                    </LoadScript>
                    <div className='button--area'>
                        <button>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
