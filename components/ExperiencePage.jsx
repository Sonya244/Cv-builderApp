import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Input from './Input';
const ExperiencePage = ({setPage, user, setUser}) => {

   const handleChange = (field, value)  => {
    setUser((prevUser) => ({
        ...prevUser,
        Experience: {
            ...prevUser.Experience,
            [field]: value,
        
        }
    }));
   };
    return(
<div className="ExperiencePageContainer">
    <h3>Experience</h3>
    <FontAwesomeIcon
     icon={faChevronLeft} 
     id='ChevronBackIcon'
      onClick={() => setPage('DataForm')}/>
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
             value= {user.Experience.JobTitle}
             onChange={(e) => handleChange('JobTitle', e.target.value)}
             />
            </div>
            <div className='inputField'>
            <label htmlFor='company'>Company or Project Name</label>
            <input type='text'
             name='company'
              id='company'
              value={user.Experience.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              />
            </div>
            <div className='inputField'>
            <label htmlFor='website'>Company Website</label>
            <input type='text'
             name='website'
              id='website'
              value ={user.Experience.companyWebsite}
              onChange ={(e) => handleChange('companyWebsite', e.target.value)}/>
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
                value={user.Experience.startMonth}
                onChange ={(e) => handleChange('startMonth' ,e.target.value)}
                />
                <label htmlFor='startYear'>Year</label>
                <input 
                type='number'
                name='startYear'
                id='startYear'
                value={user.Experience.startYear}
                onChange = {(e) => handleChange('startYear', e.target.value)}
                />
            </div>
            <h4>End Date</h4>
            <div className='inputField'>
                <label htmlFor='endMonth'>Month</label>
                <input type='month'
                name='endMonth'
                id='endMonth'
                value={user.Experience.endMonth}
                onChange = {(e) => handleChange('endMonth', e.target.value)}
                />
                <label htmlFor='endYear'>Year</label>
                <input type= 'number'
                name='endYear'
                id='endYear'
                value={user.Experience.endYear}
                onChange = {(e) => handleChange('endYear', e.target.value)}/>
            </div>
            </form>
        </div>
</div>
    )
}

export default ExperiencePage