import { useFavorites } from '../context/FavoritesContext';


const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();
    console.log(favorites);

  
    if (favorites.length){
        favorites.map((fav) => (
          <>
            <div>Artist: {fav.artist_title}</div>
            <div>Title: {fav.title}</div>
            <img src={`https://www.artic.edu/iiif/2/${fav.image_id}/full/200,/0/default.jpg`}/>
          </>
        ))
    };
    return <h2> No favorites! </h2>
};

export default FavoritesPage;