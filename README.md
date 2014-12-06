artfactum-frontend
================== 
A better way to discover new art

Artfactum is built on Assembly

##How Assembly Works

Assembly products are like open-source and made with contributions from the community. Assembly handles the boring stuff like hosting, support, financing, legal, etc. Once the product launches we collect the revenue and split the profits amongst the contributors.

Visit https://assembly.com to learn more.

##About

The front-end repository for Artfactum.

We're currently using React with the Flux architecture and Bootstrap w/LESS. Also included: jQuery and Modernizr.

React: http://facebook.github.io/react/

Flux: http://facebook.github.io/flux/docs/overview.html

This repo was scaffolded using Yeoman (see https://github.com/yeoman/generator-webapp).

##Contribute

You'll need to have installed bower, node, grunt, and grunt-cli.


##How to install

In the root directory fire:

        bower install


then:

        npm install


If you have problems with npm install you may need to clear the cache and try again:

        npm cache clear


Finally, run the app on the local server:

        grunt serve

To build:

        grunt build
  
If you need to add a library or plugin, use bower or npm.

For example:

        bower install --save jquery

##Contributing

Base this project's git flow on [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

1. Find or Submit Bounty
2. Make a Feature Branch from `develop`
  - Name it based on bounty: `18-init-project`
3. Make Changes
  - Use micro commits
  - Use the imperative, present tense: "change", not "changed" or "changes".
4. Write tests
  - Will not accept PRs that reduce coverage
5. Open PR back into develop
  - Make PR Description links to the Bounty and add a comment to the Bounty linking the PR

##React and JSX 
Use JSX for better workflow. Install react-tools and use JSX -w [original file] [build file].
This will automatically compile your jsx js into valid js. 

The build directory is located in app/build.
Put the original somewhere in app/scripts.


#Work DRY

See if there is an existing React component, Bootstrap solution, or jQuery plugin available before starting a new bounty.
