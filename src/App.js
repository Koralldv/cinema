// import logo from './logo.svg';
import './index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home, About} from './pages/'
import {Navbar, Footer} from './components/'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
