'use strict';

function fibonacci_series(n) {
	var arr = [];
	if(n===1){
		arr.push(0,1);
	}else if(n===2){
		arr.push(0,1,1);
	}else{
		arr[n] = fibonacci_series(n-1) + fibonacci_series(n-2);
	}
	return arr;
}

module.exports = fibonacci_series;

