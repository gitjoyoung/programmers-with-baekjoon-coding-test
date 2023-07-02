function solution(balls, share) {
  // n개 중 r개를 선택하는 조합의 수를 계산하는 함수
  function combination(n, r) {
    // nCr = n! / (r! * (n-r)!)
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < r; i++) {
      numerator *= (n - i);
      denominator *= (r - i);
    }
    return numerator / denominator;
  }

  return combination(balls, share);
  return answer;
}

