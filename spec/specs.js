describe('findAndReplace', function() {

    it("replaces simple letters", function() {
        expect(findAndReplace("a b c", "b", "d")).to.equal("a d c");
    });

    it("replaces words", function() {
        expect(findAndReplace("thank you very much", "thank", "stink")).to.equal("stink you very much");
    });

    it("replaces multiple words", function() {
        expect(findAndReplace("thank you very much", "thank you", "stink meow")).to.equal("stink meow very much");
    });

    it("replaces multiple instances", function() {
        expect(findAndReplace("thank thank thank", "thank", "no thank")).to.equal("no thank no thank no thank");
    });

});
