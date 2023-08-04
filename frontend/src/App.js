import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Roster from "./components/roster";
import './styles/App.css';


function App() {
  return (
    <Router> 
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/roster" element={<Roster />} />
        </Routes>
      </main>
    </div>
  </Router> 
  );
}

export default App;
