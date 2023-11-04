function solution(x) {
    var answer = true;
    var a = String(x).split('');
    var b = a.reduce((a,c)=> a + Number(c),0);
    if(x% b ===0){
        return true;
    }else{
        return false
    }
    
    return answer;
}