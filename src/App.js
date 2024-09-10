import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './compenent/Navbar';
import Main from './compenent/Main';
import Footer from './compenent/Footer';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ContacPage" element={ContactPage} />
      </Routes>
      <Header />
      <Main/>
      <Footer/>
     
    </Router>
  );
}

export default App;
