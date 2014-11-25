artfactum-frontend
================== A better way to discover new art

*Update:

An app build is now included in the 'dist' folder for non-developers or anyone wanting a finished product without building the app and running on a server. 

To view the app build download the zip. Open the 'dist' folder and open index.html in a browser.

For developers:

This is a webapp scaffold using the yeoman webapp generator.

-includes bootstrap, modernizr, jquery

see: https://github.com/yeoman/generator-webapp

##test/contribute

What's in this repo is the app. Bower, node components are gitignored.

fork and clone the repo.

In the root directory fire:

bower install

Finally, run the app on the local server:

grunt serve

then:

npm install

If you have problems with npm install you may need to clear the cache and try again:

npm cache clear

