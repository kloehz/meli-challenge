import { shallow } from "enzyme"
import { Spinner } from "./Spinner"

describe('Spinner tests', () => {
    
    const wrapper = shallow(<Spinner />);

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should be have an image', () => {
        expect(wrapper.find('img').length).toBe(1);
    });
    
})
