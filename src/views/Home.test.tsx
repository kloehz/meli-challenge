import { shallow } from "enzyme"
import { Seo } from "../components/seo/Seo";
import { Home } from "./Home"

describe('Home screen Tests', () => {
    
    const wrapper = shallow(<Home />);

    test('should be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be display the correct image', () => {
        expect(wrapper.find('img').prop('src')).toBe('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png');
    });

    test('SEO component should be rendered', () => {
        expect(wrapper.containsMatchingElement(<Seo />)).toEqual(true);
    });
    
})
