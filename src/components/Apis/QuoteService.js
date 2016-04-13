var Markit = {};
/**
* Define the QuoteService.
* First argument is stock for the quote.
*/
Markit.QuoteService = function(stock) {
    this.stock = stock;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.requestPromise = this.makeRequest();
};

/** 
* Starts a new ajax request to the Quote API
* Returns a promise
*/
Markit.QuoteService.prototype.makeRequest = function() {
  var that = this;
  //Abort any open requests
  if (that.xhr) { that.xhr.abort(); }

  return new Promise(function(resolve, reject) {
    $.ajax({
      data: { symbol: that.stock.symbol },
      url: that.DATA_SRC,
      dataType: "jsonp",
      context: that
    }).done(function(data) {
      data.stock = that.stock;
      resolve(data);
    }).fail(function(jqXHR, textStatus, err) {
      reject(Error(err));
    });
  });
};

export default Markit
