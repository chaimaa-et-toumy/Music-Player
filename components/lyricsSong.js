import axios from 'axios';
import cheerio from 'cheerio';

const API_URL = 'https://api.genius.com';

const LyricsSong = async (query, accessToken) => {

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    //return list of songs that match the query
    const response = await axios.get(`${API_URL}/search?q=${query}`, {
        headers,
    });
    const hits = response.data.response.hits;

    if (hits.length > 0) {
        const firstHit = hits[0];
        const songUrl = firstHit.result.url;
        //songUrl : site web de la chanson

        let lyrics = '';
        try {
            const response = await fetch(songUrl);
            const html = await response.text();
            const $ = cheerio.load(html); //parrse to object
            lyrics = $('#lyrics-root > div.Lyrics__Container-sc-1ynbvzw-6.YYrds').text(); //get data from div song
        } catch (error) {
            console.error(error);
        }
        return { songUrl, lyrics };
    } else {
        throw new Error('No lyrics found for query');
    }
};

export default LyricsSong;