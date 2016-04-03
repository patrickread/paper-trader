class Portfolio {
  constructor(transactions) {
    this.transactions = transactions;
    this.holdings = this.calculateHoldings();
  }

  calculateHoldings() {
    var holdings = [];
    for (var transaction of this.transactions) {
      var holding = this.findHolding(holdings, transaction.symbol);
      if (holding === null) {
        holding = {
          key: holdings.length,
          symbol: transaction.symbol,
          name: transaction.name,
          shares: 0,
          costBasis: 0
        };
        holdings.push(holding);
      }

      holding.shares += transaction.shares;
      holding.costBasis += (transaction.shares * transaction.price) + transaction.commission;
    }

    return holdings;
  }

  findHolding(holdings, symbol) {
    for (var stock of holdings) {
        if (stock.symbol === symbol) {
            return stock;
        }
    }

    return null;
  }
}

export default Portfolio
