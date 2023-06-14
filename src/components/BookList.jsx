import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <div className="book-container">
      {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
    </div>
  );
};

export default BookList;
