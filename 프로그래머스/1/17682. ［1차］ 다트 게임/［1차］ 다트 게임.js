// function solution(dartResult) {
//     var answer = 0;
//   const regex = /(\d+[SDT][*#]?)/g;
//     const parts = dartResult.match(regex);
//     var a = parts.reduce((acc, cur)=> {
//         cal = cur.replace('*' , '*2').replace('S', '').replace('D', '**2')
//                   .replace('T', '**3').replace().replace('#','*(-1)');
      
//         if(cur.includes('*')){
//             return acc * 2 + eval(cal)
            
//         }
//         return acc + eval(cal)

//     } , 0)
//     return a;
// }

function solution(dartResult) {
    // 다트 게임의 각 점수를 분리하는 정규 표현식
    const regex = /(\d+)([SDT])([*#]?)/g;
    const scores = [];
    let match;

    // 각 점수를 처리
    while ((match = regex.exec(dartResult)) !== null) {
        let [_, score, bonus, option] = match;
        score = parseInt(score);

        // 보너스 계산
        if (bonus === 'D') score = Math.pow(score, 2);
        if (bonus === 'T') score = Math.pow(score, 3);

        // 옵션 처리
        if (option === '*') {
            score *= 2;
            if (scores.length > 0) { // 이전 점수도 2배
                scores[scores.length - 1] *= 2;
            }
        } else if (option === '#') {
            score *= -1;
        }

        scores.push(score);
    }

    // 총점 계산
    return scores.reduce((acc, cur) => acc + cur, 0);
}
