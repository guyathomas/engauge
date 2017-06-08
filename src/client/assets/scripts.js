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

// Input:
  // indicesToPull: Set
  // dataSource: Array of Objects
  // key: String to pull as a key from datasource
const pullKeyFromObjArr = (indicesToPull, dataSource, key) => {
  const result = [];
  if (indicesToPull.size === 0 || dataSource.length === 0) {
    console.log('Entered exit statement', indicesToPull, dataSource);
    return result;
  }

  for (const index of indicesToPull) {
    if (key) {
      if (dataSource[index] && dataSource[index][key]) {
        result.push(dataSource[index][key]);
      }
    } else {
      result.push(dataSource[index]);
    }
  }
  return result;
};

const dummy = [{ id: 3,
  url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
  shortCode: '123',
  sessions: [{ id: 1,
    recording: [{ x: 1,
      y: 1,
      time: 1 }],
    createdAt: 'Tue May 30 2017 15:00:01 GMT+1000 (AEST)',
    duration: '3103' },
  { id: 3,
    recording: [{ x: 3,
      y: 3,
      time: 3 }],
    createdAt: 'Wed May 31 2017 11:12:38 GMT+1000 (AEST)',
    duration: '10279' },
  { id: 2,
    recording: [{ x: 2,
      y: 2,
      time: 2 }],
    createdAt: 'Wed May 31 2017 11:12:38 GMT+1000 (AEST)',
    duration: '10279' }],
},
{ id: 3,
  url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
  shortCode: 'abc',
  sessions: [{ id: 1,
    recording: [{ x: 1,
      y: 1,
      time: 1 }],
    createdAt: 'Tue May 30 2017 15:00:01 GMT+1000 (AEST)',
    duration: '3103' },
  { id: 3,
    recording: [{ x: 3,
      y: 3,
      time: 3 }],
    createdAt: 'Wed May 31 2017 11:12:38 GMT+1000 (AEST)',
    duration: '10279' },
  { id: 2,
    recording: [{ x: 2,
      y: 2,
      time: 2 }],
    createdAt: 'Wed May 31 2017 11:12:38 GMT+1000 (AEST)',
    duration: '10279' }],
}];

const findKeyAtID = (array, target, idName, key) => {
  // key is optional and will default to returning the index
  idName = idName || 'id';
  for (var i = 0; i < array.length; i++) {
    if (array[i][idName] === target) {
      return key ? array[i][key] : i;
    }
  }
};


module.exports = { mergeNArrays, pullKeyFromObjArr, findKeyAtID };
