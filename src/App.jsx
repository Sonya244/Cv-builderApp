import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CvFields from '../components/CvFields';
import DataForm from '../components/DataForm';
import PersonalDPage from '../components/PersonalDPage';
import ExperiencePage from '../components/ExperiencePage';
import Input from '../components/Input';


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
    },
  Experience: {
    JobTitle: 'Programmer',
    companyName : '',
    companyWebsite : '',
  }})
    const [ page, setPage] = useState('DataForm');
    const pages = {
      DataForm: <DataForm setPage={setPage} />,
      PersonalDPage: <PersonalDPage user ={user} setUser={setUser} setPage={setPage} />,
      ExperiencePage: <ExperiencePage setPage={setPage} />
    }
  return(
  <div className='Container'>
    <div className='ContainerCv'>
    < Navbar user={user}/>
    <CvFields user={user}/>
    </div>
    <div className='ContainerDataForm'>
     {pages[page]}
    </div>
  </div>)
}


export default App
