function solution(a, d, included) {
    
    var cal = included.reduce((acc ,cur ,index) => cur=== true ? ((index * d) + a ) +acc: acc , 0 )
    var answer = cal;
    console.log(cal)
    return answer;
}