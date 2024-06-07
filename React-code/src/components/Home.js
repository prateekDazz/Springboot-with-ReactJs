import React, { useEffect } from "react";

import { Container, Row, Col,Button } from 'reactstrap';



 const Home = () =>
{

  useEffect(()=>
  {
        document.title = "Home || Users in TCS"
  },[])
    return(

        <div>
  <Container className="text-center">
      <Row>
        <Col>
          <h1>Hello, world!</h1>
          <p className="lead">This is a simple CRUD based App using React js .</p>
          <hr className="my-2" />
          <p>This example sets up a basic form in React that handles state management for multiple fields, processes form submissions, and integrates with a backend via axios.
             This structure can be expanded and customized to fit the specific needs of your application.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Col>
      </Row>
    </Container>
        </div>
    );
}
export default Home;

