import { Artist as ArtistType } from '../types/ArtInstituteTypes';
import React from 'react';

interface ArtistProps {
    artist: ArtistType
}


export const Artist: React.FC<ArtistProps> = ({ artist }) => {
    return (
        <div>
            <h1>Welcome To The Artist Page</h1>
            <p><b>Artist:</b> {artist.title}</p>
        </div>
    )
}