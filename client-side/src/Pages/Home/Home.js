import React from 'react';
import { Card,  Col,  Container, Row } from 'react-bootstrap';



const Home = () => {
    return (
     
        <Container>
       

              <Row className='mt-3'>
                
                <Col>
               
                <Card  style={{height:'300px', border:'none'}} >
      <Card.Img src="https://image.shutterstock.com/image-photo/elearning-education-internet-technology-webinar-260nw-1139995139.jpg" alt="Card image" /> 
      <Card.ImgOverlay>
        <Card.Title className='text-center text-light'>Learn from our page</Card.Title><Card.Text className='w-50 text-center'>
        
       
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
                </Col>
          
                    
              </Row>
        </Container>
    );
};

export default Home;