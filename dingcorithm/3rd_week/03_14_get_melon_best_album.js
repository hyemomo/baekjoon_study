//1. 많이 재생된 장르를 먼저 수록한다.
//2. 장르 내에서 많이 재생된 노래를 먼저 수록한다.
//3. 장르 내에서 재생횟수가 같다면, 고유 번호가 낮은 , 즉 인덱스가 낮은 노래 먼저 수록해줘야한다.

function main() {
  console.log("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ");
  console.log(
    getMelonBestAlbum(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500],
    ),
  );

  console.log("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ");
  console.log(
    getMelonBestAlbum(
      ["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"],
      [2000, 500, 600, 150, 800, 2500, 2000],
    ),
  );
}

function getMelonBestAlbum(genreArray, playArray) {
  const result = [];
  const genreCountMap = new Map();
  const genreMap = new Map();
  for (let i = 0; i < genreArray.length; i++) {
    let g = genreArray[i];
    let p = playArray[i];
    genreCountMap.set(g, (genreCountMap.get(g) ?? 0) + p);
    //Map(3) { 'hiphop' => 4000, 'classic' => 1450, 'pop' => 3100 }
    if (!genreMap.get(g)) genreMap.set(g, []);
    genreMap.get(g).push([i, p]);
    // Map(3) {
    // 'hiphop' => [ [ 0, 2000 ], [ 6, 2000 ] ],
    // 'classic' => [ [ 1, 500 ], [ 3, 150 ], [ 4, 800 ] ],
    // 'pop' => [ [ 2, 600 ], [ 5, 2500 ] ]
  } //정렬
  const sortedCount = [...genreCountMap.entries()].sort((a, b) => b[1] - a[1]);
  for ([genre] of sortedCount) {
    songs = genreMap.get(genre);
    songs.sort((a, b) => b[1] - a[1]);
    //songs
    // [ [ 0, 2000 ], [ 6, 2000 ] ]
    // [ [ 5, 2500 ], [ 2, 600 ] ]
    // [ [ 4, 800 ], [ 1, 500 ], [ 3, 150 ]
    result.push(songs[0][0]);
    if (songs[1]) result.push(songs[1][0]);
  }
  return result
}

// Run the main function
main();
