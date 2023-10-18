function solution(num_list) {
    var a =num_list.sort((a ,b) => a- b);
    console.log(a.slice(5 ,a.length))
    var answer = a.slice(5 ,a.length);
    return answer;
}