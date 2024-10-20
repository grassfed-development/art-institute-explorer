import React from 'react';
import { Artist } from '../types/ArtInstituteTypes';

interface ArtistListProps {
    artists: Artist[]
}

export const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
    return (
        <ul>
            {artists.map((artist) => (
                <li key={artist.id}>{artist.title}</li>
            ))}
        </ul>
    );
};