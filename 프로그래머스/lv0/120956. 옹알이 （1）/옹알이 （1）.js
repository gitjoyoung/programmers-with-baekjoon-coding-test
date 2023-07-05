function solution(babbling) {
    var ong = ["aya", "ye", "woo", "ma" ]
    var count =0;
    
   for(var i =0 ; i < babbling.length ; i++){
    var b = babbling[i];
     var blen = b.length;
       if(b === ong[0] | b=== ong[2] | b === ong[1] | b=== ong[3] ){
           count +=1
       }else{
           var num = 0;
           for(var j =0; j < ong.length ; j++){
               var Bmatch =  b.match(ong[j]);
               if(Bmatch >1){
                   break;
               }else if(Bmatch !== null ){
                   num += ong[j].length;
                   if(num === blen){
                       count+=1
                   }
               }
               
           }
           
           
       }
      
 
       
    }
    
  
    
    var answer = count;
    return answer;
}