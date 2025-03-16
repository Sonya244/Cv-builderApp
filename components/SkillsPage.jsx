import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
const SkillsPage = ({setPage, user, setUser, handleChange}) => {
    return(
<div className='SkillsPageContainer'>
    <h3>Skills</h3>
    <FontAwesomeIcon
    icon ={faChevronLeft}
    id='ChevronBackIcon'
    onClick ={()=> setPage('DataForm')}
    />
    <div className='FirstBlock'>
        <button className='addButton'> + Add</button>
    </div>
    <div className='SecondBlockSkill'>
     <div className='inputField'>
      <label htmlFor='skilllName'>Skill Name</label>
            <input type='text'
            name='skillName'
            id='skillName'
            value={user.Skills.SkillsName}
            onChange={(e)=> handleChange('Skills', 'SkillsName', e.target.value)}
            />
       
      </div>
    <div className='inputField'>
         <select className='proficiency' onChange={(e)=> handleChange('Skills', 'Proficiency', e.target.value)}>
            <option value='' disabled selected>Proficiency</option>
            <option value='Basic'>Basic</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
            <option value='Expert'>Expert</option>
         </select>
        </div>     
    </div>
   
</div>
    )
}
export default SkillsPage