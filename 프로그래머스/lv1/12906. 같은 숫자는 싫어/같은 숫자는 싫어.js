function solution(arr)
{
    var answer = [];

    answer.push(arr[0]);
    
    arr.forEach((item, index) => {
        if(answer[answer.length-1] !== item){
            answer.push(item);
        } 
    } )
    
    
    return answer;
}