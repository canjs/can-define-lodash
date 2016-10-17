var define = require('can-define');
var compute = require('can-compute');
var Observation = require('can-observation');

module.exports = {
  values: function() {
  	return __keys;
  }
};

Observation.add(this, 'change');

__keys

