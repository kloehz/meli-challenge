import axios from "axios";
import { shallow } from "enzyme"
import { apiGetItemDetails } from "../api/itemDetail";
import { ItemDetail } from "./ItemDetail";

jest.mock('../api/itemDetail');

jest.mock('react-router-dom', () => ({
    // @ts-ignore
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn().mockReturnValue({
        pathname: '/items/MLA912120163'
    })
}))

describe('ItemDetail tests', () => {
    const wrapper = shallow(<ItemDetail />);
    test('should be render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('api apiGetItemDetails should be called', () => {
        // expect(apiGetItemDetails).toHaveBeenCalled();
    })
    
    
})
