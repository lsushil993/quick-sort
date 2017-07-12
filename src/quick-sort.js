'use strict';

var origArray = [9, 8, 7, 10, 6, 100, 5, 4, 99, 3, 2, 1];
quickSort(origArray);



	function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
};


module.exports = quickSort;