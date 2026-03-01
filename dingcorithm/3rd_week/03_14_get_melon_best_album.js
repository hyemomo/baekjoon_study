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
  const genreMap = new Map();
  for (let i = 0; i < genreArray.length; i++) {
    let g = genreArray[i];
    let p = playArray[i];
    if (!genreMap.has(g)) genreMap.set(g, []);
    genreMap.get(g).push({ idx: i, play: p });
  }
  genreMap.entries()
  console.log(genreMap)
}

// Run the main function
main();
