import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CvFields from '../components/CvFields';
import DataForm from '../components/DataForm';


function App() {
  const [user, setUser] = useState({
    FirstName: 'John',
    LastName: 'Doe',
    JobTitle: 'Programmer',
    contactDetails: {
      phoneNumber: '9999',
      Email: 'johnnoe@email.com',
    },
    Location: {
      City: 'Amsterdam',
      Country: 'Netherlands'
    }})
  return(
  <div className='Container'>
    <div className='ContainerCv'>
    < Navbar user={user}/>
    <CvFields user={user}/>
    </div>
    <div className='ContainerDataForm'>
      < DataForm />
    </div>
  </div>)
}


export default App
