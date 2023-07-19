let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let len = input[0]
input.shift()
var answer = []
for (let i = 0; i < len; i++) {
  answer.push(isVPS(input[i]))
  
}
console.log(answer.join('\n'))
function isVPS(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return "NO";
      }
    }
    
  }

  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
