# rename-key

Rename a single key in an object

## Installation

	// npm
	$ npm install rename-key

## Usage

	var renameKey = require('rename-key');

	var pets = { hans:  'cat', hugo: 'dog' };

	// as a function
	renameKey(pets, 'hans', 'per'); // { hugo: 'dog', per: 'cat' }
	pets; // { hugo: 'dog', per: 'cat' }

	// as a method
	pets.renameKey = renameKey;
	pets.renameKey('hugo', 'superman'); // { superman: 'dog', per: 'cat' }

Alters the object "by reference" and returns the object.

## License

MIT © [Thomas Jensen](http://tjconcept.dk)