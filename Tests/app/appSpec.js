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
});