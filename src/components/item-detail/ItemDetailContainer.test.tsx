import { shallow } from "enzyme"
import { ImagePriceContainer } from "./ImagePriceContainer";
import { ItemDetailContainer } from "./ItemDetailContainer"
import { ItemDetailDescription } from "./ItemDetailDescription";

const itemMock = {
    "id":"MLA912120163",
        "title":"Set X6 Vasos Vidrio Color Trago Largo 465 Cc Pulsar Bormioli",
        "price":{"currency":"ARS",
        "amount":1499,
        "decimals":0},
        "picture":"http://http2.mlstatic.com/D_625911-MLA45228911173_032021-O.jpg",
        "condition":"Nuevo",
        "free_shipping":false,
        "sold_quantity":50,
        "description":"descripcion"
    }

describe('ItemDetailContainer tests', () => {
    
    const wrapper = shallow(<ItemDetailContainer {...itemMock}/>);

    test('should be match snapshoot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be render whith the correct description', () => {
        expect(wrapper.containsMatchingElement(<ItemDetailDescription description={'descripcion'}/>))
        .toEqual(true);
    });

    test('should be render whith the correct props', () => {
        expect(wrapper.containsMatchingElement(<ImagePriceContainer {...itemMock}/>))
        .toEqual(true);
    })
    
    
    
})
