
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Body from './Components/Body/Body';

import Footer from './Components/Footer/Footer';
import Header1 from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from './Components/Navbar/Navbar';
import Body1 from './Components/Body1/Body1';
import {HashLink} from 'react-router-hash-link'




function App() {
  return (
    <Router>
      <>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Knowyourforest" element={<Body1 />} />
          {/* <Route path="Home" element={<Body />} />
          <Route path="/#About " href="#About" />
          <Route path="/#sponsorATree" href="#sponsorATree" />
          <Route path="/#joinTheRun" />
          <Route path="/#Takethepledge" /> */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
