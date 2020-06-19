function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum)
        return [];
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  };
  