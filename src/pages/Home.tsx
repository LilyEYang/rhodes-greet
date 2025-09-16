import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Rhodes Greet</h1>

            <button onClick={() => navigate('/check-in')}>Check-In</button>
        </div>
    );
};

export default Home;