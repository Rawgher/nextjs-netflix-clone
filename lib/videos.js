export const getVideos = async (searchTerm) => {
    try{
        const youtubeApiKey = process.env.YOUTUBE_API_KEY;

        const baseUrl = 'https://youtube.googleapis.com/youtube/v3';
        const response = await fetch(`${baseUrl}/search?part=snippet&type=video&maxResults=25&q=${searchTerm}&key=${youtubeApiKey}`);

        const data = await response.json();

        if (data?.error) {
            console.error("API error", data.error);
            return [];
        }

        return data?.items.map((item) => {
            const id = item.id?.videoId || item.id
            return {
                title: item.snippet?.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id
            };
        });
    } catch (err) {
        console.error("Something went wrong", err);
        return [];
    }
}

export const getPopularVideos = async () => {
    try{
        const youtubeApiKey = process.env.YOUTUBE_API_KEY;
        const baseUrl = 'https://youtube.googleapis.com/youtube/v3';

        const response = await fetch(`${baseUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${youtubeApiKey}`);

        const data = await response.json();

        if (data?.error) {
            console.error("API error", data.error);
            return [];
        }

        return data?.items.map((item) => {
            const id = item.id?.videoId || item.id
            return {
                title: item.snippet?.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id
            };
        });
    } catch (err) {
        console.error("Something went wrong", err);
        return [];
    }
}