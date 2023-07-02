function solution(my_string) {
    const result = my_string.replaceAll(/[A-Za-z]/g, '');
    var b = result.split('').map(Number);
    
    var answer = b.sort((a,b) => (a) - (b) );
    return answer;
}