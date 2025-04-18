import React, { Suspense, useState, useEffect, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/loader.jsx';
import Error_404 from './pages/error_pages/Error_404.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));

function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Simulate 5 seconds loading delay
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <BrowserRouter>
      {showApp ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/loader' element={<Loader/>}></Route>
            <Route path='**' element={<Error_404/>}></Route>
          </Routes>
        </Suspense>
      ) : (
        <Loader />
      )}
    </BrowserRouter>
  );
}

export default App;
