'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
  setData: function (data) {
    Dispatcher.setData(data);
  }
};

module.exports = Actions;