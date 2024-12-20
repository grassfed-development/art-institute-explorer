import React from 'react';
import { Artwork } from '../types/ArtInstituteTypes';
import { useFavorites } from '../context/FavoritesContext';

interface ArtworkListProps {
    artworks: Artwork[];
}

export const ArtworkList: React.FC<ArtworkListProps> = ({ artworks }) => {
    const { addFavorite } = useFavorites();
    
    return (
            <div>
                {artworks.map((artwork) => (
                    <div>
                        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`} 
                        alt={artwork.title} key={artwork.id}/> 
                        <h2>Title: {artwork.title}</h2><br />
                        <h3>Artist: {artwork.artist_title}</h3>
                        <button onClick={() => addFavorite(artwork)}>💟</button>
                    </div>     
                ))}
            </div>
    );
};