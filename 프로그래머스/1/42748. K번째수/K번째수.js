function solution(array, commands) {
    var answer = [];
    commands.forEach((item)=>{
        let a =array.slice(item[0]-1,item[1] );
        a.sort((a,b)=> a-b)
        answer.push(a[item[2]-1])

        
    })
    return answer;
}