import { useFavorites } from '../context/FavoritesContext';


const FavoritesPage: React.FC = () => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

  
    if (favorites.length) return (
      <div>
        {favorites.map((fav, index) => (
          <div key={index}>
              <img src={`https://www.artic.edu/iiif/2/${fav.image_id}/full/200,/0/default.jpg`} 
              alt={fav.title} key={fav.id}/> 
              <h2>Title: {fav.title}</h2><br />
              <h3>Artist: {fav.artist_title}</h3>
              <button onClick={() => removeFavorite(fav.id)}>❌</button>
          </div>
        ))}
      </div>
    );
    return <h2> No Favorites! </h2>
};

export default FavoritesPage;