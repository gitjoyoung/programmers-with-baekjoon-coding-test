function solution(my_string, n) {
    
    var answer = Array.from(my_string).map((item)=> item.repeat(n)).join('');;
    return answer;
}