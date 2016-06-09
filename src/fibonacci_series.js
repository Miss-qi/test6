'use strict';

function fibonacci_series(n) {
	var arr = [];
	var a,b,c;
	if(n===1){
		arr.push(0,1);
	}else if(n===2){
		arr.push(0,1,1);
	}else{
		for(i = 3;i <= n; i++){
			arr[i] = arr[i-1] + arr[i-2];
			arr.push(arr[i]);
		}
	}
	return arr;
}

module.exports = fibonacci_series;
