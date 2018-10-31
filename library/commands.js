'use strict';

var nbbRequire = require('./nbbRequire');

var user = nbbRequire('./src/user');

module.exports = {

  // Set HTTP routes
  init: ({router, middleware, controllers}, next) => {
    next();
  },

  test: (options, done) => {
		console.log('Hello World from NodeBB Commands Essentials');
    done();
  },

  getUsers: (options, done) => {
		//console.log('Hello World from NodeBB Commands Essentials');
    done();
  },


  // addAdminNavigation: (header, next) => {

  //   header.plugins.push({
  //     route: '/plugins/commands-essentials',
  //     icon: 'fa-file-image-o',
  //     name: 'Commands Essentials'
  //   });

  //   next(null, header);
  // }

};
