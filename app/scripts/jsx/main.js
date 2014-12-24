'use strict';


var Flux = require('delorean').Flux;

var UserProfile = React.createFactory(require('./user-profile.js'));


React.render (

  <UserProfile></UserProfile>,
  document.getElementById('container')

);




