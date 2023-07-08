function solution(id_pw, db) {
    var answer = '';
    var dbId = db.map(a=> a[0])
    var dbPw = db.map(a=> a[1])
    
    
    if(dbId.includes(id_pw[0])){
        answer = "wrong pw"
        var num = dbId.indexOf(id_pw[0]);
        console.log(num)
        if(dbPw[num] === id_pw[1]){
            answer ="login"
        }
    }else{
        answer = "fail"
    }
    return answer;
}