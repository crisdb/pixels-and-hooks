import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AsyncAwaitPlayground from './src/pages/AsyncAwaitPlayground';
import ReducerPlayground from './src/pages/ReducerPlayground';
import FactoryPlayground from './src/pages/FactoryPlayground';
import Notes from './src/pages/Notes';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ padding: '1rem' }}>
                <nav style={{ marginBottom: '1rem' }}>
                    <Link to="/" style={{ marginRight: '1rem' }}>Async/Await</Link>
                    <Link to="/reducer" style={{ marginRight: '1rem' }}>Reducer</Link>
                    <Link to="/factory" style={{ marginRight: '1rem' }}>Factory</Link>
                    <Link to="/notes">Notes</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<AsyncAwaitPlayground />} />
                    <Route path="/reducer" element={<ReducerPlayground />} />
                    <Route path="/factory" element={<FactoryPlayground />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
