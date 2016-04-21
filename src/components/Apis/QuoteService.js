class QuoteService {
  constructor(stock) {
    this.ROOT_URL = "http://dev.markitondemand.com/Api/v2/";
    this.QUOTE_URL = this.ROOT_URL + "Quote/jsonp";
    this.LOOKUP_URL = this.ROOT_URL + "Lookup/jsonp";
  }

  getQuote(stock) {
    var that = this;
    //Abort any open requests
    if (that.xhr) { that.xhr.abort(); }

    return new Promise(function(resolve, reject) {
      $.ajax({
        data: { symbol: stock.symbol },
        url: that.QUOTE_URL,
        dataType: "jsonp",
        context: that
      }).done(function(data) {
        data.stock = stock;
        resolve(data);
      }).fail(function(jqXHR, textStatus, err) {
        console.log(err);
        reject(Error(err));
      });
    });
  }

  lookupCompany(symbol) {
    var that = this;
    //Abort any open requests
    if (that.xhr) { that.xhr.abort(); }

    return new Promise(function(resolve, reject) {
      $.ajax({
        data: { input: symbol },
        url: that.LOOKUP_URL,
        dataType: "jsonp",
        context: that
      }).done(function(data) {
        resolve(data);
      }).fail(function(jqXHR, textStatus, err) {
        console.log(err);
        reject(Error(err));
      });
    });
  }
}

export default QuoteService
