'use strict';
var assert = require('assert');
var speechSynthesis = require('./');

xit('should be fixed', function () {
	assert.strictEqual(speechSynthesis('unicorns'), 'unicorns & rainbows');
});
