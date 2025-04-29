import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { LanguagProficiency, PageProps, Section } from './types';
const LanguagesPage: React.FC<PageProps> = ({
   user,
   setPage,
   handleChange,
   addField,
   deleteSection }) => {
   return (
      <div className='LanguagesPageContainer'>
         <div className='topBar'>
            <h3>Languages</h3>
            <FontAwesomeIcon
               icon={faChevronLeft}
               id='ChevronBackIcon'
               onClick={() => setPage?.('DataForm')}
            />
         </div>
         <div className='FirstBlock'>
            <button className='addButton'
               onClick={() => addField?.(Section.Languages, {
                  language: '',
                  proficiency: LanguagProficiency.Beginner,
               })}> + Add </button>

         </div>
         {user.languages?.map((lang, index) => (
            <div key={index}>
               <div className='delete'>
                  Delete
                  <FontAwesomeIcon
                     icon={faTrash}
                     id='trashIcon'
                     onClick={() => deleteSection?.(Section.Languages, index)}
                  /></div>
               <div className='SecondBlockLang'>
                  <div className='inputField'>
                     <label htmlFor={`language-${index}`}>Language</label>
                     <input type='text'
                        name={`language-${index}`}
                        id='language'
                        value={lang.language}
                        onChange={(e) => handleChange?.(Section.Languages, index, 'language', e.target.value)}
                     />
                  </div>
                  <div className='inputField'>
                     <select className='proficiency' value={lang.proficiency} onChange={(e) => handleChange?.(Section.Languages, index, 'proficiency', e.target.value)}>
                        <option value='' disabled>Proficiency</option>
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Fluent'>Fluent</option>
                        <option value='Native'>Native</option>
                     </select>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
export default LanguagesPage