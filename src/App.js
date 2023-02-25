import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Nav />
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/ticket' element={<TicketPage />} />
      <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
