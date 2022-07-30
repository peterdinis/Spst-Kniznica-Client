import { Navbar } from './components/shared';
import { Route, Routes } from 'react-router-dom';
import {Homepage, Aboutpage, AdminChat} from "./pages/index";
import { AllBooks, BookDetail, CreateNewBook } from "./pages/books";
import {AllCategories, CreateCategory, GetOneCategory } from "./pages/categories";
import {Registerpage, Loginpage, Profilepage} from "./pages/students/index"
import {AdminLoginpage, AdminRegisterpage, AdminProfilepage, ApplicationStatus, AdminTalk} from "./pages/admin/index";
import { BorrowingPage, ReturnBookPage } from './pages/borrowing';
import {TeacherLoginPage, TeacherRegisterPage, TeacherProfile} from "./pages/teachers"

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
        <Route path="/category:id" element={<GetOneCategory />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/student/register" element={<Registerpage />} />
        <Route path="/student/login" element={<Loginpage  />} />
        <Route path="/student/profile" element={<Profilepage />} />
        <Route path="/admin/login" element={<AdminLoginpage />} /> 
        <Route path="/admin/register" element={<AdminRegisterpage />} />
        <Route path="/admin/profile" element={<AdminProfilepage />} />
        <Route path="/admin/app/status" element={<ApplicationStatus />} />
        <Route path="/admin/chat" element={<AdminChat />} />
        <Route path="/admin/talk" element={<AdminTalk />} /> 
        <Route path="/borrow" element={<BorrowingPage />} />
        <Route path="/book/return" element={<ReturnBookPage />} />
        <Route path="/teacher/login" element={<TeacherLoginPage/> } />
        <Route path="/teacher/register" element={<TeacherRegisterPage/>} />
        <Route path="/teacher/profile" element={<TeacherProfile/>} />
      </Routes>
    </>
  );
}

export default App;
