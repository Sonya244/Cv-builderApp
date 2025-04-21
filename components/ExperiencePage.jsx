import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DataSelect from '../components/DataSelect';
const ExperiencePage = ({ setPage, user, handleChange, years, addField, deleteSection }) => {

    return (
        <div className="ExperiencePageContainer">
            <div className='topBar'>
                <h3>Experience</h3>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    id='ChevronBackIcon'
                    onClick={() => setPage('DataForm')} />
            </div>
            <div className='FirstBlock'>
                <button className='addButton'
                    onClick={() => addField('Experience', {
                        jobTitle: '',
                        companyName: '',
                        companyWebsite: '',
                        startMonth: '',
                        startYear: '',
                        endYear: '',
                    })}> + Add Experience
                </button>

            </div>
            {user.Experience?.map((exp, index) => (
                <div key={exp.id || index} >
                    <div className='delete'>
                        Delete
                        <FontAwesomeIcon
                            icon={faTrash}
                            id='trashIcon'
                            onClick={() => deleteSection('Experience', exp.id)}
                        /></div>
                    <div className='SecondBlockEx'>

                        <form>
                            <div className='inputField'>
                                <label htmlFor={`job-${index}`}>Job Title</label>
                                <input
                                    type='text'
                                    name={`job-${index}`}
                                    id={`job-${index}`}
                                    value={exp.jobTitle}
                                    onChange={(e) => handleChange('Experience', index, 'jobTitle', e.target.value)}
                                />
                            </div>
                            <div className='inputField'>
                                <label htmlFor={`company-${index}`}>Company or Project Name</label>
                                <input type='text'
                                    name='company'
                                    id={`company-${index}`}
                                    value={exp.companyName}
                                    onChange={(e) => handleChange('Experience', index, 'companyName', e.target.value)}
                                />
                            </div>
                            <div className='inputField'>
                                <label htmlFor={`website-${index}`}>Company Website</label>
                                <input type='text'
                                    name='website'
                                    id={`website-${index}`}
                                    value={exp.companyWebsite}
                                    onChange={(e) => handleChange('Experience', index, 'companyWebsite', e.target.value)}
                                />
                            </div>
                        </form>
                    </div>

                    <div className='ThirdBlockEx'>
                        <form>
                            <h5>Start Date</h5>
                            <div>
                                <DataSelect
                                    monthValue={exp.startMonth}
                                    yearValue={exp.startYear}
                                    years={years}
                                    onChangeMonth={(e) => handleChange('Experience', index, 'startMonth', e.target.value)}
                                    onChangeYear={(e) => handleChange('Experience', index, 'startYear', e.target.value)} />

                            </div>
                            <h5>End Date</h5>
                            <div className='margin-bottom-div'>
                                <DataSelect
                                    monthValue={exp.endMonth}
                                    yearValue={exp.endYear}
                                    years={years}
                                    onChangeMonth={(e) => handleChange('Experience', index, 'endMonth', e.target.value)}
                                    onChangeYear={(e) => handleChange('Experience', index, 'endYear', e.target.value)} />
                            </div>
                        </form>
                        <hr></hr>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExperiencePage