import { shuffleArray } from "../functions";
import videos_data from '@/utils/videos_data.json';

export async function getYoutubeVideos_Simulated(keyword: string | null, numberOfVideos: number) {
  return shuffleArray(JSON.parse(JSON.stringify(videos_data)), numberOfVideos)
}

