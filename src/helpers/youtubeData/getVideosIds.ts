
// import dotenv from "dotenv"
// dotenv.config()
const axios = require('axios');
import { AxiosResponse } from 'axios';

//This file is not being used, but it is a good example of how to get data from the Youtube API. I used it once to get a sample of 40 videos to use in the app.

// YouTube API key
const apiKey = 'AIzaSyCEe-dSAUWlLa8xFI1USLiONW-OseBt1Ws'; /////BUGGGG

const numberOfVideos = 50;

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

  const res: AxiosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=${numberOfVideos}&q=${keyword}&regionCode=${regionCode}&videoCategoryId=${videoCategoryId}&key=${apiKey}`)
  console.log('res.data')
  console.log(res.data)
  const videoItems = res.data.items;
  console.log('videoItems')
  console.log(videoItems)
  const videoIds = videoItems.map((video: {
    id: {
      videoId: any;
    };
  }) => video.id.videoId);

  console.log('videoIds')
  console.log(videoIds)
  const uniqueVideoIds = removeDuplicatedIds(videoIds);
  console.log('uniqueVideoIds')
  console.log(uniqueVideoIds)

  let videosObjects: { thumbnailUrl: any; channelProfilePicUrl: any; videoTitle: any; channelName: any; viewCount: any; uploadDate: any; videoUrl: string; }[] = [];
  let counter = 0

  videoIds.forEach(async (videoId: any) => {
    const res2 = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey}`)
    const video = res2.data.items[0]
    console.log('video')
    console.log(video)
    const snippet = video.snippet;
    console.log('snippet')
    console.log(snippet)
    const statistics = video.statistics;
    const viewCount = statistics.viewCount;
    const thumbnailUrl = snippet.thumbnails.high.url;
    const channelProfilePicUrl = snippet.channelTitle;
    const videoTitle = snippet.title;
    const channelName = snippet.channelTitle;
    const uploadDate = snippet.publishedAt;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const videoObject = {
      videoId,
      thumbnailUrl,
      channelProfilePicUrl,
      videoTitle,
      channelName,
      viewCount,
      uploadDate,
      videoUrl
    };
    console.log(`videoObject ${counter++}`);
    console.log(videoObject);
    videosObjects.push(videoObject);
    console.log('videosObjects')
    console.log(videosObjects)
    return videosObjects;
  })
}