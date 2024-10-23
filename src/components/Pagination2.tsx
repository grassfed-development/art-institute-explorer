import React from 'react';
import { Paginate2 } from '../types/ArtInstituteTypes';


export const Pagination2: React.FC<Paginate2> = ({ currentPage, totalPages, paginate, items }) => {
    if (items.length > 0) {
        return (
            <div>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        );
    };
    return null
        
};

/* I like this method of pagination more for artworks, go next or back for the artworks. If we 
were displaying products, I think the method I used suits our application better     */