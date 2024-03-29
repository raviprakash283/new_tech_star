

import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"


import HOME from "./components/HOME"
import Contact
 from "./components/Contact";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"




function App() {
  return (

    
      <Router>
       
          <Header/>
          <Routes>

          <Route path="/" element= {<HOME/>}/>
          <Route path="/Contact" element= {<Contact/>}/>
          <Route path="/Services" element= {<Services/>}/>


          </Routes>

          <Footer/>


      </Router>
  );
}

export default App;
