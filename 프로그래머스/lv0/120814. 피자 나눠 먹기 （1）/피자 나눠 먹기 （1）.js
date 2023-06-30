function solution(n) {
    var answer = 1;
    while (true){
        if(((answer *7) / n) >= 1){
           break;
        }else{
        answer += 1;
        }
            
    }
        
    
    return answer;
}