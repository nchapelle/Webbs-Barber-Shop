import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthState from "./context/auth/AuthState";

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <header>
            <Nav />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
