import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Portafolio from './components/pages/Portafolio'
import Footer from './components/pages/Footer'
import Aboutme from './components/pages/Aboutme'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portafolio" exact component={Portafolio} />
          <Route path="/aboutme" exact component={Aboutme} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
