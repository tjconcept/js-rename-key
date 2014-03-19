# rename-key

Rename a single key in an object

## installation

	// npm
	$ npm install pluck-keys

## usage

	var renameKey = require('rename-key');

	var pets = { hans:  'cat', hugo: 'dog' };

	renameKey(pets, 'hans', 'per'); // { hugo: 'dog', per: 'cat' }

	pets; // { hugo: 'dog', per: 'cat' }

Alters the object "by reference" and returns the object.

## License

MIT