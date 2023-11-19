function solution(a, b) {
    var answer = a.reduce((sum, current, index) => sum + current * b[index], 0);
    

    return answer;
}