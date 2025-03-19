import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const LanguagesPage = ({user, setPage, handleChange}) =>{
    return(
        <div className='LanguagesPageContainer'>
<h3>Languages</h3>
<FontAwesomeIcon
icon={faChevronLeft}
id='ChevronBackIcon'
onClick={() =>setPage('DataForm')}
/>
<div className='FirstBlock'>
<button className='addButton'> + Add </button>
</div>
<div className='SecondBlockLang'>
    <div className='inputField'>
    <label htmlFor='language'>Language</label>
            <input type='text'
            name='language'
            id='language'
            value={user.Languages.Language}
            onChange={(e)=> handleChange('Languages', 'Language', e.target.value)}
            />
    </div>
    <div className='inputField'>
         <select className='proficiency' onChange={(e)=> handleChange('Languages', 'Proficiency', e.target.value)}>
            <option value='' disabled selected>Proficiency</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Fluent'>Fluent</option>
            <option value='Native'>Native</option>
         </select>
        </div>     
</div>
     </div>
    )
}
export default LanguagesPage