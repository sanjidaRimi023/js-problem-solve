// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("problem"));
// output: melborp

// Problem 2: Count the vowels
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log("total vowel", countVowels("programminghero"));
// output: 5

// Problem 3: Check for Palindrome
function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("madam"));
// output: true
console.log(isPalindrome("hello"));
// output: false


// Problem 4: Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 4]));
// output: [1,2,3,4]

// Problem 5: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));
// output: 10

// Problem 6: Find the Maximum Number
function maxNumber(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log("largest number is", maxNumber([3, 22, 4, 6, 5, 44, 3]));
// output: 44

// Problem 7: Find Even Numbers in an Array
function evenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) evens.push(num);
  }
  return evens;
}
console.log("even num", evenNumbers([1, 2, 3, 4, 5, 6]));
// output: [2,4,6]

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("programming hero is awasome"));
// output: Programming Hero Is Awasome

// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log("factorial number is", factorial(5));
// output: 120

// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pingPong");
    } else if (i % 3 === 0) {
      console.log("ping");
    } else if (i % 5 === 0) {
      console.log("pong");
    } else {
      console.log(i);
    }
  }
}
pingPong();
