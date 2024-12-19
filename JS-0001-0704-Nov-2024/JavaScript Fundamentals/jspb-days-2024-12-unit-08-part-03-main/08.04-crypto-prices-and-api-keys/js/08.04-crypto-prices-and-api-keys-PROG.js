// Lesson 08.04 Crypto Prices API Key - PROG

// API key obtained from : coinapi.io
// F4B50304-7A28-4843-988E-5F56513402E2
// https://docs.coinapi.io/#md-docs
/*
curl https://rest.coinapi.io/v1/exchanges --header "X-CoinAPI-Key: F4B50304-7A28-4843-988E-5F56513402E2"
  */

// https://rest.coinapi.io/v1/exchangerate/BTC/USD

// "https://rest.coinapi.io/v1/exchangerate/BTC/USD", {

// coinapi.io API KEY issued to Brian McClain
// on March 11, 2024
// API Key: F4B50304-7A28-4843-988E-5F56513402E2

const cryptoParagraph = document.querySelector('#crypto-p');
const getPricesButton = document.querySelector('button');
getPricesButton.addEventListener('click', getBitcoinPrice);

function getBitcoinPrice() {
  fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
    headers: {
      "X-CoinAPI-Key": 'F4B50304-7A28-4843-988E-5F56513402E2'
    }
  }).then((response) => response.json())
    .then((data) => {
      // internationalization: process of making your app work for different nationalities
      const dollarFormat = Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD',
      })
      cryptoParagraph.textContent = dollarFormat.format(data.rate);
    })
}