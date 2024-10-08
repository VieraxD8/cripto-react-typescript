import { create} from 'zustand'
import {  devtools } from 'zustand/middleware'
import { CryptoPrice, Cryptocurrency, Pair } from './types';
import { getCrypto, fetchCurrentCryptoPrice } from './services/CryptoService';

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>

}



export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL : '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''

    },
    loading: false,
    fetchCryptos: async () => {
       const cryptocurrencies = await getCrypto()
       set(() => ({
        cryptocurrencies
       }))
    },
    fetchData: async (pair) => {


        set( () => ({

            loading: true

        }))

        const  result =  await fetchCurrentCryptoPrice(pair)
        
        set( () => ({

            result,
            loading: false

        }))
    
    }
})))