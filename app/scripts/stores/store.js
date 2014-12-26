'use strict';

var Flux = require('delorean').Flux;


var Store = Flux.createStore({
  data: null,
  setData: function (data) {
    this.data = data;
    this.emit('change');
  },
  actions: {
    'incoming-data': 'setData'
  }
});
var store = new Store();

module.exports = store;