function solution(myString) {
    var a = myString.toLowerCase();
    var answer =   a.replace(/a/g , 'A');
    return answer;
}