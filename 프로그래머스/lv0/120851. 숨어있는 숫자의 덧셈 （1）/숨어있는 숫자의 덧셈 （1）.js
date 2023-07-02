function solution(my_string) {
    var result = my_string.replaceAll(/[a-zA-Z]/g, '');
    var answer = Array.from(result).reduce((a,b) => a + Number(b), 0 );
    return answer;
}