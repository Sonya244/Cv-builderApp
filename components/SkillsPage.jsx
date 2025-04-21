import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DataSelect from './DataSelect';
const SkillsPage = ({ setPage, user, handleChange, addField, deleteSection }) => {
    return (
        <div className='SkillsPageContainer'>
            <div className='topBar'>
                <h3>Skills</h3>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    id='ChevronBackIcon'
                    onClick={() => setPage('DataForm')}
                />
            </div>
            <div className='FirstBlock'>
                <button className='addButton'
                    onClick={() => addField('Skills', {

                        skillsName: '',
                        proficiency: ''

                    })}> + Add</button>

            </div>
            {user.Skills.map((skill, index) => (
                <div key={skill.id}>
                    <div className='delete'>
                        Delete
                        <FontAwesomeIcon
                            icon={faTrash}
                            id='trashIcon'
                            onClick={() => deleteSection('Skills', skill.id)}
                        /></div>
                    <div className='SecondBlockSkill'>

                        <div className='inputField'>
                            <label htmlFor={`skilllName-${index}`}>Skill Name</label>
                            <input type='text'
                                name={`skillName-${index}`}
                                id='skillName'
                                value={skill.skillsName}
                                onChange={(e) => handleChange('Skills', index, 'skillsName', e.target.value)}
                            />

                        </div>
                        <div className='inputField'>
                            <select className='proficiency' value={skill.proficiency} onChange={(e) => handleChange('Skills', index, 'proficiency', e.target.value)}>
                                <option value='' disabled>Proficiency</option>
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