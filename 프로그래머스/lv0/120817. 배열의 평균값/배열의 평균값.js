function solution(numbers) {
      var initialValue = 0;
      var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
      var answer = sum / numbers.length;
  return answer;
}