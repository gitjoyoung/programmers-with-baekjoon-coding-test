function solution(n, control) {
    const w = (control.match(/w/g) || []).length *1;
    const s = (control.match(/s/g) || []).length * -1;
    const d = (control.match(/d/g) || []).length * +10;
    const a = (control.match(/a/g) || []).length * -10;
    
    
    
    var answer = n +w +s +d+a;
    return answer;
}