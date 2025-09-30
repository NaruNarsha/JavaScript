
function add(a, b) {
    return a + b;
}


//const sum = add(3, 4);
//console.log(sum);



function surprise(operator){
    const result = operator(2, 3);
    console.log(result);
}


surprise(add);