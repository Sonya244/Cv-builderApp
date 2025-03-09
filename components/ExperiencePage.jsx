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
   const currentYear = new Date().getFullYear();//get current date/get exact year
   const years = Array.from({ length: 20}, (_, i) => currentYear - i);//new array create, mapping in reverse
    return(
<div className="ExperiencePageContainer">
    <h3>Experience</h3>
    <FontAwesomeIcon
     icon={faChevronLeft} 
     id='ChevronBackIcon'
      onClick={() => setPage('DataForm')}/>
        <div className='FirstBlockEx'>
        <button> + Add Experience </button>
        </div>
        <div className='SecondBlockEx'>
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
       
        <div className='ThirdBlockEx'>
            <form>
        <h5>Start Date</h5>
            <div>
                <select className='month' onChange={(e)=> handleChange('startMonth', e.target.value)}>
                    <option  value = '' disabled selected>Month</option>
                    <option value='01'>January</option>
                    <option value='02'>Febuary</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                    
                </select>
                <select className='year' onChange = {(e)=> handleChange('startYear', e.target.value)}>
                    <option value=''> Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}

                </select>

            </div>
            <h5>End Date</h5>
            <div>
            <select className='month' onChange={(e) => handleChange('endMonth', e.target.value)}>
            <option  value = '' disabled selected>Month</option>
                    <option value='01'>January</option>
                    <option value='02'>Febuary</option>
                    <option value='03'>Mach</option>
                    <option value='04'>Apil</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                    
                </select>
                <select className='year' onChange ={(e) => handleChange('endYear', e.target.value)}>
                    <option value=''> Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}

                </select>
     
            </div>
            </form>
        </div>
</div>
    )
}

export default ExperiencePage