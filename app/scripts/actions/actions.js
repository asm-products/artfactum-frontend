'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
  setData: function (data) {
    Dispatcher.setData(data);
  },
  setUserProfile: function (data) {
    Dispatcher.setUserProfile(data);
  }
};

module.exports = Actions;