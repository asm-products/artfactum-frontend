'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
 
  setData: function (data) {
    Dispatcher.setData(data);
  },
  
  setUserProfile: function (data) {
    Dispatcher.setUserProfile(data);
  },
  
  fetchUserPhotos: function(url){
  
      $.getJSON( url,{
	    format: 'json'
	  }).done( function(data){  
	  
	    Dispatcher.fetchUserPhotos(data);
	  
	  }).fail( function(e){
	    
		alert('failed');
	  
	  });  
	  
  },
  
  followArtist: function(){
  
  },
  
  ajax: function(){
  
  
  }

};

module.exports = Actions;