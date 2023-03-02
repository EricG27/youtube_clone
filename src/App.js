import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import { Feed } from '@mui/icons-material';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';



const App = () => (
    <BrowserRouter>
        <Box sx={{ BackgroundColor: '#000'}}>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed/>} />    
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App