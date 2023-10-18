function solution(my_string, alp) {
    var answer = my_string.replace(new RegExp(alp ,'g') , alp.toUpperCase());
    return answer;
}