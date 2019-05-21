import React, { Component } from "react";
// import Room from "./components/Room";
import PahoMQTT from "paho-mqtt";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

global.Paho = {
  MQTT: PahoMQTT
};
// eslint-disable-next-line no-undef
const client = new Paho.MQTT.Client("m11.cloudmqtt.com", 38856, "popo");

class App extends Component {
  componentWillMount() {
    client.connect({
      userName: "lyzpokhq",
      password: "-iHDYxyywVKR",
      useSSL: true,
      onSuccess,
      onFailure
    });
    client.onConnected = onConnected;
    client.onMessageArrived = onMessageArrived;

    function onSuccess() {
      console.log("Success");
    }

    function onFailure(err) {
      console.log("Error");
    }
    function onConnected() {
      console.log("Connected");
      client.subscribe("Room");
      client.subscribe("Farm");
    }
    function onMessageArrived(message) {
      console.log("inCome : ", message.payloadString);
    }
  }

  send = () => {
    client.send("Room", "3RA", 0, false);
  };

  render() {
    return (
      <div className="container text-center">
        <h2>Welcome to IOT</h2>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Message</Label>
            <Input name="message" placeholder="with a placeholder" />
            <Button className="btn-success" onClick={this.send}>
              SEND
            </Button>{" "}
          </FormGroup>
        </Form>
        <Button className="btn-success">ON</Button>{" "}
        <Button className="btn-danger">OFF</Button>
      </div>
    );
  }
}

export default App;
