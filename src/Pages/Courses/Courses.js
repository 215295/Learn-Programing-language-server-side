import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../Showed/Card/Card';

const Courses = () => {

      const [courses,setCourses] = useState([])
        
      useEffect(()=>{
              
          fetch('https://learn-news-server.vercel.app/courses')
          .then(res => res.json())
          .then(data =>setCourses(data))
          
      },[])
      
    return (
        <Container className='mt-5'> 
        <Row className='col-6'>
          <Col className='col-5'  lg="9" sm="12"> 
             {
                courses.map(coures => <Card key={coures.id}  coures = {coures} ></Card> )
             }
      </Col>
           
           <Col lg="2" sm="12 mt-3">

                    {
                        courses.map(coues =>  <div key ={coues.id}>
                              
                              <Link to={`/details/${coues.id}`} > <p className =''>  {coues.name}</p></Link>  
                            </div> )
                    }
          </Col>
          
        </Row>
     
       
        </Container>
    );
};

export default Courses;