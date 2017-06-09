const mergeNArrays = (arraysToSort, comparitor) => {
  if (arraysToSort.length === 1) { return arraysToSort[0]; } // Only one array so no need to merge
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
    console.log('Entered exit statement');
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

const findKeyAtID = (array, target, idName, key) => {
  // key is optional and will default to returning the index
  idName = idName || 'id';
  for (var i = 0; i < array.length; i++) {
    if (array[i][idName] === target) {
      return key ? array[i][key] : i;
    }
  }
};

const isSetEqual = (a, b) => {
  if (!a || !b) {return false;}
  for (value of a) {
      if (!b.has(value)) { return false; }
  }
  for (value of b) {
    if (!a.has(value)) { return false; }
  }
  return true;
}

const scaleData = (data, beforeSize, afterSize) => {
  const result = []
  const xRatio = afterSize.x / beforeSize.x;
  const yRatio = afterSize.y / beforeSize.y;

  for (var i = 0; i < data.length; i++) {
    const tempData = Object.assign({}, data[i]);
    tempData.x = Math.floor(data[i].x * xRatio);
    tempData.y = Math.floor(data[i].y * xRatio);
    result.push(tempData);
  }
  return result;
}
// const before = {y: 1030, x: 1679}
// const after = {y: 640, x: 621}
// const data = [{"x":703,"y":643,"time":28},{"x":891,"y":525,"time":47},{"x":920,"y":531,"time":101},{"x":1098,"y":534,"time":129},{"x":1023,"y":404,"time":148},{"x":642,"y":271,"time":163},{"x":1034,"y":360,"time":178},{"x":1023,"y":482,"time":196},{"x":808,"y":512,"time":210},{"x":1040,"y":575,"time":229},{"x":1010,"y":648,"time":247},{"x":1146,"y":605,"time":262},{"x":922,"y":536,"time":279},{"x":992,"y":553,"time":295},{"x":820,"y":537,"time":312},{"x":992,"y":531,"time":329},{"x":840,"y":188,"time":347},{"x":939,"y":301,"time":362},{"x":753,"y":537,"time":379},{"x":975,"y":526,"time":396},{"x":1090,"y":329,"time":412},{"x":904,"y":308,"time":430},{"x":824,"y":203,"time":446},{"x":700,"y":173,"time":463},{"x":921,"y":438,"time":479},{"x":1019,"y":508,"time":496},{"x":797,"y":577,"time":512},{"x":1058,"y":456,"time":528},{"x":1084,"y":470,"time":546},{"x":1005,"y":610,"time":563},{"x":892,"y":546,"time":577},{"x":934,"y":600,"time":596},{"x":728,"y":418,"time":612},{"x":812,"y":650,"time":628},{"x":1012,"y":495,"time":647},{"x":949,"y":453,"time":671},{"x":712,"y":493,"time":685},{"x":492,"y":531,"time":698},{"x":741,"y":524,"time":729},{"x":819,"y":598,"time":743},{"x":735,"y":742,"time":763},{"x":780,"y":467,"time":785},{"x":783,"y":514,"time":798},{"x":798,"y":503,"time":830},{"x":753,"y":547,"time":852},{"x":878,"y":587,"time":880},{"x":563,"y":436,"time":905},{"x":487,"y":405,"time":929},{"x":575,"y":543,"time":945},{"x":771,"y":504,"time":967},{"x":892,"y":608,"time":981},{"x":849,"y":592,"time":998},{"x":870,"y":433,"time":1021},{"x":857,"y":502,"time":1033},{"x":757,"y":420,"time":1064},{"x":973,"y":473,"time":1084},{"x":800,"y":509,"time":1098},{"x":773,"y":583,"time":1113},{"x":815,"y":484,"time":1130},{"x":555,"y":522,"time":1148},{"x":660,"y":442,"time":1168},{"x":621,"y":525,"time":1183},{"x":663,"y":503,"time":1201},{"x":469,"y":655,"time":1228},{"x":655,"y":543,"time":1241},{"x":655,"y":543,"time":1255},{"x":708,"y":503,"time":1268},{"x":658,"y":468,"time":1293},{"x":659,"y":517,"time":1307},{"x":756,"y":463,"time":1320},{"x":581,"y":523,"time":1344},{"x":536,"y":521,"time":1359},{"x":791,"y":537,"time":1374},{"x":754,"y":422,"time":1397},{"x":742,"y":135,"time":1411},{"x":806,"y":464,"time":1424},{"x":779,"y":351,"time":1458},{"x":1152,"y":437,"time":1483},{"x":661,"y":486,"time":1505},{"x":781,"y":275,"time":1519},{"x":683,"y":489,"time":1532},{"x":408,"y":198,"time":1548},{"x":491,"y":571,"time":1565},{"x":524,"y":466,"time":1583},{"x":599,"y":533,"time":1609},{"x":811,"y":590,"time":1623},{"x":755,"y":567,"time":1637},{"x":869,"y":496,"time":1650},{"x":746,"y":439,"time":1665},{"x":918,"y":291,"time":1682},{"x":836,"y":342,"time":1700},{"x":470,"y":532,"time":1714},{"x":634,"y":493,"time":1731},{"x":933,"y":424,"time":1748},{"x":643,"y":624,"time":1770},{"x":706,"y":600,"time":1785},{"x":650,"y":348,"time":1800},{"x":591,"y":536,"time":1815},{"x":996,"y":410,"time":1832},{"x":1003,"y":494,"time":1848},{"x":1037,"y":370,"time":1866},{"x":975,"y":373,"time":1882},{"x":366,"y":582,"time":1898},{"x":561,"y":500,"time":1920},{"x":630,"y":439,"time":1936},{"x":570,"y":520,"time":1951},{"x":488,"y":524,"time":1965},{"x":758,"y":494,"time":1983},{"x":820,"y":514,"time":1999},{"x":1090,"y":473,"time":2015},{"x":975,"y":374,"time":2031},{"x":825,"y":508,"time":2048},{"x":728,"y":529,"time":2064},{"x":420,"y":537,"time":2082},{"x":480,"y":474,"time":2098},{"x":558,"y":500,"time":2117},{"x":669,"y":465,"time":2139},{"x":794,"y":464,"time":2152},{"x":845,"y":436,"time":2167},{"x":845,"y":436,"time":2182},{"x":976,"y":428,"time":2198},{"x":991,"y":475,"time":2215},{"x":764,"y":573,"time":2232},{"x":768,"y":461,"time":2249},{"x":891,"y":517,"time":2265},{"x":658,"y":558,"time":2287},{"x":696,"y":665,"time":2300},{"x":547,"y":550,"time":2315},{"x":526,"y":601,"time":2331},{"x":601,"y":566,"time":2350},{"x":581,"y":568,"time":2366},{"x":1006,"y":306,"time":2381},{"x":1022,"y":319,"time":2398},{"x":858,"y":268,"time":2415},{"x":633,"y":531,"time":2440},{"x":658,"y":531,"time":2453},{"x":683,"y":581,"time":2465},{"x":610,"y":560,"time":2481},{"x":576,"y":544,"time":2498},{"x":650,"y":515,"time":2515},{"x":779,"y":546,"time":2532},{"x":681,"y":525,"time":2553},{"x":592,"y":600,"time":2567},{"x":686,"y":588,"time":2584},{"x":637,"y":564,"time":2607},{"x":751,"y":528,"time":2621},{"x":1060,"y":481,"time":2635},{"x":773,"y":429,"time":2648},{"x":799,"y":302,"time":2664},{"x":724,"y":189,"time":2681},{"x":635,"y":340,"time":2697},{"x":794,"y":374,"time":2715},{"x":738,"y":352,"time":2731},{"x":791,"y":417,"time":2748},{"x":552,"y":427,"time":2770},{"x":709,"y":382,"time":2783},{"x":611,"y":520,"time":2798},{"x":870,"y":553,"time":2815},{"x":1037,"y":460,"time":2832},{"x":789,"y":553,"time":2848},{"x":560,"y":689,"time":2865},{"x":521,"y":671,"time":2881},{"x":516,"y":681,"time":2898},{"x":842,"y":473,"time":2915},{"x":529,"y":505,"time":2937},{"x":610,"y":482,"time":2950},{"x":586,"y":500,"time":2963},{"x":504,"y":575,"time":2981},{"x":693,"y":539,"time":2997},{"x":974,"y":327,"time":3015},{"x":897,"y":318,"time":3031},{"x":617,"y":559,"time":3048},{"x":550,"y":619,"time":3064},{"x":616,"y":442,"time":3087},{"x":576,"y":603,"time":3100},{"x":576,"y":603,"time":3114},{"x":601,"y":626,"time":3132},{"x":501,"y":680,"time":3148},{"x":544,"y":642,"time":3164},{"x":601,"y":513,"time":3181},{"x":530,"y":600,"time":3198},{"x":830,"y":399,"time":3216},{"x":574,"y":566,"time":3238},{"x":751,"y":488,"time":3252},{"x":721,"y":476,"time":3265},{"x":647,"y":576,"time":3281},{"x":561,"y":593,"time":3299},{"x":877,"y":311,"time":3314},{"x":684,"y":244,"time":3331},{"x":973,"y":124,"time":3348},{"x":544,"y":416,"time":3364},{"x":619,"y":533,"time":3387},{"x":506,"y":613,"time":3400},{"x":531,"y":564,"time":3415},{"x":470,"y":655,"time":3431},{"x":417,"y":677,"time":3451},{"x":751,"y":501,"time":3465},{"x":769,"y":538,"time":3482},{"x":681,"y":545,"time":3498},{"x":686,"y":516,"time":3515},{"x":561,"y":533,"time":3531},{"x":679,"y":494,"time":3553},{"x":482,"y":500,"time":3566},{"x":536,"y":632,"time":3581},{"x":569,"y":622,"time":3598},{"x":883,"y":400,"time":3614},{"x":623,"y":448,"time":3631},{"x":967,"y":331,"time":3648},{"x":731,"y":511,"time":3664},{"x":655,"y":323,"time":3681},{"x":910,"y":426,"time":3704},{"x":957,"y":286,"time":3718},{"x":934,"y":293,"time":3731},{"x":713,"y":334,"time":3748},{"x":754,"y":458,"time":3765},{"x":575,"y":446,"time":3781},{"x":645,"y":486,"time":3799},{"x":688,"y":544,"time":3814},{"x":985,"y":485,"time":3831},{"x":849,"y":460,"time":3849},{"x":849,"y":460,"time":3865},{"x":762,"y":433,"time":3881},{"x":810,"y":556,"time":3904},{"x":693,"y":556,"time":3917},{"x":693,"y":556,"time":3932},{"x":725,"y":624,"time":3948},{"x":800,"y":583,"time":3964},{"x":838,"y":467,"time":3981},{"x":792,"y":547,"time":3998},{"x":551,"y":464,"time":4015},{"x":649,"y":421,"time":4032},{"x":640,"y":505,"time":4054},{"x":446,"y":542,"time":4070},{"x":403,"y":558,"time":4083},{"x":533,"y":483,"time":4098},{"x":678,"y":569,"time":4115},{"x":612,"y":620,"time":4131},{"x":612,"y":620,"time":4148},{"x":703,"y":505,"time":4165},{"x":719,"y":486,"time":4182},{"x":718,"y":409,"time":4198},{"x":466,"y":592,"time":4220},{"x":426,"y":634,"time":4234},{"x":450,"y":629,"time":4248},{"x":451,"y":681,"time":4265},{"x":622,"y":590,"time":4282},{"x":622,"y":590,"time":4298},{"x":752,"y":530,"time":4315},{"x":618,"y":587,"time":4331},{"x":516,"y":609,"time":4348},{"x":516,"y":609,"time":4365},{"x":680,"y":495,"time":4390},{"x":621,"y":657,"time":4403},{"x":650,"y":590,"time":4418},{"x":600,"y":561,"time":4431},{"x":775,"y":516,"time":4449},{"x":683,"y":546,"time":4466},{"x":820,"y":627,"time":4481},{"x":841,"y":543,"time":4499},{"x":787,"y":432,"time":4515},{"x":686,"y":405,"time":4531},{"x":680,"y":494,"time":4553},{"x":454,"y":536,"time":4567},{"x":667,"y":508,"time":4581},{"x":630,"y":612,"time":4599},{"x":837,"y":502,"time":4616},{"x":735,"y":614,"time":4631},{"x":932,"y":569,"time":4648},{"x":768,"y":634,"time":4665},{"x":686,"y":593,"time":4682},{"x":582,"y":511,"time":4705},{"x":579,"y":538,"time":4719},{"x":485,"y":583,"time":4733},{"x":402,"y":586,"time":4748},{"x":491,"y":601,"time":4765},{"x":491,"y":601,"time":4781},{"x":553,"y":638,"time":4798},{"x":553,"y":638,"time":4816},{"x":591,"y":549,"time":4832},{"x":701,"y":502,"time":4849},{"x":587,"y":577,"time":4864},{"x":754,"y":467,"time":4886},{"x":559,"y":499,"time":4899},{"x":538,"y":537,"time":4914},{"x":572,"y":481,"time":4931},{"x":1024,"y":296,"time":4948},{"x":959,"y":345,"time":4965},{"x":853,"y":338,"time":4982},{"x":644,"y":505,"time":4998},{"x":840,"y":491,"time":5015},{"x":663,"y":576,"time":5038},{"x":488,"y":614,"time":5051},{"x":705,"y":502,"time":5065},{"x":721,"y":453,"time":5081},{"x":571,"y":570,"time":5099},{"x":571,"y":570,"time":5115},{"x":669,"y":539,"time":5132},{"x":592,"y":575,"time":5148},{"x":715,"y":483,"time":5165},{"x":715,"y":483,"time":5182},{"x":499,"y":675,"time":5205},{"x":631,"y":583,"time":5220},{"x":686,"y":522,"time":5233},{"x":657,"y":498,"time":5248},{"x":736,"y":376,"time":5265},{"x":668,"y":404,"time":5282},{"x":534,"y":476,"time":5298},{"x":469,"y":588,"time":5315},{"x":613,"y":540,"time":5332},{"x":660,"y":698,"time":5355},{"x":761,"y":542,"time":5372},{"x":848,"y":572,"time":5385},{"x":662,"y":496,"time":5400},{"x":662,"y":496,"time":5415},{"x":844,"y":445,"time":5432},{"x":686,"y":464,"time":5449},{"x":584,"y":603,"time":5465},{"x":660,"y":571,"time":5482},{"x":644,"y":552,"time":5504},{"x":566,"y":546,"time":5518},{"x":520,"y":554,"time":5532},{"x":613,"y":498,"time":5549},{"x":543,"y":563,"time":5565},{"x":604,"y":521,"time":5582},{"x":627,"y":531,"time":5599},{"x":589,"y":524,"time":5615},{"x":592,"y":602,"time":5632},{"x":592,"y":602,"time":5648},{"x":510,"y":519,"time":5665},{"x":660,"y":473,"time":5682},{"x":660,"y":473,"time":5698},{"x":618,"y":510,"time":5716},{"x":618,"y":510,"time":5732},{"x":555,"y":549,"time":5748},{"x":539,"y":587,"time":5764},{"x":600,"y":540,"time":5781},{"x":600,"y":540,"time":5798},{"x":678,"y":495,"time":5821},{"x":422,"y":568,"time":5836},{"x":555,"y":514,"time":5849},{"x":519,"y":342,"time":5872},{"x":526,"y":292,"time":5887},{"x":578,"y":458,"time":5904},{"x":226,"y":90,"time":5926},{"x":251,"y":34,"time":5942},{"x":478,"y":319,"time":5956},{"x":333,"y":119,"time":5979},{"x":333,"y":119,"time":5998},{"x":436,"y":140,"time":6013},{"x":460,"y":178,"time":6036},{"x":460,"y":178,"time":6050},{"x":295,"y":87,"time":6065},{"x":326,"y":156,"time":6089},{"x":350,"y":94,"time":6104},{"x":326,"y":73,"time":6119},{"x":143,"y":41,"time":6151},{"x":378,"y":196,"time":6166},{"x":378,"y":196,"time":6182},{"x":259,"y":109,"time":6210},{"x":259,"y":109,"time":6252},{"x":307,"y":27,"time":6268}]
// console.log(scaleData(data, before, after))

module.exports = { mergeNArrays, pullKeyFromObjArr, findKeyAtID, isSetEqual , scaleData};
