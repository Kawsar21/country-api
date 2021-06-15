import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CountryDetails from './CountryDetails';
import Header from './Header';
import Home from './Home';
import NoMatch from './NoMatch';

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/country/:name">
           <CountryDetails />
         </Route>
         <Route path="*">
            <NoMatch />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;