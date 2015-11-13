/* jslint node: true */
'use strict';

module.exports = function( obj, oldName, newName ) {
	if (typeof obj === 'string') {
		newName = oldName;
		oldName = obj;
		obj = this;
	}

	if (obj.hasOwnProperty(oldName)) {
		obj[newName] = obj[oldName];
		delete obj[oldName];
	}

	return obj;
};
