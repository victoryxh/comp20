'use strict';

const isFactor = (num, test) => {
  if (test % num == 0) {
    return true;
  }
  return false;
}

const showFactors = (factors) => {
  for (let num of factors) {
    document.write(`${num} `);
  }
}

const addFactors = (factors) => {
  let counter = 0;
  for (let num of factors) {
    counter += num;
  }
  return counter;
}

const getFactors = (num) => {
  const factors = [];
  for (let i = 1; i < num; i++) {
    if (isFactor(i, num)) {
      factors.push(i);
    }
  }
  return factors;
}

const isAmicable = () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  if (addFactors(getFactors(num1)) == num2 && addFactors(getFactors(num2)) == num1) {
    alert(`The numbers are amicable\n
           The factors of ${num1} are ${getFactors(num1)}\n
           The factors of ${num2} are ${getFactors(num2)}`);
  } else {
    alert(`The numbers are not amicable\n
           The factors of ${num1} are ${getFactors(num1)}\n
           The factors of ${num2} are ${getFactors(num2)}`);
  }
}

document.getElementById('btn').addEventListener('click', isAmicable);
