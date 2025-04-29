import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CvFields from './components/CvFields';
import DataForm from './components/DataForm';
import PersonalDPage from './components/PersonalDPage';
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';
import SkillsPage from './components/SkillsPage';
import LanguagesPage from './components/LanguagesPage';
import { User, Education, Language, Skill, Experience, LanguagProficiency, SkillProficiency, Section } from './components/types';

function App() {
  const [user, setUser] = useState<User>({
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Programmer',
    contactDetails: {
      phoneNumber: '9999',
      email: 'johnnoe@email.com',
      webSite: 'johnDoe.com'
    },
    location: {
      city: 'Amsterdam',
      country: 'Netherlands'
    },

    experience: [
      {
        jobTitle: '',
        companyName: '',
        companyWebsite: '',
        startMonth: '',
        endMonth: '',
        startYear: '',
        endYear: ''
      }
    ]
    ,
    education: [
      {
        university: '',
        degree: '',
        startMonth: '',
        endMonth: '',
        startYear: '',
        endYear: ''
      }
    ],
    skills: [
      {
        skillsName: '',
        proficiency: SkillProficiency.Basic

      }
    ],
    languages: [
      {
        language: '',
        proficiency: LanguagProficiency.Beginner
      }
    ]
  })

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const handleChange = (section: Section, index: number, field: string, value: string) => {
    setUser((prevUser) => {
      const updatedSection = [...prevUser[section]];
      updatedSection[index] = { ...updatedSection[index], [field]: value };
      return { ...prevUser, [section]: updatedSection }
    })
  }

  const addField = (section: Section, newField: Education | Language | Skill | Experience) => {
    setUser((prevUser) => ({
      ...prevUser,
      [section]: [...prevUser[section], newField]
    })
    );
  }
  const deleteSection = (section: Section, index: number) => {
    setUser(prevUser => {
      const updatedSection = [
        ...prevUser[section].slice(0, index),
        ...prevUser[section].slice(index + 1),
      ];
      return {
        ...prevUser,
        [section]: updatedSection,
      }

    })
  }

  const [page, setPage] = useState('DataForm');

  // Type the pages object with explicit types
  type PagesType = {
    [key: string]: React.ReactNode;
  };


  const pages: PagesType = {
    DataForm: <DataForm setPage={setPage} />,
    PersonalDPage: <PersonalDPage user={user} setPage={setPage} handleChange={setUser} />,
    ExperiencePage: <ExperiencePage user={user} setPage={setPage} handleChange={handleChange} years={years} addField={addField} deleteSection={deleteSection} />,
    EducationPage: <EducationPage user={user} setPage={setPage} handleChange={handleChange} years={years} addField={addField} deleteSection={deleteSection} />,
    SkillsPage: <SkillsPage user={user} setPage={setPage} handleChange={handleChange} addField={addField} deleteSection={deleteSection} />,
    LanguagesPage: <LanguagesPage user={user} setPage={setPage} handleChange={handleChange} addField={addField} deleteSection={deleteSection} />
  }

  return (
    <div className='Container'>
      <div className='ContainerCv'>
        <Navbar user={user} />
        <CvFields user={user} />
      </div>
      <div className='ContainerDataForm'>
        {pages[page]}
      </div>
    </div>)
}


export default App
