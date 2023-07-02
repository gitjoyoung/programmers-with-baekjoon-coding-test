function solution(my_string) {
  var answer = Array.from(my_string)
    .map((char) => (String.fromCharCode(char.charCodeAt(0) ^ 32)))
    .join("");
    return answer;
}