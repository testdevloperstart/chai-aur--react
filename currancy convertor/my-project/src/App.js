import logo from './logo.svg';
import './App.css';
import { InputBox} from './components';
import { useCurrencyInfo } from './customHooks/useCurrancyInfo';
import { useState } from 'react';
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setForm] = useState("usd")
  const [to, setTO] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo =useCurrencyInfo(from)

    const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setForm(to)
    setTO(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount*currencyinfo[to])
  }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        padding:10,
        backgroundImage: `url('https://images.pexels.com/photos/27244394/pexels-photo-27244394/free-photo-of-melting-glacier-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=> setAmount(amount)}
                        selectCurrency={from}
                        onAmountChange={(amount)=>setAmount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setTO(currency)}
                        selectCurrency={from}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  );
}

export default App;
