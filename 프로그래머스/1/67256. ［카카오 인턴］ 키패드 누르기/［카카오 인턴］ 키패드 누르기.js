function solution(numbers, hand) {
    // gpt 가 품
    // 초기 키 세팅
    const keypad = {1: [0, 0], 2: [0, 1], 3: [0, 2],
                    4: [1, 0], 5: [1, 1], 6: [1, 2],
                    7: [2, 0], 8: [2, 1], 9: [2, 2],
                    '*': [3, 0], 0: [3, 1], '#': [3, 2]};
    
    // 시작 위치
    let leftHand = '*';
    let rightHand = '#';
    let result = "";

    // 멘하탄 거리 계산공식
    // 격자 형태의 경로의 두점의 이동 좌표 차이
    // 즉 대각선으로 이동 할 수 없는 조건
    function getDistance(from, to) {
        return Math.abs(keypad[from][0] - keypad[to][0]) + Math.abs(keypad[from][1] - keypad[to][1]);
    }

    // 배열을 순회
    for (const num of numbers) {
        // 왼손 규칙
        if ([1, 4, 7].includes(num)) {
            result += 'L';
            leftHand = num;
        } 
        // 오른손 규칙
        else if ([3, 6, 9].includes(num)) {
            result += 'R';
            rightHand = num;
        } 
        else {
            // 절대값
            const leftDistance = getDistance(leftHand, num);
            const rightDistance = getDistance(rightHand, num);

            // 왼손기준으로 거리가 짧거나, 양손에 위치가 동일한데 왼손잡이이거나 
            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                result += 'L';
                leftHand = num;
            } 
            // 그렇지 않다면 오른쪽
            else {
                result += 'R';
                rightHand = num;
            }
        }
    }

    return result;
}
