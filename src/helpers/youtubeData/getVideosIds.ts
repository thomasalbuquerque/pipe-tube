const axios = require('axios');
import { AxiosResponse } from 'axios';

//This file is not being used, but it is a good example of how to get data from the Youtube API. I used it once to get a sample of 40 videos to use in the app.

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const numberOfVideos = 4;
const keyword = 'education';
const regionCode = 'UK';
const videoCategoryId = '27';

const removeDuplicatedIds = (videoIds: string[]) => {
  const uniqueVideoIds = videoIds.filter((v, index) => {
    return videoIds.indexOf(v) === index;
  });
  return uniqueVideoIds;
}

export async function getYoutubeData() {

  const resSearch: AxiosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=${numberOfVideos}&q=${keyword}&regionCode=${regionCode}&videoCategoryId=${videoCategoryId}&key=${apiKey}`)

  const videoItems = resSearch.data.items;
  const videoIds: string[] = videoItems.map((video: {
    id: {
      videoId: string;
    };
  }) => video.id.videoId);

  const uniqueVideoIds = removeDuplicatedIds(videoIds);

  let videosObjects: Video[] = [];
  let counter = 0

  uniqueVideoIds.forEach(async (videoId: string) => {
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

    const json = JSON.stringify(videosObjects, null, 2);

    return videosObjects;
  })
}