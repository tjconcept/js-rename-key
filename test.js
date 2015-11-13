/* jslint node: true */
'use strict';

var renameKey = require('./');
var test = require('tap').test;

test('rename-key', function( t ) {
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

	o.renameKey = renameKey;

	r = o.renameKey('name', 'title');

	t.deepEqual(r, {
		'title': 'GitHub',
		'web': 'https://github.com',
		'renameKey': renameKey,
	});

	t.deepEqual(o, {
		'title': 'GitHub',
		'web': 'https://github.com',
		'renameKey': renameKey,
	});

	var Person = function( name, surname ){ this.name = name; this.surname = surname; };
	Person.prototype = Object.create({renameKey: renameKey});

	var person = new Person('Sofie', 'Jensen');
	person
		.renameKey('name', 'firstName')
		.renameKey('surname', 'lastName');

	t.deepEqual(person, {
		'firstName': 'Sofie',
		'lastName': 'Jensen',
	});

	t.end();
});
