import { shallow } from "enzyme"
import { Link } from "react-router-dom";
import { NotResuts } from "./NotResuts"

describe('NotResults Component tests', () => {
    const wrapper = shallow(<NotResuts />);

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be redirect to correct path', () => {
        const link = wrapper.find(Link);
        expect(link.prop('to')).toBe('/');
    });

    test('should be show the correct text', () => {
        expect(wrapper.find('h2').text()).toBe('No se encrontraron resultados para su busqueda.');
    })
    
    
})
