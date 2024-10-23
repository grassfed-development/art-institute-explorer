import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const HomePage       = lazy(() => import('./pages/HomePage'));
const ArtworkPage    = lazy(() => import('./pages/ArtworkPage'));
const ExhibitionPage = lazy(() => import('./pages/ExhibitionPage'));
const ArtistPage     = lazy(() => import('./pages/ArtistPage'));


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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/'                element={<HomePage />}/>
              <Route path='/artworks/:id'    element={<ArtworkPage />}/>
              <Route path='/exhibitions/:id' element={<ExhibitionPage />}/>
              <Route path='/artists/:id'     element={<ArtistPage />}/>
            </Routes>
          </Suspense >
        </div>
    )
}
export default App;
