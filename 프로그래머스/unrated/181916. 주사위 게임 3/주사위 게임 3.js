function solution(a, b, c, d) {
    var array = [a,b,c,d];
    var setArray = Array.from(new Set(array));
    var SetArrayLength = setArray.length;
    var answer = 0;
  
    
    if(SetArrayLength === 1){
        answer = Number(array.join(''))
    }else if(SetArrayLength === 2
    ){
        var a =0;
        var b =0;
        array.forEach((item) => { if(setArray[0] === item){
            a++;
        }  })
        array.forEach((item) => { if(setArray[1] === item){
            b++;
        }  })
        if(a === 3){
            answer = setArray[0] * 10 + setArray[1] 
            answer = answer * answer
        }else if(b===3){
          answer = setArray[1] * 10 + setArray[0] 
            answer = answer * answer
        }else{
            answer = (setArray[1] + setArray[0]) *  Math.abs( setArray[1] - setArray[0])
        }
     
        
    }else if(SetArrayLength === 3
    ){
        let ArrayObject = {}
        let sum = [];
        let dup = 0;
        answer =1;
        for ( const item of array){
            if( ArrayObject[item]){
                dup =item;
            }else{
                ArrayObject[item] = true;
                answer = answer * item;
            }
           
        }
        answer = answer / dup;
        
    }else if(SetArrayLength ===4){
        answer = Math.min(...array)
    }
    return answer;
}