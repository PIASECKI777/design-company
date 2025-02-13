import React from "react";
import  {Container, Form, Button} from "react-bootstrap";

function Contacts() {
    return (
      <>
        <Container style= {{width: '600px'}}>
          <h1 className= "text-center">Contact Us</h1>
          <Form>

            <Form.Group controlId= 'formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type= '@email' placeholder= 'Enter email'  />
              
              <Form.Text>
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>
            <Form.Group controlId= 'formBasicPassword'>
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as= 'textarea' rows= '3'/>
            </Form.Group>

            <Form.Group controlId= 'formBasicCheckbox'>
              <Form.Check  type= 'checkbox' label= 'Check me out'></Form.Check>
            </Form.Group>

            <Button variant="primary" type= 'submit'> Submit</Button>

          </Form>
        </Container>
      </>
    );
}
  
export default Contacts;