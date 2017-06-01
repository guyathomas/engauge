const mergeNArrays = (arraysToSort, comparitor) => {
  if (arraysToSort.length === 1) { return arraysToSort; } // Only one array so no need to merge
  const newArr = [];
  const pointers = new Array(arraysToSort.length).fill(0);
  comparitor = comparitor || function (a, b) { return a < b; };

  const isInbounds = (pointer, arr) => (pointer < arr.length);
  const anyInBounds = (pointers, arraysToSort) => pointers.reduce((acc, item, i, arr) => acc || isInbounds(item, arraysToSort[i]), false);

  while (anyInBounds(pointers, arraysToSort)) {
    let smallestArrInd;
    let smallestVal;

    const mostRecent = newArr[newArr.length - 1];
    for (let i = 0; i < arraysToSort.length; i++) {
      const thisPointer = pointers[i];
      const thisArr = arraysToSort[i];
      if (isInbounds(thisPointer, thisArr) && (comparitor(thisArr[thisPointer], smallestVal) || smallestVal === undefined)) {
        while (thisArr[pointers[i]] < mostRecent) { pointers[i]++; } // Skip any values that are smaller than the previous ones
        smallestArrInd = i;
        smallestVal = arraysToSort[i][thisPointer];
      }
    }
    newArr.push(smallestVal);
    pointers[smallestArrInd]++;
  }

  return newArr;
};

const pull = (indexObj, source, key) => {
  const result = [];
  if (!(!!(indexObj) && !!(source) && !!(key))) { return result } //Don't run when there are no sessions
  const indices = Object.keys(indexObj);
  console.log(indexObj, source, key)
  for (let i = 0; i < indices.length; i++) {
    const thisIndex = indices[i];
    console.log(source)
    key ? result.push(source[thisIndex][key]) : result.push(source[thisIndex]);
  }
  console.log('result from pull', result);
  return result;
};


module.exports = { mergeNArrays, pull };
