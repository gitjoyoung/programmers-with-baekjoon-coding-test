function solution(s) {
    const stack = [];
    // 코드 이해하기
    // s의 길이만큼 순회하고
    for (let i = 0; i < s.length; i++) {
        // 스택의 최신값과 현재 s의 인덱스 값이 같으면 스택을 비워준다
        if(stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            // 그렇지 않다면 추가해줌
            stack.push(s[i]);
        }
    }
    return !stack.length ? 1 : 0;
}