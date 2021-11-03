let exchangeAgain = true;

while(exchangeAgain) {
  let getExchangeableCurrency, getAmount, getNeededCurrency;
  let num1 = 0, 
      num2 = 0;
  let currencyNames = 'USD/EUR/JPY/UAH/BYN';

  do {
    getExchangeableCurrency = prompt('Write currency for exchange (like USD/EUR/JPY/UAH/BYN)', ''); 
  } while (!getExchangeableCurrency || !currencyNames.includes(getExchangeableCurrency.toUpperCase()))

  do {
    getAmount = prompt('Write currency amount for exchange', '');
  } while (!getAmount || isNaN(getAmount) || (getAmount <= 0))

  do {
    getNeededCurrency = prompt('Write needed currency (like USD/EUR/JPY/UAH/BYN)', ''); 
  } while (!getNeededCurrency || !currencyNames.includes(getNeededCurrency.toUpperCase()))

  switch(getExchangeableCurrency.toUpperCase()) {
    case 'USD':
      num1 = 26.9059;
      break;
    case 'EUR':
      num1 = 29.6234;
      break;
    case 'JPY':
      num1 = 2.4963;
      break;
    case 'UAH':
      num1 = 1;
      break;
    case 'BYN':
      num1 = 11.1606;
  }

  switch(getNeededCurrency.toUpperCase()) {
    case 'USD':
      num2 = 26.9059;
      break;
    case 'EUR':
      num2 = 29.6234;
      break;
    case 'JPY':
      num2 = 2.4963;
      break;
    case 'UAH':
      num2 = 1;
      break;
    case 'BYN':
      num2 = 11.1606;
  }
  

  let result = num1 * getAmount / num2;
    
  alert(`${getAmount} ${getExchangeableCurrency} exchanged to ${result.toFixed(2)} ${getNeededCurrency}`);

  exchangeAgain = confirm('Exchange currency again?');  
}
