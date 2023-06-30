const NumRange  = (value) => value >0 && value <=100 ? value : null;  
function solution(num1, num2) {
    
    var answer =  Math.floor(NumRange(num1) / NumRange(num2) * 1000);
    
    return answer;
}