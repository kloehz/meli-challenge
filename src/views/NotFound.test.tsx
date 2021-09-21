import { shallow } from "enzyme";
import { NotFound } from "./NotFound";

describe('NotFound Test', () => {
    const wrapper = shallow( <NotFound /> );

    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
