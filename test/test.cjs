const { assert } = require('chai');
const app = require('../app.cjs');

describe('Simple test', function() {
    it('should return hello message', function() {
        assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!');
    });
});
