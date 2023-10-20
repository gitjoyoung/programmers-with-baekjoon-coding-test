function solution(strArr) {
    var a =strArr.reduce((acc,cur,idx)=> {
                  if(cur.includes('ad')){
        return acc;
    }
    return acc.concat([cur]);
                  },[])
                  console.log(a)
    var answer = a;
    return answer;
}