'use strict';

/**
 * @function double
 * @description doubles a given number
 * @param {Number} num - The number to double
 * @return {Number} The given numbered, but doubled
 */
module.exports = function double(num) {
	num *=2;
	return num;

};

obj = {};


for (var i = 0; i < num.length; i++) {
    double = doubling(num[i]);
    obj[num[i]] = double;
}
console.log(obj);

