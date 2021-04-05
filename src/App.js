import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

    <div className="">
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
