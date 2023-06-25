//* Q 1
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let maxSum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i];
    }

    return maxSum;
}

const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result);


// //* Q 2
function maxNumberOfDifferentCandies(candyType) {
    const uniqueCandies = new Set();

    for (let i = 0; i < candyType.length; i++) {
        uniqueCandies.add(candyType[i]);
    }

    return uniqueCandies.size;
}

const candyType = [1, 1, 2, 2, 3, 3];
const result = maxNumberOfDifferentCandies(candyType);
console.log(result);


// //* Q 3
function findLHS(nums) {
    const frequency = new Map();  
    for (let num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    let maxLen = 0;

    for (let num of frequency.keys()) {
        if (frequency.has(num + 1)) {
            maxLen = Math.max(maxLen, frequency.get(num) + frequency.get(num + 1));
        }
    }

    return maxLen;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log(result);


// //* Q 4
function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = i - 1 >= 0 ? flowerbed[i - 1] : 0;
            const next = i + 1 < flowerbed.length ? flowerbed[i + 1] : 0;

            if (prev === 0 && next === 0) {
                count++;
                flowerbed[i] = 1;
            }
        }
    }

    return count >= n;
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result);


// //* Q 5
function maximumProduct(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(product1, product2);
}

const nums = [1, 2, 3];
const result = maximumProduct(nums);
console.log(result);


// //* Q 6
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;  

    while (left <= right) { 
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result);


// //* Q 7
function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
}

const nums = [1, 2, 2, 3];
console.log(isMonotonic(nums));


// //* Q 8
function minimumScore(nums, k) {
    let minimum = Math.min(...nums);
    let maximum = Math.max(...nums);

    if (maximum - minimum <= 2 * k) {
        return 0;
    }

    minimum += k;
    maximum -= k;

    return maximum - minimum;
}

const nums = [1];
const k = 0;
console.log(minimumScore(nums, k));


