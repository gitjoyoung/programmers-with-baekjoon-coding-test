function solution(my_string) {
    var my_split =new Set(my_string.split(""))
    
    console.log(my_split)

    var answer = Array.from(my_split).join('');
    return answer;
}