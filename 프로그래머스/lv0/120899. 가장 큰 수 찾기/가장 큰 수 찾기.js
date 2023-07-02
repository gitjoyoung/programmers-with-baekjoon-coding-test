function solution(array) {
    var ar = [...array];
    var a = ar.sort((a,b)=> b-a);
    console.log(a)
    console.log(array)
    
    var answer = [a[0] , array.indexOf(a[0])];
    return answer;
}