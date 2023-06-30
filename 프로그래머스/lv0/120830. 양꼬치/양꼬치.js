function solution(n, k) {
    var yang= n * 12000;
    var drink = (k - parseInt(n / 10)) * 2000;
    var answer = yang + drink;
    return answer;
}