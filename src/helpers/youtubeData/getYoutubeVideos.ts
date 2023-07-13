import axios from 'axios';
import { AxiosResponse } from 'axios';

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const removeDuplicatedIds = (videoIds: string[]) => {
  const uniqueVideoIds = videoIds.filter((v, index) => {
    return videoIds.indexOf(v) === index;
  });
  return uniqueVideoIds;
}

export async function getYoutubeVideos(keyword: string | null, numberOfVideos: number) {

  const resSearch: AxiosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=${numberOfVideos}&q=${keyword}&key=${apiKey}`)

  const videoItems = resSearch.data.items;
  const videoIds: string[] = videoItems.map((video: {
    id: {
      videoId: string;
    };
  }) => video.id.videoId);

  const uniqueVideoIds = removeDuplicatedIds(videoIds);

  let videosObjects: Video[] = [];

  for (const videoId of uniqueVideoIds) {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey}`)
    const video = response.data.items[0]

    const thumbnailUrl = video.snippet.thumbnails.high.url;
    const channelId = video.snippet.channelId;
    const videoTitle = video.snippet.title;
    const description = video.snippet.description;
    const channelName = video.snippet.channelTitle;
    const uploadDate = video.snippet.publishedAt;
    const viewCount = video.statistics.viewCount;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    const newObject: Video = {
      videoId,
      thumbnailUrl,
      channelId,
      videoTitle,
      description,
      channelName,
      viewCount,
      uploadDate,
      videoUrl
    };

    videosObjects.push(newObject);

  }
  return videosObjects;
}