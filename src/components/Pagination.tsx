import React from 'react';
import { Paginate } from '../types/ArtInstituteTypes';



export const Pagination: React.FC<Paginate> = ({ totalItems, itemsPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map((number) => (
                        <button onClick={() => paginate(number)} key={number}>
                            {number}
                        </button>
                ))}
            </ul>
        </nav>
    )
}