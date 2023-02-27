import axios from 'axios';
import cheerio from 'cheerio';

const API_URL = 'https://api.genius.com';

const LyricsSong = async (query, accessToken) => {

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${API_URL}/search?q=${query}`, {
        headers,
    });
    const hits = response.data.response.hits;

    if (hits.length > 0) {
        const firstHit = hits[0];
        const songId = firstHit.result.id;
        const songUrl = firstHit.result.url;

        let lyrics = '';
        try {
            const response = await fetch(songUrl);
            const html = await response.text();
            const $ = cheerio.load(html);
            lyrics = $('#lyrics-root > div.Lyrics__Container-sc-1ynbvzw-6.YYrds').text();
        } catch (error) {
            console.error(error);
        }
        return { songUrl, lyrics };
    } else {
        throw new Error('No lyrics found for query');
    }
};

export default LyricsSong;