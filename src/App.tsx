import { Navbar } from './components/shared';
import { Route, Routes } from 'react-router-dom';
import {Homepage, Aboutpage, AdminChat} from "./pages/index";
import { AllBooks, BookDetail, CreateNewBook } from "./pages/books";
import {AllCategories, CreateCategory } from "./pages/categories";
import {Registerpage, Loginpage, Profilepage} from "./pages/students/index"
import {AdminLoginpage, AdminRegisterpage, AdminProfilepage, ApplicationStatus} from "./pages/admin/index";
import { BorrowingPage } from './pages/borrowing';
export function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/createbook" element={<CreateNewBook />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/student/register" element={<Registerpage />} />
        <Route path="/student/login" element={<Loginpage  />} />
        <Route path="/student/profile" element={<Profilepage />} />
        <Route path="/admin/login" element={<AdminLoginpage />} /> 
        <Route path="/admin/register" element={<AdminRegisterpage />} />
        <Route path="/admin/profile" element={<AdminProfilepage />} />
        <Route path="/admin/app/status" element={<ApplicationStatus />} />
        <Route path="/admin/chat" element={<AdminChat />} />
        <Route path="/borrow" element={<BorrowingPage />} />
      </Routes>
    </>
  );
}

export default App;
