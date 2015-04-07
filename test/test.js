'use strict';

var assert = require('assert');
var humanizeList = require('..');

describe('humanize-list', function() {

  it('should do return the correct humanized list', function() {
    assert.equal(humanizeList(['apples', 'tomatoes', 'unicorns']), 'apples, tomatoes and unicorns');
  });

  it('should add the oxford comma when set to true', function() {
    assert.equal(humanizeList(['apples', 'tomatoes', 'unicorns'], { oxfordComma: true }), 'apples, tomatoes, and unicorns');
  });

  it('should add a custom conjunction when specified', function() {
    assert.equal(humanizeList(['apples', 'tomatoes', 'unicorns'], { conjunction: 'or' }), 'apples, tomatoes or unicorns');
  });

  it('should skip the conjunction when specified', function() {
    assert.equal(humanizeList(['apples', 'tomatoes', 'unicorns'], { skipConjunction: true }), 'apples, tomatoes, unicorns');
  });
});
