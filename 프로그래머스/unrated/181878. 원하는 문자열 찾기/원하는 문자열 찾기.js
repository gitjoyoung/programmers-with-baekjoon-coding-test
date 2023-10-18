function solution(myString, pat) {
    
    var a = myString.toLowerCase();
    var b = pat.toLowerCase();
    var c = a.includes(b)
    
    if(c){
        return 1;
    }else{
        return 0;
    }
 
    var answer = 0;
    return answer;
}