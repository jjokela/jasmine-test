var Calculator = function () {

};

Calculator.prototype.add = function (a, b) {
    return a + b;
}

Calculator.prototype.divide = function (a, b) {
    if(b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

Calculator.prototype.hideResult = function (callback) {
    $('#calcDiv').fadeOut(1000, callback);
}