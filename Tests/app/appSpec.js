describe('App', function () {
    it('should be true', function() {
        expect(true).toBeTruthy();
    });
    it('should throw an exception', function () {
        expect(ExceptionThrower).toThrow();
    });
    xit('should be skipped', function () {
        expect(true).toBe(false);
    });

    describe('App spy tests', function () {

        it('should spy on callback', function () {
            var spyCallback = jasmine.createSpy('mySpy'); // createSpy
            CallbackTester(spyCallback);

            expect(spyCallback).toHaveBeenCalled();
        });

        it('should spy on nothingDoer', function () {
            var spy = spyOn(app, 'nothingDoer');
            app.nothingDoer();

            expect(spy).toHaveBeenCalled();
        });

        it('should spy on getQuantity', function () {
            var spy = spyOn(app, 'getQuantity').and.returnValue(123);
            var actual = app.getQuantity();

            expect(actual).toEqual(123);
        });

        it('should spy on getQuantity fake', function () {
            var spy = spyOn(app, 'getQuantity').and.callFake(function () {
                console.log('returning 20 from fake');
                return 20;
            });
            var actual = app.getQuantity();

            expect(actual).toEqual(20);
            expect(spy).toHaveBeenCalled();
        });

        it('should spy on getQuantity callthru', function () {
            var spy = spyOn(app, 'getQuantity').and.callThrough();
            var actual = app.getQuantity();

            expect(actual).toEqual(10);
            expect(spy).toHaveBeenCalled();
        });

        it('should spy on getQuantity throw', function () {
            var spy = spyOn(app, 'getQuantity').and.throwError(new Error('problem!'));

            var quantity;
            try {
                quantity = app.getQuantity();
            } catch(ex) {
                quantity = -999;
            }

            expect(quantity).toEqual(-999);
            expect(spy).toHaveBeenCalled();
        });
    });
});