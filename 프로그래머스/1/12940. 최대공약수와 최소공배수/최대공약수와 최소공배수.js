function solution(n, m) {
    function gcd(a, b) {
    // 유클리드 호제법을 사용하여 최대공약수 계산
    return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
    // 최소공배수는 두 수의 곱을 최대공약수로 나눈 값
    return a * b / gcd(a, b);
}
 return [gcd(n, m), lcm(n, m)];
}
// 공부해야함