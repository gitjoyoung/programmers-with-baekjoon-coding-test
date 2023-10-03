function solution(arr, intervals) {

    var a =[...arr.slice(intervals[0][0] , intervals[0][1]+1 )];
    var b =[...arr.slice(intervals[1][0] , intervals[1][1] +1)];
    
    
    var answer = [...a,...b];
    return answer;
}