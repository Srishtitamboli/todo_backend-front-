import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Forms from "../src/frontend/forms";
import TodoItems from "../src/frontend/todoItems";
import Header from "./shared/header";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
        <Switch>
            <Route path="/" exact>
                <Forms/>
            </Route>
            <Route path="/todos" exact>
                <TodoItems/>
            </Route>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
