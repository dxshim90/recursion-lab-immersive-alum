// Code your solution here!// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  let strLen = string.length;

  if (strLen === 0 || strLen === 1) {
    return true;
  }
  if (string[0] === string[strLen - 1]) {
    return isPalindrome(string.slice(1, strLen - 1));
  }
  return false;
}

function addUpTo(arr, idx) {
  if (idx) {
    return arr[idx] + addUpTo(arr, --idx);
  } else {
    return arr[idx];
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return Math.max(arr.shift(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false;
  } else {
    if (arr[0] === num) {
      return true;
    } else {
      const newArr = arr.slice(1);
      return includesNumber(newArr, num);
    }
  }
}
