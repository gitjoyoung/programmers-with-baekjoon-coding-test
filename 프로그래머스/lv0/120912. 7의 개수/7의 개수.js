function solution(array) {
  var answer = array.reduce((acc, curr) => {
    return acc + (curr.toString().match(/7/g) || []).length
  }, 0);
  console.log(answer);
  return answer;
}

