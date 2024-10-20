import React from "react";
import { Exhibition } from '../types/ArtInstituteTypes';


interface ExhibitionListProps {
    exhibitions: Exhibition[]
}

export const ExhibitionList: React.FC<ExhibitionListProps> = ({ exhibitions }) => {
    return (
        <ul>
            {exhibitions.map((exhibition) => (
                <li key={exhibition.id}>{exhibition.title}</li>
            ))}
        </ul>
    );
};