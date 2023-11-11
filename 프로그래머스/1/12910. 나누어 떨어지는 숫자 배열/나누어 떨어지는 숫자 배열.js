function solution(arr, divisor) {
    var answer = [];
    arr.forEach((item)=>{
        if(item % divisor ===0){
            answer.push(item);
        }
    })
    if(answer.length === 0){
answer.push(-1)}
    answer.sort((a,b)=> a-b)
    return answer;
}