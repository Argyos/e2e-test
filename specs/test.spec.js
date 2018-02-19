var assert = require('chai').assert

describe(':: First test', function () {
       
	it(':: Google word', function(){
		browser.url('https://google.com');
		assert.include($('#_eEe').getText(),'Google','Custom ERROR, need to contain "Google" word');
	})

});
