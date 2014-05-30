
function ExceptionThrower() {
    throw new Error('Catch!');
}

function CallbackTester(callback) {
    callback();
}

var app = app || {};

app.nothingDoer = function () {
    
}

app.getQuantity = function () {
    return 10;
}