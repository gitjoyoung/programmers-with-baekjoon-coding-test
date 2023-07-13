function solution(num, n) {
    var bool = (num % n === 0);
    var answer = bool ? 1 : 0;
    return answer;
}