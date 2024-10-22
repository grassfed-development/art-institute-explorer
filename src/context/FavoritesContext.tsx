import React, { useState, useContext, createContext, ReactNode } from 'react';
import { Artwork } from '../types/ArtInstituteTypes';

interface FavoritesContextTypes {
    favorites: Artwork[],
    addFavorite: (artwork: Artwork) => void,
    removeFavorite: (artworkId: number) => void
}
interface FavoritesProviderType {
    children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextTypes | undefined>(undefined);

export const FavoritesProvider: React.FC<FavoritesProviderType> = ({ children }) => {
    const [favorites, setFavorites] = useState<Artwork[]>([]);

    const addFavorite = (artwork: Artwork) => {
        setFavorites((prev) => [...prev, artwork]);
    };

    const removeFavorite = (artworkId: number) => {
        setFavorites((prev) => prev.filter((art) => art.id !== artworkId));
    };

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error ('useFavorites must be within FavoritesProvider');
    };
    return context;
};
