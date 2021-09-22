import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import { NotFound } from "./NotFound";

describe('NotFound Page Test', () => {
    const wrapper = shallow( <NotFound /> );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be redirect to correct path', () => {
        const link = wrapper.find(Link);
        expect(link.prop('to')).toBe('/');
    });

    test('should be show the correct text', () => {
        const text = wrapper.find('h3');
        expect(text.text()).toBe('La pagina solicitada no existe');
    })
    
})
