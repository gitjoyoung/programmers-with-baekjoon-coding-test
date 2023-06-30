const valueRange = (value) => value && value >=0 && value <= 100 ? value : null;
function solution(num1, num2) {
    var result = valueRange(num1) % valueRange(num2);
    var answer = isNaN(result) ? null : result ;
    return answer;
}