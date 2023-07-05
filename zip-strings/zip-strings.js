function zipStrings(strA, strB) {
  let mergeStr = "";
  if (strB.length === 0) {
    mergeStr += strA;
    return mergeStr;
  } else if (strA.length === 0) {
    mergeStr += strB;
    return mergeStr;
  } else {
    for (let i = 0; i < strA.length + strB.length; i++) {
      if (i < strA.length) {
        mergeStr += strA[i];
      }
      if (i < strB.length) {
        mergeStr += strB[i];
      }
    }
    console.log(mergeStr);
    return mergeStr;
  }
}
