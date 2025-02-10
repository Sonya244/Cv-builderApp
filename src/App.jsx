import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CvFields from '../components/CvFields';
import DataForm from '../components/DataForm';
import PersonalDPage from '../components/PersonalDPage';

function App() {
  const [user, setUser] = useState({
    FirstName: 'John',
    LastName: 'Doe',
    JobTitle: 'Programmer',
    contactDetails: {
      phoneNumber: '9999',
      Email: 'johnnoe@email.com',
      webSite: 'johnDoe.com'
    },
    Location: {
      City: 'Amsterdam',
      Country: 'Netherlands'
    }})
    const [ page, setPage] = useState('DataForm');
  return(
  <div className='Container'>
    <div className='ContainerCv'>
    < Navbar user={user}/>
    <CvFields user={user}/>
    </div>
    <div className='ContainerDataForm'>
      { page === 'DataForm' ? (
      <DataForm setPage ={setPage}/>) :
      (<PersonalDPage user={user} setUser={setUser} page= {page} setPage = {setPage}/>)}
    </div>
  </div>)
}


export default App
