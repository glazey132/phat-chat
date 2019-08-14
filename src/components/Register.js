import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, FormText, Button, Input } from "reactstrap";
const superagent = require('superagent');

function Register(props) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
console.log('this.props shoould be different now with HOC => ', props);

const handleSubmit = (evt) => {
    evt.preventDefault();
    superagent
        .post('/register')
        .send({ username: username, password: password, confirmPassword: confirmPassword })
        .end(function (err, res) {
            if (err) {
                console.error('there was an error: ', err);
            } else {
                props.history.push('/');
            }
          });
}

  return (
    <Container fluid className="auth-container">
      <Row>
        <Col>
          <h1>Register</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <a href="/">Login</a>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Register);
