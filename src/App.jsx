import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CvFields from '../components/CvFields';
import DataForm from '../components/DataForm';
import PersonalDPage from '../components/PersonalDPage';
import ExperiencePage from '../components/ExperiencePage';
import Input from '../components/Input';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import LanguagesPage from '../components/LanguagesPage';



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
    JobTitle: '',
    companyName : '',
    companyWebsite : '',
    startMonth: '',
    endMonth: '',
    startYear: '',
    endYear: ''
  },
  Education: {
    University: '',
    Degree: '',
    startMonth: '',
    endMonth:'',
    startYear: '',
    endYear: ''
  },
  Skills: {
SkillsName: '',
Proficiency: ''
  },
  Languages: {
  Language: '',
  Proficiency: ''
  }
})
const currentYear = new Date().getFullYear();//get current date/get exact year
const years = Array.from({ length: 20}, (_, i) => currentYear - i);//new array create, mapping in reverse

const handleChange = (section, field, value)  => {
  setUser((prevUser) => ({
      ...prevUser,
      [section]: {
          ...prevUser[section],
          [field]: value,
      
      }
  }));
 };
    const [ page, setPage] = useState('DataForm');
    const pages = {
      DataForm: <DataForm setPage={setPage} />,
      PersonalDPage: <PersonalDPage user ={user} setUser={setUser} setPage={setPage} />,
      ExperiencePage: <ExperiencePage  user ={user} setUser ={setUser} setPage={setPage} handleChange={handleChange} years={years}/>,
      EducationPage: <EducationPage user ={user} setUser ={setUser} setPage={setPage} handleChange={handleChange} years= {years}/>,
      SkillsPage: <SkillsPage user ={user} setUser= {setUser} setPage={setPage} handleChange={handleChange} />,
      LanguagesPage: <LanguagesPage user={user} setUser= {setUser} setPage={setPage} handleChange={handleChange} />
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
