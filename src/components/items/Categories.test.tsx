import { shallow } from "enzyme"
import { Categories } from "./Categories"

describe('Categories tests', () => {
    const mockCotegories = ["Hogar, Muebles y Jardín","Bazar y Cocina","Vajilla y Artículos de Servir","Vajilla","Vasos"];
    const wrapper = shallow(<Categories categories={mockCotegories}/>);

    test('should be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be render te correct quantity of categories', () => {
        expect(wrapper.find('h5').length).toBe(mockCotegories.length);
    });
    
})
