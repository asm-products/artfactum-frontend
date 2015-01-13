'use strict';

/*
 * Dispatchers are simple action dispatchers for stores.
 * Stores handle the related action.
 */
 
var Flux = require('delorean').Flux;
 
var store = require('./stores/store.js');
 
var Dispatcher = Flux.createDispatcher({
  setData: function (data) {
    this.dispatch('incoming-data', data);
  },
  setUserProfile: function (data) {
    this.dispatch('setUserProfile', data);
  },
  fetchUserPhotos: function (data) {
    this.dispatch('fetchUserPhotos', data[0].photos);
  },
  setCVFile: function( data ){
    this.dispatch('setCVFile', data);
  },
  getStores: function () {
    return {increment: store};
  }
});
module.exports = Dispatcher;