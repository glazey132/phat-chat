import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Register from './components/Register'
import Login from './components/Login'
import Header from "./components/Header";

function App() {
  const loggedIn = false;
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => (
        loggedIn ? (
          <Redirect to="/dashboard/" />
        ) : (
          <Login />
        )
      )}/>
      <Route path="/register" component={Register} />
      {/* <Route path="/topics" component={Topics} /> */}
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default App;
