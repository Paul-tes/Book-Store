import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<></>} />
        <Route path="/categories" element={<></>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
