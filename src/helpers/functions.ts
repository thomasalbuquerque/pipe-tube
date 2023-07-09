
export function shuffleArray(videos: Video[], limit: number) {
  const shuffledArray = [...videos];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  const randomElements = shuffledArray.slice(0, limit);
  return randomElements;
}

export function trimVideoTitle(title: string) {
  let counter = 0;
  for (let i = 0; i < title.length; i++) {
    if (title[i] === title[i].toUpperCase()) {
      counter++;
    }
  }
  if (counter > title.length / 2) {
    return title.slice(0, 37) + '...';
  } else if (title.length > 45) {
    return title.slice(0, 42) + '...';
  } else {
    return title;
  }
}

export function formatViewCount(viewCount: string) {
  return Number(viewCount).toLocaleString('pt-BR')
}

export function formatDate(date: string) {
  const dateInDateFormat = new Date(date);
  const options = {
    day: 'numeric' as const,
    month: 'long' as const,
    year: 'numeric' as const,
  };
  const finalDate = dateInDateFormat.toLocaleDateString('en-US', options);
  return finalDate;
}

