function solution(genres, plays) {
  const genreMap = new Map(); // 장르별 [고유번호, 재생수] 저장
  const genrePlayCount = new Map(); // 장르별 총 재생수 저장

  // 1. 장르별로 곡 정보 저장 및 총 재생수 계산
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap.has(genre)) {
      genreMap.set(genre, []);
      genrePlayCount.set(genre, 0);
    }

    genreMap.get(genre).push([i, play]);
    genrePlayCount.set(genre, genrePlayCount.get(genre) + play);
  }

  // 2. 장르별로 정렬: 많이 재생된 곡 -> 고유번호 낮은 순
  for (const [genre, songList] of genreMap.entries()) {
    songList.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]; // 재생수 내림차순
      return a[0] - b[0]; // 고유번호 오름차순
    });
  }

  // 3. 장르 정렬: 총 재생수 내림차순
  const sortedGenres = [...genrePlayCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  // 4. 최종 결과 생성
  const result = [];

  for (const genre of sortedGenres) {
    const songs = genreMap.get(genre);
    result.push(songs[0][0]);
    if (songs.length > 1) result.push(songs[1][0]);
  }

  return result;
}
