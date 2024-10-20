import React from 'react';
import { Artwork } from '../types/ArtInstituteTypes';

interface ArtworkListProps {
    artworks: Artwork[];
}

export const ArtworkList: React.FC<ArtworkListProps> = ({ artworks }) => {

    return (
        <div>
            <p>
                {artworks.map((artwork) => (
                    <>
                        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`} 
                        alt={artwork.title} key={artwork.id}/> 
                        <h2 key={artwork.id}>Title: {artwork.title}</h2><br />
                        <h3>Artist: {artwork.artist_title}</h3>
                    </>     
            ))}
            </p>
        </div>
    );
};