import React, { useState } from 'react';
import { Pagination } from '../components/Pagination';
import { ArtworkList } from '../components/ArtworkList';
import { SearchBar } from '../components/SearchBar';
import { ApiService } from '../services/ApiService';




export const HomePage: React.FC = () => {
    const [searchResults, setSearchResults]     = useState([]);
    const [artworksPerPage]                     = useState(1);
    const [currentPage, setCurrentPage]         = useState(1);

    const paginate = (number: number) => setCurrentPage(number);
    const indexOfLastArtwork  = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks     = searchResults.slice(indexOfFirstArtwork, indexOfLastArtwork);



    const handleSearch = async (query: string) => {
        const results = await ApiService.searchArtworks(query);
        setSearchResults(results.data);
    };


    return (
        <div>
            <h1>Art Institute of Chicago Explorer</h1>
            <SearchBar onSearch={handleSearch}/>
            <ArtworkList artworks={currentArtworks}/>
            <Pagination totalItems={searchResults.length} itemsPerPage={artworksPerPage} paginate={paginate}/>
        </div>
    )
}