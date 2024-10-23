import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Exhibition } from '../components/Exhibition';
import { Exhibition as ExhibitionType} from '../types/ArtInstituteTypes';
import { ApiService } from '../services/ApiService';


const ExhibitionPage: React.FC = () => {
    const [exhibition, setExhibition] = useState<ExhibitionType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{id: string}>();

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                setLoading(true);
                const data = await ApiService.getExhibition(id);
                setExhibition(data.data)
        }   catch (err) {
                console.error(`Error fetching exhibition: ${err}`);
                setError(error);
        }   finally {
                setLoading(false);
        }
    };
        fetchExhibition()
    }, [id]);


    if (loading)     return <div>Loading...</div>;
    if (error)       return <div>Error fetching exhibition</div>;
    if (!exhibition) return <div>No exhibition found</div>;
    return <Exhibition exhibition={exhibition}/>
};

export default ExhibitionPage;