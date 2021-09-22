import { shallow } from "enzyme"
import { apiGetItems } from "../../api/searchItem";
import { Header } from "./Header";

const mockHistoryPush = jest.fn()


jest.mock('react-router-dom', () => ({
    // @ts-ignore
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn().mockReturnValue({
        pathname: '',
    }),
    useHistory: () => ({
      push: mockHistoryPush
    }),
}));

describe('Header Component tests', () => {
    
    const wrapper = shallow(<Header />);

    test('should be match snapshoot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be NOT push to item page on click', () => {
        const fakeEvent = { preventDefault: () => {} };
        const formContainer = wrapper.find('.input-container');
        formContainer.simulate('submit', fakeEvent);
        expect(mockHistoryPush).not.toHaveBeenCalled();
    });

    test('should be change the value', () => {
        let input = wrapper.find('input');
        input.simulate('change', { target: {value: 'vasos'} });
        input = wrapper.find('input');
        expect(input.prop('value')).toBe('vasos');
    });

    test('should be display the correct image', () => {
        const img = wrapper.find('.logo-img');
        expect(img.prop('src')).toBe('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png');
    });


    test('should be push to items page when submit', () => {
        const fakeEvent = { preventDefault: () => {} };
        let input = wrapper.find('input');
        input.simulate('change', { target: {value: 'vasos'} });
        input = wrapper.find('input');

        const formContainer = wrapper.find('.input-container');
        formContainer.simulate('submit', fakeEvent);
        expect(mockHistoryPush).not.toHaveBeenCalled();
    })
    
    
})
