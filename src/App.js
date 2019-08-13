import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
        {/* <Route path="/topics" component={Topics} /> */}
    </Router>
  );
}

function Login() {
  return (
    <Container fluid className="auth-container">
      <Row>
        <Col>
            <h1>Login</h1>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="password" />
            </InputGroup>
            <a href="/register">Sign Up</a>
        </Col>
      </Row>
    </Container>
  );
}

function Register() {
  return (
    <Container fluid className="auth-container">
      <Row>
        <Col>
            <h1>Register</h1>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="email" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="Password" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="Confirm Password" />
            </InputGroup>
            <a href="/">Login</a>
        </Col>
      </Row>
    </Container>
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
