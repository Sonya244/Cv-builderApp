import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { PageProps, Section, SkillProficiency } from './types';
const SkillsPage: React.FC<PageProps> = ({
    setPage,
    user,
    handleChange,
    addField,
    deleteSection }) => {
    return (
        <div className='SkillsPageContainer'>
            <div className='topBar'>
                <h3>Skills</h3>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    id='ChevronBackIcon'
                    onClick={() => setPage?.('DataForm')}
                />
            </div>
            <div className='FirstBlock'>
                <button className='addButton'
                    onClick={() => addField?.(Section.Skills, {

                        skillsName: '',
                        proficiency: SkillProficiency.Basic

                    })}> + Add</button>

            </div>
            {user.skills.map((skill, index) => (
                <div key={index}>
                    <div className='delete'>
                        Delete
                        <FontAwesomeIcon
                            icon={faTrash}
                            id='trashIcon'
                            onClick={() => deleteSection?.(Section.Skills, index)}
                        /></div>
                    <div className='SecondBlockSkill'>

                        <div className='inputField'>
                            <label htmlFor={`skilllName-${index}`}>Skill Name</label>
                            <input type='text'
                                name={`skillName-${index}`}
                                id='skillName'
                                value={skill.skillsName}
                                onChange={(e) => handleChange?.(Section.Skills, index, 'skillsName', e.target.value)}
                            />

                        </div>
                        <div className='inputField'>
                            <select className='proficiency' value={skill.proficiency} onChange={(e) => handleChange?.(Section.Skills, index, 'proficiency', e.target.value)}>
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