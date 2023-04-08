let countBits = function (n) {
  let binarySequence = "";
  binarySequence = n.toString(2);

  let numOfOnes = binarySequence
    .split("")
    .map((num) => parseInt(num))
    .filter((num) => num === 1).length;

  console.log(binarySequence, numOfOnes);
};
countBits(7);

function digPow(n, p) {
  let sumOfPowers = n
    .toString()
    .split("")
    .reduce((acc, cur, i) => acc + Math.pow(cur, p + i), 0);
  let result = sumOfPowers / n;

  return result % 1 === 0 ? result : -1;
}
console.log(digPow(46288, 3));

function longest(s1, s2) {
  // your code
  const set = new Set(s1.concat(s2).split("").sort());
  return Array.from(set).join("");
}
console.log(longest("aretheyhere", "yestheyarehere"));

function findEvenIndex(arr) {
  let results = [];

  if (arr.length === 1) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let rightSide = arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0);
    let leftSide = arr.slice(0, i).reduce((acc, cur) => acc + cur, 0);

    if (leftSide === rightSide) {
      results.push(i);
    }
  }

  if (results.length === 0) {
    return -1;
  }

  return results[0];
}
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

function digitalRoot(n) {
  let root = n;
  const calcRoot = (val) =>
    val
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);

  while (root >= 10) {
    root = calcRoot(root);
  }

  return root;
}

const maxSequence = function (arr) {
  if (arr.length === 0 || arr.every((x) => x <= 0) || arr.length === 1) {
    return 0;
  }

  let answer = 0;

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let tempArr = arr.slice(j, j + i);
      console.log(tempArr);
      let curSum = tempArr.reduce((a, b) => a + b);
      answer = curSum > answer ? curSum : answer;
    }
  }

  return answer;
};
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);

function findOutlier(integers) {
  let evenCounter = 0;
  let oddCounter = 0;
  let answer = 0;

  integers.forEach((x) => {
    x % 2 == 0 ? evenCounter++ : oddCounter++;
  });

  if (evenCounter == 1) {
    answer = integers.filter((x) => x % 2 == 0);
  } else if (oddCounter == 1) {
    answer = integers.filter((x) => x % 2 != 0);
  }

  return parseInt(answer);
}
console.log(findOutlier([2, 6, 8, 10, 3]));

function expandedForm(num) {
  const numArr = String(num).split("");
  const numbers = numArr
    .map((val, ind) => {
      return val * Math.pow(10, numArr.length - (ind + 1));
    })
    .filter((x) => x != 0);
  return numbers.join(" + ");
}
console.log(expandedForm(70304));

function moveZeros(arr) {
  let zeros = arr.filter((x) => x === 0);
  return arr.filter((x) => x !== 0).concat(zeros);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function humanReadable(seconds) {
  let secs = seconds % 60;
  let hrs = Math.floor(seconds / 3600);
  let mins = (seconds - (hrs * 3600 + secs)) / 60;

  console.log(hrs, mins, secs);

  return `${String(hrs).padStart("2", 0)}:${String(mins).padStart(
    "2",
    0
  )}:${String(secs).padStart("2", 0)}`;
}
console.log(humanReadable(60));

function narcissistic(value) {
  return String(value)
    .split("")
    .map((x, i, arr) => {
      return Math.pow(x, arr.length);
    })
    .reduce((acc, cur) => acc + cur) === value
    ? true
    : false;
}
console.log(narcissistic(7));

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = text.match(/[A-Za-z]/gi);
  return Array.isArray(arr)
    ? arr.map((x) => alphabet.indexOf(x.toLowerCase()) + 1).join(" ")
    : "";
}
console.log(alphabetPosition("=#958:."));

function duplicateEncode(word) {
  const wordArray = word
    .toLowerCase()
    .split("")
    .map((x) => {
      let regex = new RegExp("[" + x + "]", "gi");
      return word.match(regex).length > 1 ? ")" : "(";
    })
    .join("");

  return wordArray;
}
console.log(duplicateEncode("Supralapsarian"));

function solution(list) {
  let tempArr = [];
  let arr = [];

  // Create an array of consecutive number arrays
  list.forEach((x, i) => {
    if (x + 1 == list[i + 1]) {
      tempArr.push(x);
    } else {
      arr.push(tempArr);
      tempArr = [];
    }
  });

  // Add one more consecutive number onto end of each array, since it doesnt get caught in the first analysis
  arr.map((x) => x.push(x[x.length - 1] + 1));

  // filter out only arrays with 3 or more consecutive numbers
  let consecNums = arr.map((x) => x).filter((x) => x.length >= 3);
  // Create a string of the list
  let unconsecNums = list.map((x) => x).toString();

  // If each consectuive number array (converted to a string) matches its location in the list, replace it with the range
  consecNums.forEach((x) => {
    if (unconsecNums.match(x.toString())) {
      unconsecNums = unconsecNums.replace(
        x.toString(),
        `${x[0]}-${x[x.length - 1]}`
      );
    }
  });

  return unconsecNums;
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
