function solution(rank, attendance) {
    
    
   var a = attendance.reduce((acc,cur,index)=> {
       if(cur ===true){
           acc.push(rank[index])
          return acc; 
       }else{
           return acc;
       }
   },[] )
   console.log(a)
    var b =a.sort((a,b) => a-b)
    console.log(b)
    var answer = rank.indexOf(b[0]) * 10000  + rank.indexOf(b[1]) * 100 +rank.indexOf(b[2]) ;
    return answer;
}