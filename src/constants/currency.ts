    export const getCurrency = ( currency:string ) => {
        switch (currency) {
            case 'ARS':
                return '$';
            case 'USD':
                return 'U$S';
            default:
                return '$';
        }
    }