function findMax(nums) {
  let max = nums[0];
  for(let i=0; i<nums.length; i++){
    if(nums[i] > max) {
      max = nums[i];
    } 
  }
  return max;
}

console.log(findMax([12,42,24,64,88]));

