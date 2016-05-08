class PusherService {
  constructor() {
    this.pusherClient = new Pusher('b953421085722938d705', {
      encrypted: true
    });
  }

  subscribeForSymbol(symbol, caller, callback) {
    var channel = this.pusherClient.subscribe(symbol);
    channel.bind('new_quote', function(data) {
      console.log('Updating ' + data.message.symbol + ' with new price: ' + data.message.price);
      callback(data.message, caller);
    });
  }
}

export default PusherService
