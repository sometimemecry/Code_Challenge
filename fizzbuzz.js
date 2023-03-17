const getParam = (n) => {
    let temp = [];
for (let i =1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        temp.push('FizzBuzz');
    }else if(i % 3 === 0){
        temp.push('Fizz');
    }else if(i % 5 ===0){
        temp.push('Buzz');
    }else{
        temp.push(i);
    }   
} 
    return temp;
}

console.log(getParam(15));