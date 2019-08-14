import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  FormText,
  Button,
  Input
} from "reactstrap";

function Login() {
  return (
    <Container fluid className="auth-container">
      <Row>
        <Col>
          <h1>Login</h1>

          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <a href="/register">Sign Up</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
