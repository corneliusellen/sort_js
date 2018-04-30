const assert = require('chai').assert
const bubbleSort = require('../lib/bubble_sort')

describe('bubble sort', function() {
  context('sort', function(){
    it('it can switch the order of two numbers if the first is higher', function(){
      assert.deepEqual(bubbleSort(8,7), [7,8])
    })
  })
})
