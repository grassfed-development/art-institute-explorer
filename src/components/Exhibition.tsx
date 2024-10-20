import { Exhibition as ExhibitionType } from '../types/ArtInstituteTypes';
import React from 'react';

interface ExhibitionProps{
    exhibition: ExhibitionType
}

export const Exhibition: React.FC<ExhibitionProps> = ({ exhibition }) => {
    return (
        <div>
            <h1>Welcome To The Exhibition Page</h1>
            <b><p>{exhibition.title}</p></b>
        </div>
    )
}