function solution(angle) {
    var answer = 0;
    
    if(angle > 0 && angle <= 180){
        var cal = angle / 90;
        if (cal < 1 ){
            answer = 1; 
        }else if ( cal === 1 ){
            answer = 2; 
        }else if( cal >1 && cal <2){
            answer =3;
        }else {
            answer =4;
        }
    }else {
        answer = '범위를 초과합니다'
    }
    return answer;
}