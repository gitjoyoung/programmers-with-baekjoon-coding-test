function solution(my_string, indices) {
    var answer = my_string.split('');

    indices.forEach((i) => { answer[i] = 1 })
    console.log(answer.join('').replaceAll(1 , ''))
    return answer.join('').replaceAll(1 , '');
}