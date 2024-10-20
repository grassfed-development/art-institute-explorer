import { Artwork as ArtworkType } from '../types/ArtInstituteTypes';
import React from 'react';

interface ArtworkProps {
    artwork: ArtworkType;
}

export const Artwork: React.FC<ArtworkProps> = ({ artwork }) => {
    return (
        <div className="artwork">
            <h1><b>{artwork.title}</b></h1>
            <p>Artist: {artwork.artist_title}</p>
            <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`} 
            alt={artwork.title} />
        </div>
    )
};