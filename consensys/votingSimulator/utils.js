module.exports = {
  rng: noOverlapRNG,
  pick: pickRandomElement
}

function noOverlapRNG(numNums, range) {
  if(numNums > range)
    throw "Cannot request more non overlapping random numbers than the range.";
  const nums = [];
  for (let i = 0; i < numNums; i++) {
    const num = Math.floor(Math.random()*range);
    if(nums.indexOf(num) == -1)
      nums.push(num);
    else
      i--;
  }
  return nums;
}

function pickRandomElement(arr) {
  return arr.length ? arr[Math.floor(Math.random() * arr.length)] : -1;
}
