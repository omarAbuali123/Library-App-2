import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import SignUp from './Signup';
import BookCatalog from './BookCatalog ';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Database } from 'firebase/database';
import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter> 
      <Header />
      <Footer />
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/BookCatalog" element={<BookCatalog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup" element={<Database/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






