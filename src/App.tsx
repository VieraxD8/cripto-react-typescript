import CriptoSearchForm from "./components/CriptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import { useCryptoStore } from "./store"
import { useEffect} from 'react'

function App() {

  const fetchCryptos = useCryptoStore( (state) => state.fetchCryptos)

  useEffect(() => {
    
    fetchCryptos();
    
  }, [])
  

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
            <CriptoSearchForm/>
            <CryptoPriceDisplay/>
        
        </div>

      </div>
    </>
  )
}

export default App
