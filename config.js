module.exports = [
  {
    url: 'https://coinmarketcap.com/currencies/basic-attention-token/',
    selectors: {
      price: '#quote_price .text-large2',
    },
    message: 'BAT: ${price}'
  }, 
  {
    url: 'https://www.wantgoo.com/stock/2317',
    selectors: {
      price: '#ChangeInfoDiv span:nth-child(1)',
    },
    message: '2317: ${price}'
  },
  {
    url: 'https://www.marketwatch.com/investing/stock/goog',
    selectors: {
      price: '.intraday__price bg-quote',
    },
    message: 'goog: ${price}'
  },
]
