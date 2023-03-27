"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (sum, number) {
    return sum + number;
  });
  return sum / numbers.length;
};
console.log("M\xE9dia aritim\xE9tica s\xEDmples \xE9: ".concat(average(3, 6, 10, 9)));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weigth = _ref.weigth;
    return accum + number * weigth;
  }, 0);
  '';
  var weigthSum = entries.reduce(function (accum, entries) {
    return accum + entries.weigth;
  }, 0);
  return sum / weigthSum;
};
console.log("M\xE9dia ponderada: ".concat(weightedAverage({
  number: 9,
  weigth: 3
}, {
  number: 7,
  weigth: 1
}, {
  number: 10,
  weigth: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var midle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[midle];
  }
  var firstMedian = orderedNumbers[midle - 1];
  var secondMedian = orderedNumbers[midle];
  return average(firstMedian, secondMedian);
};
console.log("mediana: ".concat(median(1, 3, 5, 8, 2)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 2, 3, 4, 4, 5, 7, 675, 67, 57, 57, 5)));