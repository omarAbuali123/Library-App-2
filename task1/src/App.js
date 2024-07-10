import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import SignUp from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;