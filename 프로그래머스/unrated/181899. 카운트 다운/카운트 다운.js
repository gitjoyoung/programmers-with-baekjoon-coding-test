function solution(start, end_num) {
    var length = start - end_num ;
    var answer =[];
    for(var i =0; i < length+1 ; i++){
        answer.push(start - i)
    }

    return answer;
}