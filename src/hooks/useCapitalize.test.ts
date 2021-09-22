import { useCapitalize } from "./useCapitalize";

describe('useCapitalize tests', () => {
    
    test('should be show uppercased the first letter', () => {
       expect(useCapitalize('text')).toEqual('Text'); 
    }); 
});
