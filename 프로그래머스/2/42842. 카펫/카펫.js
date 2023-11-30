function solution(brown, yellow) {
    var answer = [];
    const sum = brown + yellow
    for (var y = 3; y <= sum / y; y++) {
        var x = Math.floor(sum/y);
        if( (x-2)*(y-2)=== yellow) {
            break;
        }
    }
 
    return [x,y]; 
}