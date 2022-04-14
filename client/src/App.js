import './App.css';
import {  Switch, Route} from "react-router-dom"
import Info from './components/Info';
import Dashboard from './components/Dashboard';
import Countdown from 'react-countdown';
import Countd from './components/Countd';
import Term from './components/Term';

function App() {

  return (
    <div className='App'>
      
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/info">
            <Info/>
          </Route>
          <Route exact path="/term">
            <Term/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
