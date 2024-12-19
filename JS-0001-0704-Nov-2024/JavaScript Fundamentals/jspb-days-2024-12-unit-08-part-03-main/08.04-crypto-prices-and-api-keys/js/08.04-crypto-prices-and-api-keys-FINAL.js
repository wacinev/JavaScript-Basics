// Lesson 08.04 Crypto Prices API Key - FINAL
// API key obtained from : coinapi.io
// F4B50304-7A28-4843-988E-5F56513402E2
// https://docs.coinapi.io/#md-docs
/*
curl https://rest.coinapi.io/v1/exchanges \
  --request GET 
  --header "X-CoinAPI-Key: 73034021-THIS-IS-SAMPLE-KEY"
  */

// https://rest.coinapi.io/v1/exchangerate/BTC/USD

// "https://rest.coinapi.io/v1/exchangerate/BTC/USD", {

// coinapi.io API KEY issued to Brian McClain
// on March 11, 2024
// API Key: F4B50304-7A28-4843-988E-5F56513402E2
const p = document.querySelector("#crypto-p");
const btn = document.querySelector("button");
btn.addEventListener("click", fetchBitcoinPrice);

// fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
// headers: {
//     "X-CoinAPI-Key": "YOUR_API_KEY" // Replace with your API key
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// make fetch request
function fetchBitcoinPrice() {
  const API_KEY = "F4B50304-7A28-4843-988E-5F56513402E2";

  fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
    headers: {
      "X-CoinAPI-Key": API_KEY,
    },
  })
    // => arrow func always returns a value
    // so, .then is taking the json string passed to it by fetch
    // and is passing that json str to its own callback as its argument
    // and the callback is parsing the json and returning the resulting obj
    .then((jsonResponse) => jsonResponse.json())
    // that return value -- the actual js object -- is passed to the next
    // then where it goes in as its callback argument. This is where we
    // 'do stuff' w the object data, in this case is display date and price
    .then((obj) => {
      console.log(obj); // don't just output object to DOM
      // {time: '2024-03-11T16:13:14.0000000Z', asset_id_base: 'BTC', asset_id_quote: 'USD', rate: 72351.19113407933}
      // const dt = Date.parse(obj.time);
      // let hrs = dt.getHours();

      let usd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(obj.rate);

      p.innerHTML = `Time: ${obj.time}<br>Coin: ${obj.asset_id_base} --> Price: ${obj.asset_id_quote} ${usd}`;
    });
} // end function fetchBitcoinPrice()
