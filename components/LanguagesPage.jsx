import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const LanguagesPage = ({user, setPage, handleChange, addField}) =>{
    return(
        <div className='LanguagesPageContainer'>
<h3>Languages</h3>
<FontAwesomeIcon
icon={faChevronLeft}
id='ChevronBackIcon'
onClick={() =>setPage('DataForm')}
/>
<div className='FirstBlock'>
<button className='addButton'
 onClick={() => addField('Experience', {
    JobTitle: '',
    companyName: '',
    companyWebsite: '',
    startMonth: '',
    startYear: '',
    endYear: '',
 })}> + Add </button>
   <span className='delete'>
             Delete
                <FontAwesomeIcon
                icon={faTrash}
                id='trashIcon'
             /></span>
</div>
{user.Languages.map((lang, index) => (
    <div key ={lang.id}>
<div className='SecondBlockLang'>
    <div className='inputField'>
    <label htmlFor={`language-${index}`}>Language</label>
            <input type='text'
            name={`language-${index}`}
            id='language'
            value={lang.Language}
            onChange={(e)=> handleChange('Languages', index,'Language',  e.target.value)}
            />
    </div>
    <div className='inputField'>
         <select className='proficiency'  value= {lang.Proficiency} onChange={(e)=> handleChange('Languages', index,  'Proficiency', e.target.value)}>
            <option value='' disabled selected>Proficiency</option>
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