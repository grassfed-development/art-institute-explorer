import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Artwork } from '../components/Artwork';
import { Artwork as ArtworkType } from '../types/ArtInstituteTypes';
import { ApiService } from '../services/ApiService';



export const ArtworkPage: React.FC = () => {
    const [artwork, setArtwork] = useState<ArtworkType | null>();
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState<string | null>(null);
    const { id }                = useParams<{id: string}>();

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                setLoading(true);
                const data = await ApiService.getArtwork(id);
                setArtwork(data.data)
        }   catch (err) {
                setError('Error fetching artworks')
        }   finally {
                setLoading(false);
            }
        };
        fetchArtwork();
    }, [id])

    if (loading)  return <div>Loading...</div>;
    if (error)    return <div>Error: {error}</div>;
    if (!artwork) return <div>No artworks found</div>;
    return <Artwork artwork={artwork}/>
}
