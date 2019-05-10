var QUnit = require('steal-qunit');
var plugin = require('./can-define-lodash');
var DefineList = require('can-define/list/list');
var DefineMap = require('can-define/map/map');
var _ = require('lodash');
var compute = require('can-compute');

QUnit.module('can-define-lodash');

QUnit.test('Initialized the plugin', function(assert) {
	var list = new DefineList(["a","b","c","d"]);

	var head = compute(function(){
		return _.head(list);
	});

	var last = compute(function(){
		return _.last(list);
	});

	assert.equal(last(), "d");

	last.on("change", function(ev, newVal){
		assert.equal(newVal, "c");
	});

	head.on("change", function(ev, newVal){
		assert.equal(newVal, "b");
	});

	list.shift();
	list.pop();
});


QUnit.test('_.values', 2, function(assert) {
	var map = new DefineMap({a: 1, b: 2});

	var values = compute(function(){
		return _.values(map);
	});

	assert.deepEqual(values(), [1,2]);

	values.on("change", function(ev, newVal){
		assert.deepEqual(newVal, [1,2,3]);
	});

	map.set("c",3);
});
