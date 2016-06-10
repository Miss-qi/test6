'use strict';

function fibonacci_series(n) {
	var arr = [];
	var a,b,c;
	if(n===0){
		arr.push(0);
	}else if(n===1){
		arr.push(0,1);
	}else{
		arr.push(0,1);
		for(var i = 2;i <= n; i++){
			arr[i] = arr[i-1] + arr[i-2];
			arr.push(arr[i-1]);
		}
	}
	return arr;
}

module.exports = fibonacci_series;
