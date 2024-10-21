import React from 'react';

interface Paginate {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
}

export const Paginate: React.FC<Paginate> = ({ currentPage, totalPages, onPageChange }) => {
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