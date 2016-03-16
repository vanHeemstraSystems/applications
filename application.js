/*
 * Application
 * 
 */
module.exports = function() {
  var _Application = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  //OLD config = require('../configurations/server.js');
  config = require(path.join(paths.configurations, '/configuration.js'))
  var configs = config.configs,
  server_prefix = configs.server_prefix || 'PREFIX';
  //OLD var express = require('express');
  var express = require(path.join(paths.libraries, '/express.js'))
  console.log(server_prefix + " - Applications application required.");
  _Application = express();
  return _Application;
}();//calls itself
