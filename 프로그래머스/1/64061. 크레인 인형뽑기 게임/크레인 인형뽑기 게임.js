function solution(board, moves) {
    var answer = 0;
    const stack = [];

    moves.forEach((colIndex) => {
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][colIndex - 1]; // 1부터 시작하는 인덱스를 0부터 시작하는 인덱스로 변경
            if (doll !== 0) { // 0이 아닌 경우에만 뽑음
                board[row][colIndex - 1] = 0; // 뽑은 위치의 값을 0으로 변경 (뽑았음을 표시)
                if (stack.length >= 1 && stack[stack.length - 1] === doll) { // 스택의 마지막 요소와 뽑은 인형이 같은 경우
                    stack.pop(); // 스택에서 마지막 요소 제거
                    answer += 2; // 터뜨린 인형 개수 증가
                } else {
                    stack.push(doll); // 스택에 뽑은 인형 추가
                }
                break; // 해당 열에서 인형을 한 번만 뽑아야 하므로 break
            }
        }
    });

    return answer;
}
