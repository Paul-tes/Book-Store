import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Pages/Home';
import { fetchBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [fetchBooks()]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<></>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
