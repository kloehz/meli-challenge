import { shallow } from "enzyme"
import { Items } from "./Items"
import { Categories } from "../components/items/Categories"
import { ItemsContainer } from "../components/items/ItemsContainer";

jest.mock('react-router-dom', () => ({
    // @ts-ignore
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn().mockReturnValue({
        pathname: '',
        search: '?q=vasos',
        hash: '',
        state: {"author":{"name":"Guido Leonel","lastname":"Cotelesso"},"categories":["Hogar, Muebles y Jardín","Bazar y Cocina","Vajilla y Artículos de Servir","Vajilla","Vasos"],"items":[{"id":"MLA912120163","title":"Set X6 Vasos Vidrio Color Trago Largo 465 Cc Pulsar Bormioli","price":{"currency":"ARS","amount":1349,"decimals":10},"picture":"http://http2.mlstatic.com/D_625911-MLA45228911173_032021-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Santa Fe"},{"id":"MLA854588801","title":"Vaso Copon Copa Sin Tallo Rigolleau Gourmet 450ml X 6","price":{"currency":"ARS","amount":895,"decimals":0},"picture":"http://http2.mlstatic.com/D_676696-MLA43737946576_102020-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"},{"id":"MLA876626363","title":"Vaso Vidrio Copa S/tallo Copón Vino Gourmet Rigolleau X6","price":{"currency":"ARS","amount":850,"decimals":0},"picture":"http://http2.mlstatic.com/D_914976-MLA46636137693_072021-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"},{"id":"MLA877200255","title":"Vaso Pampa Durax De Vidrio 400ml Agua Jugo X 12 Unid Oferta","price":{"currency":"ARS","amount":869,"decimals":0},"picture":"http://http2.mlstatic.com/D_923689-MLA43399324060_092020-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"}]},
        key: 'oaent654',
    })
}))

describe('Items Page test', () => {
      
    const wrapper = shallow(<Items />
    );

    test('should be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be render categories', () => {
        expect(wrapper.containsMatchingElement(<Categories categories={["Hogar, Muebles y Jardín","Bazar y Cocina","Vajilla y Artículos de Servir","Vajilla","Vasos"]} />))
        .toEqual(true);
    });
    

    // test('should be not render categories', () => {
    //     jest.mock('react-router-dom', () => ({
    //         // @ts-ignore
    //         ...jest.requireActual("react-router-dom"),
    //         useLocation: jest.fn().mockReturnValue({
    //             pathname: '',
    //             search: '?q=vasos',
    //             hash: '',
    //             state: {"author":{"name":"Guido Leonel","lastname":"Cotelesso"},"categories":[],"items":[{"id":"MLA912120163","title":"Set X6 Vasos Vidrio Color Trago Largo 465 Cc Pulsar Bormioli","price":{"currency":"ARS","amount":1349,"decimals":10},"picture":"http://http2.mlstatic.com/D_625911-MLA45228911173_032021-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Santa Fe"},{"id":"MLA854588801","title":"Vaso Copon Copa Sin Tallo Rigolleau Gourmet 450ml X 6","price":{"currency":"ARS","amount":895,"decimals":0},"picture":"http://http2.mlstatic.com/D_676696-MLA43737946576_102020-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"},{"id":"MLA876626363","title":"Vaso Vidrio Copa S/tallo Copón Vino Gourmet Rigolleau X6","price":{"currency":"ARS","amount":850,"decimals":0},"picture":"http://http2.mlstatic.com/D_914976-MLA46636137693_072021-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"},{"id":"MLA877200255","title":"Vaso Pampa Durax De Vidrio 400ml Agua Jugo X 12 Unid Oferta","price":{"currency":"ARS","amount":869,"decimals":0},"picture":"http://http2.mlstatic.com/D_923689-MLA43399324060_092020-O.jpg","condition":"Nuevo","free_shipping":false,"seller_address":"Capital Federal"}]},
    //             key: 'oaent654',
    //         })
    //     }));

    //     expect(wrapper.containsMatchingElement(<Categories categories={[]} />))
    //     .toEqual(true);
    // })
    
})


