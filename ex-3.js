function singleNumber(nums) {
  let count = {};
  for (let i of nums) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }
  for (let i in count) {
    if (count[i] === 1) {
      return Number(i);
    }
  }
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
