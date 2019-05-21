import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Room = () => {
  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Message</Label>
          <Input name="email" placeholder="with a placeholder" />
        </FormGroup>
      </Form>
      <Button className="btn-success">ON</Button>{" "}
      <Button className="btn-danger">OFF</Button>
    </div>
  );
};

export default Room;
