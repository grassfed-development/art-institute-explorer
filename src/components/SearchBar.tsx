import React, { useState } from 'react';
import '../styles/searchBar.css'

interface SearchBarProps {
    onSearch: (query: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='searchBar'
                placeholder='Search Artworks'
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button 
                type='submit'
                className='searchBar-submit'>Search
            </button>
        </form>
    )
};