import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
  
    const {user,loading} = useContext(AuthContext)
      const location = useLocation();
    
      if(loading){

          return <div className='d-flex justify-content-center mt-5 ' > <Spinner  animation="border" variant="primary" /></div>
      }
      
  if(!user){
     
     return <Navigate to="/login" state={{ from: location }} replace> </Navigate>
       
  }

   return children; 
    
};

export default PrivateRouter;