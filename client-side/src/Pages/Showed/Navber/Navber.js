import React, {  useContext, useState } from 'react';
import { Button, Image,  } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../router/AuthProvider/AuthProvider';


const Navber = () => {
    const [open,setOpen] = useState(false)
    const {user,logOut} = useContext(AuthContext)
     
  
    return (
        <Navbar collapseOnSelect expand="lg"  className='navbar-dark bg-success pl-5 ' variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img style={{width:'40px'}} className="rounded-5 bg-light" src="https://media.istockphoto.com/photos/keep-learning-concept-letters-of-the-alphabet-on-a-chalk-board-drawn-picture-id1337381696?b=1&k=20&m=1337381696&s=170667a&w=0&h=hQc5cLMDFG3MobpC5Gt-GgKSlEP9H2KZFnONIhjEwfE=" alt='img'/>   Learn and know from us

       
             
             
          </Navbar.Brand>
           
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <button onClick={()=> setOpen(!open)} type="button" class="btn btn-outline-dark w-10"> <span className=''>{open? 'Dark' : 'Light'}  </span></button>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
               
              <Link to='/home' className='text-decoration-none fs-5 text me-2 text-white'> Home</Link>
              <Link to='/courses' className='text-decoration-none fs-5 text me-2 text-white'> Courses</Link>
              <Link to='/faq' className='text-decoration-none fs-5 text me-2 text-white' > FAQ</Link>
              <Link to = '/blog' className='text-decoration-none fs-5 text text-white me-3 '> Blog</Link>
             
              
              
              {user?.email? 
            
                 <> 
               
                  <Image className='pt-4 '

                 roundedCircle
                style={{width:'30px'}}
                  title ={user?.displayName}
                src={user?.photoURL}
               
                >
              
            </Image> 
            
            <Button onClick={logOut}  variant="light" > logOut</Button>
            </>
               
                      
          
             : <Link to = '/login' className='text-decoration-none fs-5 text text-white'>Login</Link>

            }




                  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;