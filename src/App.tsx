import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CvFields from './components/CvFields';
import DataForm from './components/DataForm';
import PersonalDPage from './components/PersonalDPage';
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';
import SkillsPage from './components/SkillsPage';
import LanguagesPage from './components/LanguagesPage';
import { User, Education, Language, Skill, Experience, Section } from './components/types';
import AppContext, { AppContextType, defaultUser } from './components/UserContext';

function App() {
  const [user, setUser] = useState<User>(defaultUser)

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

  type PagesType = {
    [key: string]: React.ReactNode;
  };

  const pages: PagesType = {
    DataForm: <DataForm setPage={setPage} />,
    PersonalDPage: <PersonalDPage />,
    ExperiencePage: <ExperiencePage years={years} />,
    EducationPage: <EducationPage years={years} />,
    SkillsPage: <SkillsPage />,
    LanguagesPage: <LanguagesPage />
  }

  return (
    <AppContext.Provider value={
      {
        user: user,
        setPage: setPage,
        setUser: setUser,
        handleChange: handleChange,
        deleteSection: deleteSection,
        addField: addField,
      } as AppContextType
    }>
      <div className='Container'>
        <div className='ContainerCv'>
          <Navbar user={user} />
          <CvFields user={user} />
        </div>
        <div className='ContainerDataForm'>
          {pages[page]}
        </div>
      </div>
    </AppContext.Provider>)
}


export default App
