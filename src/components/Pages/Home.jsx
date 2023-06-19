// import store from '../../redux/store';
import BookForm from '../BookForm';
import BookList from '../BookList';

const Home = () => (
  <div className="book-card-list">
    <BookList />
    <div className="break-line" />
    <BookForm />
  </div>
);

export default Home;
