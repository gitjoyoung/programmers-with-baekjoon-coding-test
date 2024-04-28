function solution(clothes) {
    const clothesMap = new Map()
    
    for(let [name , type] of clothes){
        if (clothesMap.has(type)) {
            clothesMap.set(type, clothesMap.get(type) + 1);
        } else {
            clothesMap.set(type, 1);
        }

    }
    var answer = 1;
    
    for( let count of clothesMap.values()){
        answer  *=  count +1
    }
     
    return answer-1;
}