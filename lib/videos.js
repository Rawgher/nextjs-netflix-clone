export const getVideos = async () => {

    const youtubeApiKey = process.env.YOUTUBE_API_KEY

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=netflix%20trailers&key=${youtubeApiKey}`);

    const data = await response.json();

    return data?.items.map((item) => {
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId || item.id
        };
    });
}