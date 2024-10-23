import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Artist as ArtistType} from '../types/ArtInstituteTypes';
import { Artist } from '../components/Artist';
import { ApiService } from '../services/ApiService';

const ArtistPage: React.FC = () => {
    const [artist, setArtist] = useState<ArtistType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams<{id: string }>();

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                setLoading(true);
                const data = await ApiService.getArtist(id);
                setArtist(data.data);
        }   catch (err) {
                console.error(`Error fetching artist: ${err}`)
                setError(error);
        }   finally {
                setLoading(false);
        }
        };
        fetchArtist();
    }, [id])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching artist...</p>;
    if (!artist) return <p>No artist found</p>;
    return <Artist artist={artist}/>
};

export default ArtistPage