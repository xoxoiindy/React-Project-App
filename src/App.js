import CampsitesList from './features/campsites/CampsitesList.js';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <div >
            <Header/>
                <CampsitesList campsite={[]} />
            <Footer/>
        </div>
    );
}

export default App;