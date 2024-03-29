import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);


    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>} />
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
