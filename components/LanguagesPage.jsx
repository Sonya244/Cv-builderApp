import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const LanguagesPage = ({user, setPage, handleChange, addField, deleteSection}) =>{
    return(
        <div className='LanguagesPageContainer'>
         <div className='topBar'>
<h3>Languages</h3>
<FontAwesomeIcon
icon={faChevronLeft}
id='ChevronBackIcon'
onClick={() =>setPage('DataForm')}
/>
</div>
<div className='FirstBlock'>
<button className='addButton'
 onClick={() => addField('Languages', {
    language: '',
    proficiency: '',
 })}> + Add </button>
   <div className='delete'>
             Delete
                <FontAwesomeIcon
                icon={faTrash}
                id='trashIcon'
                onClick= {() => deleteSection('Languages')}
             /></div>
</div>
{user.Languages.map((lang, index) => (
    <div key ={lang.id}>
<div className='SecondBlockLang'>
    <div className='inputField'>
    <label htmlFor={`language-${index}`}>Language</label>
            <input type='text'
            name={`language-${index}`}
            id='language'
            value={lang.language}
            onChange={(e)=> handleChange('Languages', index,'language',  e.target.value)}
            />
    </div>
    <div className='inputField'>
         <select className='proficiency'  value= {lang.proficiency} onChange={(e)=> handleChange('Languages', index,  'proficiency', e.target.value)}>
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
)}
export default LanguagesPage