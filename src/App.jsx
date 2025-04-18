import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CvFields from '../components/CvFields';
import DataForm from '../components/DataForm';
import PersonalDPage from '../components/PersonalDPage';
import ExperiencePage from '../components/ExperiencePage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import LanguagesPage from '../components/LanguagesPage';


 
function App() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Programmer',
    contactDetails: {
      phoneNumber: '9999',
      email: 'johnnoe@email.com',
      webSite: 'johnDoe.com'
    },
    Location: {
      city: 'Amsterdam',
      country: 'Netherlands'
    },
  
  Experience: [
     {
    jobTitle: '',
    companyName : '',
    companyWebsite : '',
    startMonth: '',
    endMonth: '',
    startYear: '',
    endYear: ''
     }
    ]
  ,
  Education: [
    {
    university: '',
    degree: '',
    startMonth: '',
    endMonth:'',
    startYear: '',
    endYear: ''
  }
],
Skills: [
  {
   skillsName: '',
   proficiency: ''
  }
],
  Languages: [
    {
    language: '',
    proficiency: ''
  }
]
})

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20}, (_, i) => currentYear - i);

const handleChange = (section, index, field, value) => {
  setUser((prevUser) => {
    const updatedSection = [...prevUser[section]];
    updatedSection[index] = {...updatedSection[index], [field]: value};
    return {...prevUser, [section] : updatedSection}
  })
}
const addField = (section, newField) =>{
  setUser((prevUser) => ({
    ...prevUser,
    [section]: [...prevUser[section], {...newField, id: Math.random() }]
  })
);
}
const deleteSection = (section, id) => {
 setUser((prevUser) => {
  const updatedSection = prevUser[section].filter(item => item.id !== id);
  return {
    ...prevUser, 
   [section]: updatedSection,
 }
}
);
}

    const [ page, setPage] = useState('DataForm');
    const pages = {
      DataForm: <DataForm setPage={setPage} />,
      PersonalDPage: <PersonalDPage user ={user} setUser={setUser} setPage={setPage} />,
      ExperiencePage: <ExperiencePage  user ={user} setUser ={setUser} setPage={setPage} handleChange={handleChange} years={years} addField={addField} deleteSection={deleteSection}/>,
      EducationPage: <EducationPage user ={user} setUser ={setUser} setPage={setPage} handleChange={handleChange} years= {years} addField={addField} deleteSection={deleteSection}/>,
      SkillsPage: <SkillsPage user ={user} setUser= {setUser} setPage={setPage} handleChange={handleChange} addField={addField} deleteSection={deleteSection}/>,
      LanguagesPage: <LanguagesPage user={user} setUser= {setUser} setPage={setPage} handleChange={handleChange} addField={addField} deleteSection={deleteSection}/>
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
