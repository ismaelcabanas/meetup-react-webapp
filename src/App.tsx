import React from 'react';
import {Nav, Container} from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/my-meeting-groups">My Meeting Groups</Nav.Link>
        <Nav.Link href="/my-meetings">My Meetings</Nav.Link>
        <Nav.Link href="/meeting-groups">Explore Meeting Groups</Nav.Link>
        <Nav.Link href="/administration/meetingGroupProposals">Administration</Nav.Link>
        <Nav.Link href="/subscription">Subscription</Nav.Link>
        <Nav.Link href="/register">Registration</Nav.Link>
        <Nav.Link href="/emails">Emails</Nav.Link>
      </Nav>
    </Container>
  );
}

export default App;
