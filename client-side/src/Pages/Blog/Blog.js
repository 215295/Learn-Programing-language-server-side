import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
       
         <Container fluid style={{ backgroundColor:'#ffebcc'}} >
           <Container>
           <Row>
                <Col>
              <div className=" mt-5 p-5 rounded " style={{ backgroundColor:'#ffcccc'}} >
      
              <h5 className=" pb-2"> 1. What is  Cors ?</h5>
        <p className="  " style={{fontSize:'19px'}}>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.</p>
     
     
  </div>

                




  <div className=" mt-5 p-5 rounded " style={{ backgroundColor:'#ccffcc '}} >
    
  <h5 className=" pb-2"> 2. Why are you using firebase? What other options do you have to implement authentication..?</h5>
        <p className=" " style={{fontSize:'19px'}}>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. popular federated identity providers like Google, Facebook and Twitter, and more</p>
     
    
  </div>

           


<div className=" mt-5 p-5 rounded " style={{ backgroundColor:' #ffeb99 '}} >
      
    
      
<h5 className=" pb-2"> 3. How does the private route work? </h5>
        <p className=" " style={{fontSize:'19px'}}> 

The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
     
      
  </div>

           



  <div className=" mt-5 p-5 rounded " style={{ backgroundColor:'#e0ccff '}} >
    
        <h5 className=" pb-2"> 1.What is Node & How does Node work ?</h5>
        <p className=" " style={{fontSize:'19px'}}>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
     
    
  </div>

  </Col>
   </Row>
           </Container>
    </Container>
    );
};

export default Blog;