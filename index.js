/* jslint node: true */
'use strict';

module.exports = function( obj, oldName, newName, deep ) {
	if (obj.hasOwnProperty(oldName)) {
		obj[newName] = obj[oldName];
		delete obj[oldName];
	}
	return obj;
}