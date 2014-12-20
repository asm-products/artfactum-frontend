'use strict';

var UserProfile = React.createFactory(require('./user-profile.js'));


React.render (

  <UserProfile></UserProfile>,
  document.getElementById('container')

);