// 509. Fibonacci Number


const func = n => {
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    
    return func(n-1) + func(n-2);

}

console.log(func(4))