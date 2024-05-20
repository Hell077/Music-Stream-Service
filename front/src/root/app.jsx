import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/mainPage';
import UnknownPage from '../pages/UnknownPage/UnknownPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<UnknownPage />} />
            </Routes>
        </BrowserRouter>

    );
}
export default App;