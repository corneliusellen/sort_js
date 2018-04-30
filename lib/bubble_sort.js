fucntion sort(array) {
  let length = array.length;
  //know when to stop the loop based on array length

    for(var counter = 0; counter < length; counter++) {
      for(var index = 1, index < array.length, index++) {
        if(array[index-1] > array[index]) {
          var lower = array[counter];
          array[counter] = array[index];
          array[index] = lower;
        }
      }
    }
  return array
}

module.exports = sort
