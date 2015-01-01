'use strict';

var Flux = require('delorean').Flux;


var Store = Flux.createStore({
  
  data: {
    
	userProfile: 'user profile',
    
	photoAttributes: {
	
	  dateUploaded: null,
	  curatedIncrement: 0,
	  followedIncrement: 0,
	  viewedIncrement: 0,
	  isUndiscovered: true,
	  categories: [],
	  trendingTags: []
	
	}
    
  },
  
  setData: function (data) {
    this.data = data;
    this.emit('change');
  },
  setUserProfile: function(data) {  
    this.data.userProfile = data;
	this.emit('change');
  },
  actions: {
    'incoming-data': 'setData',
	'setUserProfile': 'setUserProfile'
  }
});
var store = new Store();

module.exports = store;