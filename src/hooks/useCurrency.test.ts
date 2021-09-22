import useCurrency from "./useCurrency"

const mockPropsWithDecimals = {
    currency: 'ARS',
    amount: 10,
    decimals: 90,
}

const mockPropsWithoutDecimals = {
    currency: 'ARS',
    amount: 10,
    decimals: 0,
}

describe('useCurrency tests', () => {
    
    test('should be return the correct value with decimals', async () => {
        await expect(useCurrency(mockPropsWithDecimals)).toEqual({"amount": "10", "currency": "$", "decimals": "90"});
    });

    test('should be return the correct value without decimals', async() => {
        await expect(useCurrency(mockPropsWithoutDecimals)).toEqual({"amount": "10", "currency": "$", "decimals": "00"});
    })
    
    
})
