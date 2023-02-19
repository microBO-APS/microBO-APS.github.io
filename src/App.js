import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Home from './Components/Home/Home.js';
import Service from './Components/Others/Service.js';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <div>
          <NavBar/>
        </div> 
        <div className="AppContainer">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Service">
              <Service />
            </Route>
          </Switch>
        </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
