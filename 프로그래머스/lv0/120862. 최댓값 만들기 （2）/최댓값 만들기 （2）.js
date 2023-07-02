function solution(numbers) {
    var cal = numbers.sort((a ,b)=> b - a)
    

    if(cal[0] * cal[1] < cal[cal.length - 1] * cal[cal.length - 2]){
        return cal[cal.length - 1] * cal[cal.length - 2]
    }else{
        return numbers[0] * numbers[1];
    }  
    
}