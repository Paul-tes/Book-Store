import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<></>} />
        <Route path="/categories" element={<></>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
