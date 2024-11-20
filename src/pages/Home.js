import { Container, Card, Button} from "react-bootstrap";
import  CarouselBox  from "../CarouselBox.js";

function Home() {
    return (
      <>
        <CarouselBox/>
        <div className="for_carts">
           <Container>
            <div className="text-center home-header">OUR TEAM</div>
              <div className="card-deck">
                <Card bg="info" text="primary">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                  <Card.Body>
                      <Card.Title>Address</Card.Title>
                      <Card.Text>

                      </Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>



                <Card text="primary">

                  <Card.Body>
                      <Card.Title>Developers</Card.Title>
                      <Card.Text>

                      </Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                </Card>



                <Card bg="warning" text="primary">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                  <Card.Body>
                      <Card.Title>Management</Card.Title>
                      <Card.Text>
 
                      </Card.Text>
                      <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>

                </div>
           </Container>

        </div>
      </>
    );
}
  
export default Home;