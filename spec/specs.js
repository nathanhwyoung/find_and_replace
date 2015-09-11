describe('countUpBy', function() {
    it("counts to 10 by 1", function() {
        expect(countUpBy("10", "1")).to.equal("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    });

    it("counts to 50 by 8", function() {
        expect(countUpBy("50", "8")).to.equal("0, 8, 16, 24, 32, 40, 48");
    });
    
});
