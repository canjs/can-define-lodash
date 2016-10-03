import QUnit from 'steal-qunit';
import plugin from './can-define-lodash';
import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import _ from 'lodash';
import compute from 'can-compute';

QUnit.module('can-define-lodash');

QUnit.test('Initialized the plugin', function(){
	var list = new DefineList(["a","b","c"]);

	var head = compute(function(){
		return _.head(list);
	});

	var last = compute(function(){
		return _.last(list);
	});

	QUnit.equal(last(), "c");

	last.on("change", function(ev, newVal){
		QUnit.equal(newVal, "b");
	});

	list.pop();
});


QUnit.test('_.value', 2, function(){
	var map = new DefineMap({a: 1, b: 2});

	var values = compute(function(){
		debugger;
		return _.values(map);
	});


	QUnit.deepEqual(values(), [1,2]);

	values.on("change", function(ev, newVal){
		QUnit.deepEqual(newVal, [1,2,3]);
	});

	map.set("c",3);
});
