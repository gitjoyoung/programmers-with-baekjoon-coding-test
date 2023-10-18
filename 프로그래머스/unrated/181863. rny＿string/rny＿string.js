function solution(rny_string) {
    
    var a = rny_string.split('');
    var b = a.map((item)=> {if(item === 'm'){
        return 'rn'
    }else{
        return item
    } })
    var answer = b.join('');
    return answer;
}