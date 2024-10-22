import axios from 'axios';

export const ApiService = {
        getArtworks: async () => {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_ARTWORK_URL}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching artworks: ${error}`);
                        throw error;
        }
        },
        getArtists: async () => {
                try {
                        const response = await axios.get(`#${process.env.REACT_APP_ARTIST_URL}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching artists: ${error}`);
                        throw error;
        }
        },
        getExhibitions: async () => {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_EXHIBITION_URL}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching exhibitions: ${error}`);
                        throw error;
        }
        },
        getArtwork: async (id: string | undefined) =>  {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_ARTWORK_URL}/${id}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching the artwork: ${error}`);
                        throw error;
        }
        },
        getArtist: async (id: string | undefined) => {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_ARTIST_URL}/${id}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching the artist: ${error}`);
                        throw error;
        }
        },
        getExhibition: async (id: string | undefined) => {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_EXHIBITION_URL}/${id}`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching the exibition: ${error}`);
                        throw error;
        }
        },
        searchArtworks: async (query: string) => {
                try {
                        const response = await axios.get(`${process.env.REACT_APP_QUERY_URL}q=${query}&fields=title,artist_title, image_id`);
                        return response.data;
        }       catch (error) {
                        console.error(`Error fetching the artworks: ${error}`);
                        throw error;
        }
        }
}