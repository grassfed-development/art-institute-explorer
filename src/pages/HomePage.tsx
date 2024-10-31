import React, { useState } from 'react';
import { Pagination2 }     from '../components/Pagination2';
import { ArtworkList }     from '../components/ArtworkList';
import { SearchBar }       from '../components/SearchBar';
import { ApiService }      from '../services/ApiService';




const HomePage: React.FC = () => {
    const [searchResults, setSearchResults]     = useState<[]>([]);
    const [artworksPerPage]                     = useState(1);
    const [currentPage, setCurrentPage]         = useState(1);

    const paginate            = (page: number) => setCurrentPage(page);
    const indexOfLastArtwork  = currentPage * artworksPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
    const currentArtworks     = searchResults.slice(indexOfFirstArtwork, indexOfLastArtwork);




    const handleSearch = async (query: string) => {
        const results = await ApiService.searchArtworks(query);
        setSearchResults(results.data);
        setCurrentPage(1);
    };


    return (
            <div>
                <h1 className='header'>Chicago Art Institute Explorer</h1>
                <SearchBar onSearch={handleSearch}/>
                <ArtworkList artworks={currentArtworks}/>
                <Pagination2 totalPages={searchResults.length} currentPage={currentPage} 
                paginate={paginate} items={searchResults}/>
            </div>
    )
};

export default HomePage