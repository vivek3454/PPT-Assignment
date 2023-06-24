//* Q 1.
function twoSum(nums, target) {
    const newMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const isNumInMap = target - num;

        if (newMap.has(isNumInMap)) {
            return [newMap.get(isNumInMap), i];
        }
        newMap.set(num, i);
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);


//* Q 2
function removeElement(nums, val) {
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log("Output:", result, ", nums =", nums);


//* Q 3
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

const nums = [1, 3, 5, 6];
const target = 4;
const index = searchInsert(nums, target);
console.log(index);


//* Q 4
function plusOne(digits) {
    const n = digits.length;
    let carry = 1;

    for (let i = n - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);

        if (carry === 0) {
            return digits;
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
}

const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result);


//* Q 5
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1);
  


//* Q 6
function containsDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);


//* Q 7
function moveZerosToEnd(nums) {
    let i = 0;
    let j = 0;
    const n = nums.length;

    while (i < n) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }
}

const nums = [0, 1, 0, 3, 12];
moveZerosToEnd(nums);
console.log(nums);




//* Q 8
function findErrorNums(nums) {
    const n = nums.length;
    const set = new Set();
    let duplicate, missing;

    // Find the duplicate number
    for (const num of nums) {
        if (set.has(num)) {
            duplicate = num;
        } else {
            set.add(num);
        }
    }

    // Find the missing number
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result);

