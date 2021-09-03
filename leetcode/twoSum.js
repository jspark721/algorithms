//given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. you may assume that each input would have exactly one solution and you may not use the same element twice

//you can return the answer in any order

//since we can't return the same element twice, it might be useful to use a hashtable

//time complxity: O(n) we want to optimize

//nums = [2,7,11,15], target = 9
//output: [0,1] because nums[0] + nums[1] == 9 (2 + 7)

const twoSum = (num, target) => {
  //always check edge case
  if (nums.length === 0) return;

  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (hash[nums[i] !== undefined]) {
      return [hash[nums[i]], i];
    }
    hash[difference] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
