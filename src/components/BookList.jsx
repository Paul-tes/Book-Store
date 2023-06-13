import { useSelector } from 'react-redux';
import Book from './Book';
// import store from '../redux/store';

const BookList = () => {
  // const dispatch = useDispatch();
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
