var assert = require('chai').assert

describe(':: First test', function () {
       
	it(':: Hello World', function(){
		var aux = 'Hello World';
		assert.equal(aux,'Hello World','Custom ERROR, need to be "Hello World"');
	})

});
