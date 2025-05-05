import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DataSelect from './DataSelect';
import { PageProps, Section } from './types';
import AppContext from './UserContext';

const EducationPage: React.FC<PageProps> = ({
    years
}) => {
    const { user,
        addField,
        deleteSection,
        setPage,
        handleChange,
    } = useContext(AppContext)
    return (
        <div className='EducationPageContainer'>
            <div className='topBar'>
                <h3>Education</h3>
                <FontAwesomeIcon
                    id='ChevronBackIcon'
                    icon={faChevronLeft}
                    onClick={() => setPage?.('DataForm')} />
            </div>
            <div className='FirstBlock'>
                <button className='addButton'
                    onClick={() => addField?.(Section.Education, {
                        university: '',
                        degree: '',
                        startMonth: '',
                        endMonth: '',
                        startYear: '',
                        endYear: ''
                    })}>+ Add Education</button>

            </div>
            {user?.education?.map((edu, index) => (
                <div key={index}>
                    <div className='SecondBlockEd'>
                        <div className='delete'>
                            Delete
                            <FontAwesomeIcon
                                icon={faTrash}
                                id='trashIcon'
                                onClick={() => deleteSection?.(Section.Education, index)}
                            /></div>
                        <form>
                            <div className='inputField'>
                                <label htmlFor={`uni-${index}`}>University/School</label>
                                <input type='text'
                                    name={`uni-${index}`}
                                    id='uni'
                                    value={edu.university}
                                    onChange={(e) => handleChange?.(Section.Education, index, 'university', e.target.value)}
                                />
                            </div>
                            <div className='inputField'>
                                <label htmlFor={`degree-${index}`}>Degree</label>
                                <input type='text'
                                    name={`degree-${index}`}
                                    id='degree'
                                    value={edu.degree}
                                    onChange={(e) => handleChange?.(Section.Education, index, 'degree', e.target.value)} />
                            </div>
                        </form>
                        <div className='ThirdBlockEd'>
                            <form>
                                <h5>Start Date</h5>
                                <div>
                                    <DataSelect
                                        monthValue={edu.startMonth}
                                        yearValue={edu.startYear}
                                        years={years}
                                        onChangeMonth={(e) => handleChange?.(Section.Education, index, 'startMonth', e.target.value)}
                                        onChangeYear={(e) => handleChange?.(Section.Education, index, 'startYear', e.target.value)} />
                                </div>
                                <h5>End Date</h5>
                                <div className='margin-bottom-div'>
                                    <DataSelect
                                        monthValue={edu.endMonth}
                                        yearValue={edu.endYear}
                                        years={years}
                                        onChangeMonth={(e) => handleChange?.(Section.Education, index, 'endMonth', e.target.value)}
                                        onChangeYear={(e) => handleChange?.(Section.Education, index, 'endYear', e.target.value)} />
                                </div>
                            </form>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationPage