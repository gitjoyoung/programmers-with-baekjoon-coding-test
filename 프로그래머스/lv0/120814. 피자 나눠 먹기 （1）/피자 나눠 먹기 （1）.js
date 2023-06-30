function solution(n) {
    var answer = 0;
    var pizza = 1;
    while (true){
        if(((pizza *7) / n) >= 1){
           break;
        }else{
        pizza += 1;
        }
            
    }        
    answer = pizza;
    
    return answer;
}