'use strict';

var Flux = require('delorean').Flux;


var Store = Flux.createStore({
  
  data: {
  
    signedIn: false,
    
	userProfile: [{
	
	  username: "username",
	  artfactumUrl: null,
	  livingIn: 'country',
	  spokenLanguages: [],
	  artisticDisciplines: [],
	  favoriteArtStyles: [],
	  featuredInterests: [],
	  influences: [],
	  artisticCV: null,
	  profile: 'artist', //either artist or art lover
      bornIn: 'country',
      birthDate: null,
      socialConnections: {
	    facebook: false,
		twitter: false,
		googlePlus: false
	  },
	  following: ['artist']
	  
	}],
    
	//photo model
	photoAttributes: [{
	
	  id: null,
	  photoUrl: null,
	  title: 'untitled',
	  ownerName: 'owner',
	  ownerUrl: null,
	  description: 'photo description lorem ipsum artsum lorem ip ipsum describe',
	  dateUploaded: null,
	  curatedIncrement: 0,
	  followedIncrement: 0,
	  viewedIncrement: 0,
	  isUndiscovered: true,
	  category: ['Art'],
	  trendingTags: []
	
	}],
	
	userPhotos: {
	
	  photos: [] //all the user's photos
	
	},
	
	photosByCategory: {
	
	  photos: [] //retrieve array of photoAttributes
	
	},
	
	photosByTrendingTags: {
	
	  photos: [] //retrieve array of photoAttributes
	
	}
    
  },
  
  setData: function (data) {
    this.data.setData = data;
    this.emit('change');
  },
  
  setUserProfile: function(data) {  
    this.data.userProfile = data;
	this.emit('change');
  },
  
  fetchUserPhotos: function(data){
	this.data.userPhotos.photos = data;
	this.emit('change');
  },
  
  actions: {
    'incoming-data': 'setData',
	'setUserProfile': 'setUserProfile',
	'fetchUserPhotos': 'fetchUserPhotos'
  }
  
});

var store = new Store();

module.exports = store;