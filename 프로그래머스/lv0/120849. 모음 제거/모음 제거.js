function solution(my_string) {
    var moum = ['a', 'e', 'i', 'o', 'u'];
    
   var answer = Array.from(my_string).filter(el => !moum.includes(el)).join('');
    return answer;
}