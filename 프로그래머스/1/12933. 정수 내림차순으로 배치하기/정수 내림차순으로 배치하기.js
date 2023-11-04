function solution(n) {
    var a  =String(n).split('').map((a)=> Number(a));
   var b = a.sort((a,b)=> b-a).join('');

    var answer = Number(b);
    return answer;
}