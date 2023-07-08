export function shuffleArray(videos: Video[], limit: number) {
  const shuffledArray = [...videos];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  const randomElements = shuffledArray.slice(0, limit);
  return randomElements;
}
