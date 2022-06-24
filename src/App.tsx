import Navbar from "./components/shared/Navbar";
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import AllBooks from './pages/books/AllBooks';
import CreateBook from './pages/books/CreateBook';
import BookDetail from './pages/books/BookDetail';
import AllCategories from './pages/categories/AllCategories';
import CreateCategory from "./pages/categories/CreateCategory";
import Registerpage from "./pages/auth/Registerpage";
import Loginpage from "./pages/auth/Loginpage";
import Profilepage from "./pages/auth/Profilepage";
import BorrowPage from "./pages/books/borrow/BorrowPage";

export function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage  />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/borrow" element={<BorrowPage />} />
      </Routes>
    </>
  );
}

export default App;
