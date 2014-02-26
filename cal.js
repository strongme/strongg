//A(a,b) B(c,d) Center(e,f) radius(r)
//X:
//	m:  (b-d)/(a-c)
//	n:   (a*d-b*c)/(a-c)
//	M:  (m*m+1)
//	N:	(2*m*(n-f)-2*e)
//	P:	((n-f)*(n-f)-r*r)
//Y:
//	m*X+n;

function calQuadraticEquationWithOneUnknow(m,n,p) {
	var test = n*n-4*m*p;
	var result = [];
	//检测是否有跟 
	if(test<0) {
		//console.log('无根');
	}else if(test===0){
		result[0] = -n/(2*m);
		//console.log(result);
	}else {
		result[0] = (-n+Math.sqrt(test))/(2*m);
		result[1] = (-n-Math.sqrt(test))/(2*m);
		// console.log(result);
	}
	return result;
}

//calQuadraticEquationWithOneUnknow(378977979,100024,0);


