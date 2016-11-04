/**
 * windowsize
 *
 *    Library test
 */

define([
  'intern!bdd',
  'intern/chai!expect',
  'lib/windowsize',
], function (bdd, expect, windowsize) {
  with(bdd) {

    describe('Newschool amd library', function() {
      it('Library answer questions with YO!', function() {
        var result = windowsize('Should I tickle this unicorn?');
        expect(result).to.equal('YO!');
      })
    })

  }
})
