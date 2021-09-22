import { shallow } from "enzyme"
import { ItemDetailDescription } from "./ItemDetailDescription"

describe('ItemDetailDescription tests', () => {
    
    const wrapper = shallow(<ItemDetailDescription description={'descripcion'}/>);

    test('should be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should be show the correct description', () => {
        expect(wrapper.find('.desc-info').text()).toBe('descripcion');
    })
    
})
