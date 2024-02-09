// arr parameter of function getFrequencyMap 
// is an array of duplicate integers
// Create a Map that contains count of every number that exists in 
// the array arr and return it via function getFrequencyMap


function getFrequencyMap(arr) {
    const frequencyMap = new Map();
  
    for (const num of arr) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    return frequencyMap; 
  }
  
  
  try { module.exports = { getFrequencyMap } } catch(e) {}