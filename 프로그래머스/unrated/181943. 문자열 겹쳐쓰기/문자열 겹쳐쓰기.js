function solution(my_string, overwrite_string, s) {
    var a = my_string.slice(0 ,s )
    var ab = my_string.slice(s,overwrite_string.length+s )
    var b = my_string.slice(overwrite_string.length+s ,my_string.length)
    
    var answer = a+overwrite_string+b
    console.log(my_string)
    
    return answer;
}