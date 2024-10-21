import React from 'react';

interface Paginate {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
    items: []
}

export const Pagination: React.FC<Paginate> = ({ currentPage, totalPages, onPageChange, items }) => {
    if (items) {
        return (
            <div>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        );
    };
};

/* I like this method of pagination more for artworks, go next or back for the artworks. If we 
were displaying products, I think the method I used suits our application better     */