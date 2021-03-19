// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import CurrencySelector from './CurrencySelector';
import BitcoinRate from './BitcoinRate';
import bitcoinlogo from './bitcoin.png'

function App() {
  const [currency, setCurrency] = useState('');
  const [bitExchange, setRate] = useState(0);
  function findConversion(currency){
    setCurrency(currency);
    // console.log(currency);
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res =>{
        setRate(res.data.bpi[currency].rate);

      })
  }
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={bitcoinlogo} alt="bitcoin-logo" style={{height: "5em"}}/>
        <h1> Bitcoin Tracker App </h1>
      </header>


      <div className="flex-container">

        <CurrencySelector getCurrency={findConversion}/>

        <BitcoinRate rate={bitExchange} currency={currency}/>

      </div>
    </div>
  );
}

export default App;
