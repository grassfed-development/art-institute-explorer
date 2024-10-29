import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const HomePage       = lazy(() => import('./pages/HomePage'));
const ArtworkPage    = lazy(() => import('./pages/ArtworkPage'));
const ExhibitionPage = lazy(() => import('./pages/ExhibitionPage'));
const ArtistPage     = lazy(() => import('./pages/ArtistPage'));
const LearnReactPage = lazy(() => import('./pages/LearnReactPage'));


function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home Page</Link></li>
              <li><Link to='/artworks/130236'>Sample Artwork</Link></li>
              <li><Link to='/exhibitions/7500'>Sample Exhibition</Link></li>
              <li><Link to='/artists/5428'>Sample Artist</Link></li>
              <li><Link to='/learn'>Learn-react</Link></li>
            </ul>
          </nav> 
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/'                element={<HomePage />}/>
              <Route path='/artworks/:id'    element={<ArtworkPage />}/>
              <Route path='/exhibitions/:id' element={<ExhibitionPage />}/>
              <Route path='/artists/:id'     element={<ArtistPage />}/>
              <Route path='/learn'           element={<LearnReactPage />}/>
            </Routes>
          </Suspense >
        </div>
      </Router>
    )
}
export default App;
