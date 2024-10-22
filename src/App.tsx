import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArtworkPage } from './pages/ArtworkPage';
import { ExhibitionPage } from './pages/ExhibitionPage';
import { ArtistPage } from './pages/ArtistPage';


function App() {
    return (
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home Page</Link></li>
              <li><Link to='/artworks/130236'>Sample Artwork</Link></li>
              <li><Link to='/exhibitions/7500'>Sample Exhibition</Link></li>
              <li><Link to='/artists/5428'>Sample Artist</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path='/'                element={<HomePage />}/>
            <Route path='/artworks/:id'    element={<ArtworkPage />}/>
            <Route path='/exhibitions/:id' element={<ExhibitionPage />}/>
            <Route path='/artists/:id'     element={<ArtistPage />}/>
          </Routes>
        </div>
    )
}
export default App;
