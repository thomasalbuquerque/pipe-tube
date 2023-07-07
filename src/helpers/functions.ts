export function shuffleArray(videos: Video[]) {
  const randomElements = videos.sort(() => 0.5 - Math.random()).slice(0, 30);
  return randomElements;
}