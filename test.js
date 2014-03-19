/* jslint node: true */
'use strict';

var renameKey = require('./');
var test = require('tap').test;

test('rename-key', function( t ) {
		t.plan(2);

		var o = {
			'name': 'GitHub',
			'url': 'https://github.com',
		};

		var r = renameKey(o, 'url', 'web');

		t.deepEqual(r, {
			'name': 'GitHub',
			'web': 'https://github.com',
		});

		t.deepEqual(o, {
			'name': 'GitHub',
			'web': 'https://github.com',
		});
});