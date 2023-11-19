function solution(n) {
    var answer = 0;
    var ternary  = n.toString(3).split('').reverse().join('');
    answer =parseInt(ternary ,3);
    return answer;
}