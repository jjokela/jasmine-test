describe('Calculator', function() {

    // custom matcher factory
    var customMatchers = {
        toBeBetween: function (util, customEqualityTesters) {
            return {
                compare: function (actual, a, b) {
                    var result = {};
                    result.pass = actual >= a && actual <= b;
                    if(result.pass) {
                        result.message = "OK";
                    } else {
                        result.message = actual + " is not between " + a + " and " + b;
                    }
                    return result;
                }
            }
        }
    };

    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
        jasmine.addMatchers(customMatchers);
    });

    it('should be able to add 1 and 1', function () {
        var result = calculator.add(1, 1);
        expect(result).toBe(2);
    });

    it('should be able to divide 3 and 3', function () {
        var result = calculator.divide(3, 3);
        expect(result).toBe(1);
    });

    it('should be able to divide a rational number', function () {
        var result = calculator.divide(1, 3);
        expect(result).toBeBetween(0.3, 0.34);
    });

    /* passing parameters to function that is tested */
    it('should throw error when dividing by zero', function () {

        /* The parameters are passed with the help of the bind function.
        This function was introduced with ECMAScript 5.
        It basically creates a wrapper function so that you don't have to manually
        create an anonymous function. Via http://www.ecofic.com/about/blog/testing-for-exceptions-with-jasmine
         */
        expect(calculator.divide.bind(null, 1, 0)).toThrow();
    });

    /*
    * Spy tests
    * */
    describe('Calculator spy tests', function () {

        it('should spy on add callthru', function () {
            var spy = spyOn(calculator, 'add').and.callThrough();
            calculator.add(1, 1);

            expect(spy).toHaveBeenCalledWith(1,1);
        });

        it('should spy on divide callthru', function () {
            var spy = spyOn(calculator, 'divide').and.callThrough();
            calculator.divide(1, 1);

            expect(spy).toHaveBeenCalledWith(1,1);
        });

    });

    /*
    * UI tests
    * */
    describe('Calculator UI', function () {

        var calculator;
        beforeEach(function () {
            $('body').append('<div id="calcDiv"></div>');
            calculator = new Calculator();
        });

        /*this is an async test (mocha-style)
        * - done is passed as a parameter
        * - it is called when everything is done
        * - without it, test seems to pass, but following error shows on console:
        *   Uncaught TypeError: Cannot read property 'expect' of null
        * */
        it('should work with a visual effect', function (done) {

            var callback = function () {
            };

            calculator.hideResult(callback());

            setTimeout(function() {
                expect($('#calcDiv').css('display')).toBe('none');
                done();
            }, 1100);
        });
    });
});




