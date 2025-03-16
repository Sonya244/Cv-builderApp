import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Input from './Input';
const EducationPage = ({user, setPage, handleChange, years}) =>{
    return(
      <div className='EducationPageContainer'>
<h3>Education</h3>
<FontAwesomeIcon 
id='ChevronBackIcon'
icon ={faChevronLeft}
onClick={()=> setPage('DataForm')}/>
<div className='FirstBlock'>
    <button className='addButton'>+ Add Education</button>
</div>
<div className='SecondBlockEd'>
    <form>
        <div className='inputField'>
        <label htmlFor='uni'>University/School</label>
        <input type='text'
         name='uni' 
         id='uni' 
         value={user.Education.University}
         onChange ={(e) => handleChange('Education','University', e.target.value)}
         />
        </div>
        <div className='inputField'>
            <label htmlFor='degree'>Degree</label>
            <input type='text'
            name='degree'
            id='degree'
            value={user.Education.Degree}
            onChange ={(e) => handleChange('Education', 'Degree', e.target.value)}/>
        </div>
        </form>
        <div className='ThirdBlockEd'>
            <form>
            <h5>Start Date</h5>
            <div>
            <select className='month' onChange={(e) => handleChange('Education', 'startMonth', e.target.value)}>
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
            <select className='year' onChange= {(e) => handleChange('Education', 'endMonth', e.target.value)}>
                <option value='' disabled selected>Year</option>
                {years.map((year) =>(
                    <option value= {year} key ={year}>{year}</option>
                ))

                }
            </select>
            </div>
            <h5>End Date</h5>
            <div>
                <select className='month'>
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
                <select className='year'>
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
      )
}
export default EducationPage