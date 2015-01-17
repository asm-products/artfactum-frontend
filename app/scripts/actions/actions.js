'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
 
  channel: function(channel) {
  
    return this.channels[channel]; 
  
  },
  
  channels: {
  
    paddedUnderline: null
  
  },
 
  setData: function (data) {
    Dispatcher.setData(data);
  },
  
  setUserProfile: function (data) {
    //validate on the server then do this
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
  
  fetchFeaturedCollections: function(url) {
  
    $.getJSON( url,{
	  format: 'json'
	}).done( function(data) {
	
	  Dispatcher.setFeaturedCollections(data);
	  
	}).fail( function(e){
	
	  alert('unable to load');
	  
	});
	
  },
  
  followArtist: function(){
  
  },
  
  fileUpload: function(elem,url){
  
    $(elem).fileupload({
	
	  url: url,
	  dataType: 'json',
	  done: function (e, data) {
		
	    $.each(data.result.files, function (index, file) {
	  
	      Dispatcher.setCVFile(file);
          $('<p></p>').text(file.name).appendTo('#files');
			
	    });
		
	  },
	  fail: function(){  
		   
	    alert('invalid url');
		
	  },
	  progressall: function (e, data) {
		var progress = parseInt(data.loaded / data.total * 100, 10);
		$('#progress .progress-bar').css(
			'width',
			progress + '%'
		);
	  }
      }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');    

  },
  
  unbindfileUpload: function(elem){
  
    elem.off('fileupload');
   
  }

};

module.exports = Actions;