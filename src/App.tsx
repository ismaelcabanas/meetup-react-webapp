import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Nav, Container} from 'react-bootstrap';
import { LoginControl } from './login/login-control';

function App() {
  return (
    <Router>
      <Container fluid>
            <LoginControl />
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/my-meeting-groups">My Meeting Groups</Nav.Link>
              <Nav.Link href="/my-meetings">My Meetings</Nav.Link>
              <Nav.Link href="/meeting-groups">Explore Meeting Groups</Nav.Link>
              <Nav.Link href="/administration/meetingGroupProposals">Administration</Nav.Link>
              <Nav.Link href="/subscription">Subscription</Nav.Link>
              <Nav.Link href="/register">Registration</Nav.Link>
              <Nav.Link href="/emails">Emails</Nav.Link>
            </Nav>
        </Container>
    </Router>
    
  );
}

export default App;
