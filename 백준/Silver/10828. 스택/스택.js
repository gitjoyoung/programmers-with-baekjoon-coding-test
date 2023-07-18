function Stack() {
    this.stack = [];
  
    this.push = function (x) {
      this.stack.push(x);
    };
  
    this.pop = function () {
      if (this.stack.length === 0) {
        return -1;
      } else {
        return this.stack.pop();
      }
    };
  
    this.size = function () {
      return this.stack.length;
    };
  
    this.empty = function () {
      return this.stack.length === 0 ? 1 : 0;
    };
  
    this.top = function () {
      if (this.stack.length === 0) {
        return -1;
      } else {
        return this.stack[this.stack.length - 1];
      }
    };
  }
  
  function processCommands(commands) {
    const stack = new Stack();
    const output = [];
  
    for (let i = 1; i < commands.length; i++) {
      const command = commands[i].split(" ");
  
      switch (command[0]) {
        case "push":
          stack.push(Number(command[1]));
          break;
        case "pop":
          output.push(stack.pop());
          break;
        case "size":
          output.push(stack.size());
          break;
        case "empty":
          output.push(stack.empty());
          break;
        case "top":
          output.push(stack.top());
          break;
        default:
          break;
      }
    }
  
    return output;
  }
  
  const commands = [
    "14",
    "push 1",
    "push 2",
    "top",
    "size",
    "empty",
    "pop",
    "pop",
    "pop",
    "size",
    "empty",
    "pop",
    "push 3",
    "empty",
    "top",
  ];
  const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  const result = processCommands(array);
  console.log(result.join("\n"));