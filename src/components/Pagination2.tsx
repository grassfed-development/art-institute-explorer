import React from 'react';

interface Paginate2 {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
    items: []
}

export const Pagination2: React.FC<Paginate2> = ({ currentPage, totalPages, onPageChange, items }) => {
    if (items.length > 0) {
        return (
            <div>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        );
    };
    return <p></p>
        
};

/* I like this method of pagination more for artworks, go next or back for the artworks. If we 
were displaying products, I think the method I used suits our application better     */