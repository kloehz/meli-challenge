import { shallow } from "enzyme"
import useCurrency from "../../hooks/useCurrency";
import { ItemsContainer } from "./ItemsContainer"

const mockHistoryPush = jest.fn();
const mockUseCurrency = jest.fn();

jest.mock('react-router', () => ({
    // @ts-ignore
    ...jest.requireActual('react-router'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
}));



const itemMock = {
    "id":"MLA877200255",
    "picture":"http://http2.mlstatic.com/D_923689-MLA43399324060_092020-O.jpg",
    "title":"Vaso Pampa Durax De Vidrio 400ml Agua Jugo X 12 Unid Oferta",
    "price": {
        "currency":"ARS",
        "amount":869,
        "decimals":0
    },
    "seller_address":"Capital Federal",
    "condition": "Nuevo",
    "free_shiping": true
}

describe('ItemsContainer tests', () => {
    
    const wrapper = shallow(<ItemsContainer {...itemMock} />);

    test('should be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be redirect on click', () => {
        const productContainer = wrapper.find('div').at(0);
        productContainer.simulate('click');
        expect(mockHistoryPush).toHaveBeenCalledWith({"pathname": '/items/MLA877200255'});
    });
    
    test('should be have the correct image', () => {
        expect(wrapper.find('img').prop('src')).toBe('http://http2.mlstatic.com/D_923689-MLA43399324060_092020-O.jpg');
    });
    
})
