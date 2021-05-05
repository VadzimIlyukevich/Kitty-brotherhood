import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BreedDetail from "./components/Models/BreedDetail";
import PostDetail from "./components/Models/PostDetail";
import LoginPage from "./login";
import SingUp from "./registration";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
        <Router>
            <MainPage />
            <Switch>
                <Route path="/breed/:id" exact component={BreedDetail} />
                <Route path="/form/:id" exact component={PostDetail} />

                <Route path="/login" exact component={LoginPage}/>
                 <Route path="/register" exact component={SingUp}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
