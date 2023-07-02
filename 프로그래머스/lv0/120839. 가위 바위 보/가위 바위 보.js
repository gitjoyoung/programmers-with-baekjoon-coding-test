function solution(rsp) {
  var answer = Array.from(rsp).map((char) =>{
    switch (char) {
      case "2":
        return "0";
      case "0":
        return "5";
      case "5":
        return "2";
  
    }
  }).join("");

    
    return answer;
}