import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RoomPage = () => (
  <Form>
    <FormGroup>
      <Label>RoomID: #123</Label>
    </FormGroup>
    <FormGroup>
      <Label>Room Name: Room 1</Label>
    </FormGroup>
    <FormGroup>
      <Label>Player 1:</Label>
      <Input type="select" id="player1Select">
        <option>Wayuki</option>
      </Input>
      <Label check>
        <Input type="checkbox" />{' '}
        Ready
        </Label>
    </FormGroup>
    <FormGroup>
      <Label>Player 2:</Label>
      <Input type="select" id="player2Select">
        <option>Jason106</option>
        <option>Open</option>
        <option>Close</option>
      </Input>
      <Label check>
        <Input type="checkbox" />{' '}
        Ready
        </Label>
    </FormGroup>
    <Button color="success">Start!</Button>
  </Form>
);

export default RoomPage;
