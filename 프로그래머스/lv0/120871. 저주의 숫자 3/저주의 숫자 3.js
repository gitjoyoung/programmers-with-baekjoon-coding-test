function solution(n) {
  let villageNum = 0;
  let count = 0;

  while (count < n) {
    villageNum++;

    if (villageNum % 3 === 0 || String(villageNum).includes('3')) {
      continue;
    }

    count++;
  }

  return villageNum;
}