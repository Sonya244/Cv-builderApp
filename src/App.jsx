import React, { useState } from 'react';
import Navbar from '../components/Navbar';


function App() {
  const [user, setUser] = useState({
    FirstName: 'John',
    LastName: 'Doe',
    JobTitle: 'Programmer',
    contactDetails: {
      phoneNumber: '9999-999',
      Email: 'johndoe@email.com',
    },
    Location: {
      City: 'Amsterdam',
      Country: 'Netherlands'
    }})
  return(
  <div className='ContainerCv'>
    < Navbar user={user}/>
  </div>)
}


export default App
