function solution(wallpaper) {
    
    var a =wallpaper.map((item , index) => item.includes("#") ?  [index ,item.indexOf("#"), item.lastIndexOf("#")] :null )

    var filterA = a.filter((item) => item !== null )
    
    var 시작 = filterA.map((item) => item[1])
    
    var 끝 = filterA.map((item) => item[2])
    
        
    
    
    var answer = [filterA[0][0] , Math.min(...시작) ,filterA[filterA.length -1][0] +1 ,  Math.max(...끝)+1 ];
    return answer;
}