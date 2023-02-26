import axios from 'axios';
const API_URL = 'https://api.genius.com';

const LyricsSong = async (query, accessToken) => {

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${API_URL}/search?q=${query}`, {
        headers,
    });

    // console.log('CONSOLE LOG', `${API_URL}/search?q=${query}`, accessToken)
    const hits = response.data.response.hits;

    if (hits.length > 0) {
        const firstHit = hits[0];
        const songId = firstHit.result.id;
        const songUrl = firstHit.result.url;

        const lyricsResponse = await axios.get(`${API_URL}/songs/${songId}/lyrics`, {
            headers,
        });
        const lyrics = lyricsResponse.data.response.lyrics;

        return { lyrics, songUrl };
    } else {
        throw new Error('No lyrics found for query');
    }
};

export default LyricsSong;