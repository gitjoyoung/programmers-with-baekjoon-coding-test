function solution(name, yearning, photo) {
    
var obj = {};

for (var i = 0; i < name.length; i++) {
obj[name[i]] = parseInt(yearning[i]);
}

var answer = photo.map(arr => arr.reduce((acc, cur) => acc + (obj[cur] || 0), 0));

return answer;
    return answer;
}