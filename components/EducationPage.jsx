import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const EducationPage = ({user, setPage, handleChange, years, addField}) =>{
    return(
      <div className='EducationPageContainer'>
<h3>Education</h3>
<FontAwesomeIcon 
id='ChevronBackIcon'
icon ={faChevronLeft}
onClick={()=> setPage('DataForm')}/>
<div className='FirstBlock'>
    <button className='addButton'
     onClick ={() => addField('Education', {
        University: '',
        Degree: '',
        startMonth: '',
        endMonth:'',
        startYear: '',
        endYear: ''
     })}>+ Add Education</button>
</div>
  {user.Education.map((edu, index) => (
    <div key={edu.id}>
<div className='SecondBlockEd'>
    <form>
        <div className='inputField'>
        <label htmlFor={`uni-${index}`}>University/School</label>
        <input type='text'
         name={`uni-${index}`} 
         id='uni' 
         value={edu.University}
         onChange ={(e) => handleChange('Education' ,index, 'University', e.target.value)}
         />
        </div>
        <div className='inputField'>
            <label htmlFor={`degree-${index}`}>Degree</label>
            <input type='text'
            name={`degree-${index}`}
            id='degree'
            value={edu.Degree}
            onChange ={(e) => handleChange('Education', index,  'Degree', e.target.value)}/>
        </div>
        </form>
        <div className='ThirdBlockEd'>
            <form>
            <h5>Start Date</h5>
            <div>
            <select className='month' value={edu.startMonth} onChange={(e) => handleChange('Education',index ,'startMonth', e.target.value)}>
                <option value= '' disabled selected>Month</option>
                <option value = '01'>January</option>
                <option value = '01'>Febuary</option>
                <option value = '01'>March</option>
                <option value = '01'>April</option>
                <option value = '01'>May</option>
                <option value = '01'>June</option>
                <option value = '01'>July</option>
                <option value = '01'>August</option>
                <option value = '01'>September</option>
                <option value = '01'>October</option>
                <option value = '01'>November</option>
                <option value = '01'>December</option>
            </select>
            <select className='year' value={edu.startYear} onChange= {(e) => handleChange('Education', index,'startYear', e.target.value)}>
                <option value='' disabled selected>Year</option>
                {years.map((year) =>(
                    <option value= {year} key ={year}>{year}</option>
                )) }
            </select>
            </div>
            <h5>End Date</h5>
            <div className='margin-bottom-div'>
                <select className='month' value={edu.endMonth} onChange ={(e)=> handleChange('Education', index, 'endMonth', e.target.value)}>
                <option value= '' disabled selected>Month</option>
                <option value = '01'>January</option>
                <option value = '01'>Febuary</option>
                <option value = '01'>March</option>
                <option value = '01'>April</option>
                <option value = '01'>May</option>
                <option value = '01'>June</option>
                <option value = '01'>July</option>
                <option value = '01'>August</option>
                <option value = '01'>September</option>
                <option value = '01'>October</option>
                <option value = '01'>November</option>
                <option value = '01'>December</option>
                </select>
                <select className='year' value={edu.endYear} onChange={(e)=> handleChange('Education', index, 'endYear', e.target.value)}>
                    <option value='' disabled selected> Year</option>
                    {years.map((year) => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
              </div>
            </form>
        </div>  
    </div>

      </div>
      
    ))}
    </div>
    )}

export default EducationPage