import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Ecommerce from './Components/Ecommerce';
import IssuesTracker from './Components/IssuesTracker';
import Meditation from './Components/Meditation';
import RockPaperScissors from './Components/RockPaperScissors';
import SimpleClock from './Components/SimpleClock';
import TicTacToe from './Components/TicTacToe';
import LoginPage from './Components/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import Rocket from './Components/Rocket';
import './App.css';


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/ecommerce" element={<ProtectedRoute element={<Ecommerce />} />} />
            <Route path="/rocket" element={<ProtectedRoute element={<Rocket />} />} />
            <Route path="/issues-tracker" element={<ProtectedRoute element={<IssuesTracker />} />} />
            <Route path="/meditation" element={<ProtectedRoute element={<Meditation />} />} />
            <Route path="/rock-paper-scissors" element={<ProtectedRoute element={<RockPaperScissors />} />} />
            <Route path="/simple-clock" element={<ProtectedRoute element={<SimpleClock />} />} />
            <Route path="/tic-tac-toe" element={<ProtectedRoute element={<TicTacToe />} />} />
        </Routes>
    </BrowserRouter>
);

export default App;
