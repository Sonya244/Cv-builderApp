import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const SkillsPage = ({setPage, user, handleChange, addField}) => {
    return(
<div className='SkillsPageContainer'>
    <h3>Skills</h3>
    <FontAwesomeIcon
    icon ={faChevronLeft}
    id='ChevronBackIcon'
    onClick ={()=> setPage('DataForm')}
    />
    <div className='FirstBlock'>
        <button className='addButton'
        onClick ={()=> addField('Skills', {
            
                SkillsName: '',
                Proficiency: ''
               
        })}> + Add</button>
          <div className='delete'>
                     Delete
                        <FontAwesomeIcon
                        icon={faTrash}
                        id='trashIcon'
                     /></div>
    </div>
    {user.Skills.map((skill, index)=>(
        <div key={skill.id}>
    <div className='SecondBlockSkill'>
     <div className='inputField'>
      <label htmlFor={`skilllName-${index}`}>Skill Name</label>
            <input type='text'
            name={`skillName-${index}`}
            id='skillName'
            value={skill.SkillsName}
            onChange={(e)=> handleChange('Skills',index,  'SkillsName', e.target.value)}
            />
       
      </div>
    <div className='inputField'>
         <select className='proficiency' value={skill.Proficiency} onChange={(e)=> handleChange('Skills',index, 'Proficiency', e.target.value)}>
            <option value='' disabled selected>Proficiency</option>
            <option value='Basic'>Basic</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
            <option value='Expert'>Expert</option>
         </select>
        </div>     
    </div>
   
</div>
    ))}
    </div>
    )
}
export default SkillsPage