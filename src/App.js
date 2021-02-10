// import logo from './logo.svg';
import './index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home, About, Subscribe, SubscribeSingle} from './pages/'
import {Navbar, Footer} from './components/'

const subscribe = [
    {
        id: 1,
        title: 'LITE',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: 'Domestic films and TV series, as well as world classics',
        sale: 'First 14 days free',
        price: 10,
    },
    {
        id: 2,
        title: 'OPTIMUM',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: '"Light" + more foreign films and TV series and Netflix',
        sale: 'First 7 days free',
        price: 15,
    },
    {
        id: 3,
        title: 'PREMIUM',
        img: 'https://cdn.pixabay.com/photo/2017/11/03/22/59/off-road-2915957_1280.jpg',
        description: '"Optimum"+ films and series Start, Netflix and Amediateka',
        sale: 'Exclusives as a gift',
        price: 20,
    },
];

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/subscribe"  render={()=><Subscribe subscribe={subscribe}/>}  />
          <Route exact path={"/subscribe/:id"}  render={()=><SubscribeSingle subscribe={subscribe}/>}  />
          <Route exact path="/"  render={()=><Home subscribe={subscribe}/>}  />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
