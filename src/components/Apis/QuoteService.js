import ApiService from '../Apis/ApiService'
import reactCookie from 'react-cookie'

class QuoteService {
  constructor() {
    this.ROOT_URL = "http://dev.markitondemand.com/MODApis/Api/v2/";
    this.LOOKUP_URL = this.ROOT_URL + "Lookup/jsonp";
  }

  getQuote(stock, caller) {
    var that = this;
    //Abort any open requests
    if (that.xhr) { that.xhr.abort(); }

    return new Promise(function(resolve, reject) {
      var token = reactCookie.load('id_token');
      var apiService = new ApiService(token);
      apiService.getQuote(stock.symbol).then(function(data) {
        var lastPrice = data.price;
        var changePercent = data.change_percent;
        var change = data.change_numeric;

        var response = {
          price: lastPrice,
          change_percent: changePercent,
          change_numeric: change,
          open: data.open,
          symbol: stock.symbol,
          name: data.name
        };

        resolve({
          data: response,
          caller: caller
        });
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
