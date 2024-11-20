import React from "react";
import  {Container, Tab, Nav, Row, Col} from "react-bootstrap";

function About() {
    return (
      <>
        <Container>
          <Tab.Container id= 'left-tabs-example' defaultActveKey= 'first'>
            <Row>
              <Col sm= {3}>
                <Nav variant= 'pills' className= 'flex-column mt-2'>

                  <Nav.Item>
                    <Nav.Link eventKey= 'first'>Design</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey= 'second'>Team</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey= 'third'>Programming</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey= 'fourth'>Frameworks</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey= 'fifth'>Libraries</Nav.Link>
                  </Nav.Item>

                </Nav>
              </Col>
              <Col sm= {9}>
                <Tab.Content className="mt-1">

                  <Tab.Pane eventKey= 'first'>
                    <img src='https://www.theme-junkie.com/wp-content/uploads/figma-portfolio-template-5-1500x1000.jpg'/>
                    <p> Navbar
                        Documentation and examples for Bootstrap’s powerful,
                        responsive navigation header,
                        the navbar. Includes support for branding,
                        navigation, and more, including support for our collapse plugin.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey= 'second'>
                    <img src='https://ui4free.com/storage/public/images/figma-multipurpose-landing-page-website-template_1627629014.jpg'/>
                    <p> Navbar
                        Documentation and examples for Bootstrap’s powerful,
                        responsive navigation header,
                        the navbar. Includes support for branding,
                        navigation, and more, including support for our collapse plugin.
                    </p>
                  </Tab.Pane>


                  <Tab.Pane eventKey= 'third'>
                    <img src='https://s.tmimgcdn.com/scr/1600x1000/138900/elmna-university-alumni-website-design-ui-template-figma-and-psd_138904-original.jpg'/>
                    <p> Navbar
                        Documentation and examples for Bootstrap’s powerful,
                        responsive navigation header,
                        the navbar. Includes support for branding,
                        navigation, and more, including support for our collapse plugin.
                    </p>
                  </Tab.Pane>


                  <Tab.Pane eventKey= 'fourth'>
                    <img src='https://uikitfree.com/wp-content/uploads/2020/04/Gaming-Website-Concept-Figma-Template.jpg'/>
                    <p> Navbar
                        Documentation and examples for Bootstrap’s powerful,
                        responsive navigation header,
                        the navbar. Includes support for branding,
                        navigation, and more, including support for our collapse plugin.
                    </p>
                  </Tab.Pane>


                  <Tab.Pane eventKey= 'fifth'>
                    <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--F87I0Tg4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/0*8ww86gf07yH5GFgp.png'/>
                    <p> Navbar
                        Documentation and examples for Bootstrap’s powerful,
                        responsive navigation header,
                        the navbar. Includes support for branding,
                        navigation, and more, including support for our collapse plugin.
                    </p>
                  </Tab.Pane>


                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </>
    );
}
  
export default About;