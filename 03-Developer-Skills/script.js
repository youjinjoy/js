// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    answer += `... ${temp}C in ${i + 1} days `;
  }
  return answer + '...';
};

console.log(printForecast([17, 21, 23]));
