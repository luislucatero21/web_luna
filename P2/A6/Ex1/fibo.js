var fibo_arr = [0, 1];

function fibo(n){
	
	var res;
	if(n in fibo_arr) {
		res = fibo_arr[n];
	} else {
		res = fibo(n - 1) + fibo(n - 2);
	}
	fibo_arr[n] = res;
	return res;
}

