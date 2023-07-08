function solution(sides) {
    
    var min =  Math.abs(sides[0]- sides[1])
    var max = sides[0]+ sides[1];
    
    var range = [min+1 ,max-1]

    
    var answer = (max-1)-(min+1) +1;

    
    
    return answer;
}