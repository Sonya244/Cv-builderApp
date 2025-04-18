import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const EducationPage = ({user, setPage, setUser,  handleChange, years, addField, deleteSection}) =>{
    return(
      <div className='EducationPageContainer'>
        <div className='topBar'>
<h3>Education</h3>
<FontAwesomeIcon 
id='ChevronBackIcon'
icon ={faChevronLeft}
onClick={()=> setPage('DataForm')}/>
</div>
<div className='FirstBlock'>
    <button className='addButton'
     onClick ={() => addField('Education', {
        university: '',
        degree: '',
        startMonth: '',
        endMonth:'',
        startYear: '',
        endYear: ''
     })}>+ Add Education</button>

</div>
  {user?.Education?.map((edu, index) => (
    <div key={edu.id || index}>
<div className='SecondBlockEd'>
<div className='delete'>
             Delete
             <FontAwesomeIcon
  icon={faTrash}
  id='trashIcon'
  onClick = {() => deleteSection('Education', edu.id)}
  
/></div>
    <form>
        <div className='inputField'>
        <label htmlFor={`uni-${index}`}>University/School</label>
        <input type='text'
         name={`uni-${index}`} 
         id='uni' 
         value={edu.university}
         onChange ={(e) => handleChange('Education' ,index, 'university', e.target.value)}
         />
        </div>
        <div className='inputField'>
            <label htmlFor={`degree-${index}`}>Degree</label>
            <input type='text'
            name={`degree-${index}`}
            id='degree'
            value={edu.degree}
            onChange ={(e) => handleChange('Education', index,  'degree', e.target.value)}/>
        </div>
        </form>
        <div className='ThirdBlockEd'>
            <form>
            <h5>Start Date</h5>
            <div>
            <select className='month' value={edu.startMonth} onChange={(e) => handleChange('Education',index ,'startMonth', e.target.value)}>
                <option value= '' disabled>Month</option>
                <option value = '01'>January</option>
                <option value = '02'>February</option>
                <option value = '03'>March</option>
                <option value = '04'>April</option>
                <option value = '05'>May</option>
                <option value = '06'>June</option>
                <option value = '07'>July</option>
                <option value = '08'>August</option>
                <option value = '09'>September</option>
                <option value = '10'>October</option>
                <option value = '11'>November</option>
                <option value = '12'>December</option>
            </select>
            <select className='year' value={edu.startYear} onChange= {(e) => handleChange('Education', index,'startYear', e.target.value)}>
                <option value='' disabled>Year</option>
                {years.map((year) =>(
                    <option value= {year} key ={year}>{year}</option>
                )) }
            </select>
            </div>
            <h5>End Date</h5>
            <div className='margin-bottom-div'>
                <select className='month' value={edu.endMonth} onChange ={(e)=> handleChange('Education', index, 'endMonth', e.target.value)}>
                <option value= '' disabled>Month</option>
                <option value = '01'>January</option>
                <option value = '02'>Febuary</option>
                <option value = '03'>March</option>
                <option value = '04'>April</option>
                <option value = '05'>May</option>
                <option value = '06'>June</option>
                <option value = '07'>July</option>
                <option value = '08'>August</option>
                <option value = '09'>September</option>
                <option value = '10'>October</option>
                <option value = '11'>November</option>
                <option value = '12'>December</option>
                </select>
                <select className='year' value={edu.endYear} onChange={(e)=> handleChange('Education', index, 'endYear', e.target.value)}>
                    <option value='' disabled> Year</option>
                    {years.map((year) => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
              </div>
            </form>
            <hr></hr>
        </div>  
    </div>

      </div>
      
    ))}
    </div>
    )}

export default EducationPage