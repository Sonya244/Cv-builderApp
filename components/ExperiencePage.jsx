import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Input from './Input';
const ExperiencePage = ({user, setUser, setPage}) => {

        const [job, setJob] = useState('');
        const [company, setCompany] = useState('');
        const [website, setWebsite] = useState('');
        const [startMonth, setStartMonth] = useState('');
        const [endMonth, setEndMonth] = useState('');
        const [startYear, setStartYear] = useState('');
        const [endYear, setEndYear] = useState('');
    
    return(
<div className="ExperiencePageContainer">
    <h3>Experience</h3>
    <FontAwesomeIcon icon={faChevronLeft} id='ChevronBackIcon' onClick={() => setPage('DataForm')}/>
        <div className='FirstBlock'>
        <button> + Add Experience </button>
        </div>
        <div className='SecondBlock'>
        <form>
            <div className='inputField'>
            <label htmlFor='job'>Job Title</label>
            <input 
            type='text' 
            name='job'
             id='job'
             value= {job}
             onChange={(e) => setJob(e.target.value)}
             />
            </div>
            <div className='inputField'>
            <label htmlFor='company'>Company or Project Name</label>
            <input type='text'
             name='company'
              id='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className='inputField'>
            <label htmlFor='website'>Company Website</label>
            <input type='text'
             name='website'
              id='website'
              value ={website}
              onChange ={(e) => setWebsite(e.target.value)}/>
            </div>
            </form>
        </div>
       
        <div className='ThirdBlock'>
            <form>
        <h4>Start Date</h4>
            <div className='inputField'>
                <label htmlFor='startMonth'>Month</label>
                <input type='month'
                name='startMonth'
                id='startMonth'
                value={startMonth}
                onChange ={(e) => setStartMonth(e.target.value)}
                />
                <label htmlFor='startYear'>Year</label>
                <input 
                type='number'
                name='startYear'
                id='startYear'
                value={startYear}
                onChange = {(e) => setStartYear(e.target.value)}
                />
            </div>
            <h4>End Date</h4>
            <div className='inputField'>
                <label htmlFor='endMonth'>Month</label>
                <input type='month'
                name='endMonth'
                id='endMonth'
                value={endMonth}
                onChange = {(e) => setEndMonth(e.target.value)}
                />
                <label htmlFor='endYear'>Year</label>
                <input type= 'number'
                name='endYear'
                id='endYear'
                value={endYear}
                onChange = {(e) => setEndYear(e.target.value)}/>
            </div>
            </form>
        </div>
</div>
    )
}

export default ExperiencePage