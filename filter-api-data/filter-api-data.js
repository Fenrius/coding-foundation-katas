function filterApiData(apiData, mandatoryKeys) {
  let filteredArr = [];
  apiData.forEach((entry) => {
    let hitCount = 0;
    for (const key in entry) {
      if (mandatoryKeys.includes(key)) {
        hitCount++;
      }
    }
    if (hitCount === mandatoryKeys.length) {
      filteredArr.push(entry);
    }
  });
  return filteredArr;
  // Array als Endlösung
}
