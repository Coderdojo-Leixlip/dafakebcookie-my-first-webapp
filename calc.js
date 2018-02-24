function doOp(operation, num1, num2) {
    var result;
    if (operation === "add") {
        result = num1 + num2;
    }
    else if (operation === "substract") {
        result = num1 - num2;   
    }
    else if (operation === "multiply") {   
        result = num1 * num2;
    }
    else if (operation ===  "divide") {
        result = num1 / num2;
    }
    return result;
}
var  r = doOp("multiply",5, 10 )
console.log(r);
// call the function
