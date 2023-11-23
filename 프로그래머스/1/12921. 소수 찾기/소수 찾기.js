function solution(n) {
    let prime = new Array(n + 1).fill(true); // 모든 숫자를 소수로 가정
    prime[0] = prime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= n; j += i) {
                prime[j] = false; // i의 배수는 소수가 아님
            }
        }
    }

    // 소수의 개수를 세어 반환
    return prime.filter(val => val).length;
}