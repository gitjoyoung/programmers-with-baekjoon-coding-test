const test = (value) => value && value <= 50000 &&  value>=-50000 ? value : null; 
function solution(num1, num2) {  
    var result = test(num1) - test(num2);
    var answer = isNaN(result) ? null : result
    return answer;
}