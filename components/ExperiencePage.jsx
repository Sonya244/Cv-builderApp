import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const ExperiencePage = ({setPage, user, handleChange, years, addField}) => {

    return(
<div className="ExperiencePageContainer">
    <h3>Experience</h3>
    <FontAwesomeIcon
     icon={faChevronLeft} 
     id='ChevronBackIcon'
      onClick={() => setPage('DataForm')}/>
        <div className='FirstBlock'>
         <button className='addButton'
             onClick={() => addField('Experience', {
                JobTitle: '',
                companyName: '',
                companyWebsite: '',
                startMonth: '',
                startYear: '',
                endYear: '',
             })}> + Add Experience 
             </button>
        </div>
        {user.Experience.map((exp, index)=> (
            <div key={exp.id} >
        <div className='SecondBlockEx'>
        <form>
            <div className='inputField'>
            <label htmlFor={`job-${index}`}>Job Title</label>
            <input 
            type='text' 
            name={`job-${index}`}
             id='job'
             value= {exp.JobTitle}
             onChange={(e) => handleChange('Experience', index, 'JobTitle', e.target.value)}
             />
            </div>
            <div className='inputField'>
            <label htmlFor={`company-${index}`}>Company or Project Name</label>
            <input type='text'
              name='company'
              id={`company-${index}`}
              value={exp.companyName}
              onChange={(e) => handleChange('Experience', index,'companyName', e.target.value)}
              />
            </div>
            <div className='inputField'>
            <label htmlFor={`website-${index}`}>Company Website</label>
            <input type='text'
               name='website'
               id={`website-${index}`}
               value ={exp.companyWebsite}
               onChange ={(e) => handleChange('Experience', index,'companyWebsite', e.target.value)}
               />
              </div>
            </form>
        </div>
       
        <div className='ThirdBlockEx'>
            <form>
        <h5>Start Date</h5>
            <div>
                <select className='month' value={exp.startMonth} onChange={(e)=> handleChange('Experience',index,'startMonth', e.target.value)}>
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
                <select className='year' value= {exp.startYear} onChange = {(e)=> handleChange('Experience',index, 'startYear', e.target.value)}>
                    <option value=''> Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
               </select>

            </div>
            <h5>End Date</h5>
            <div className='margin-bottom-div'>
            <select className='month' value={exp.endMonth} onChange={(e) => handleChange('Experience',index,'endMonth', e.target.value)}>
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
                <select className='year' value={exp.endYear} onChange ={(e) => handleChange('Experience',index,  'endYear', e.target.value)}>
                    <option value=''> Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}

                </select>
              </div>
            </form>
        </div>
</div>
    ))}
    </div>
    )
}

export default ExperiencePage