import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const PersonalDPage = ({user , setUser, setPage}) => {
  
    return (
        <div className="PersonalPageContainer">
            <div className='topBar'>
            <h3>Personal Details</h3>
            <FontAwesomeIcon icon={faChevronLeft} id='ChevronBackIcon' onClick={() => setPage('DataForm')}/>
                </div>
            <div className="FirstBlock">
                <form>
                   <div className='inputField'>
                    <label htmlFor ='name' > First Name </label>
                    <input type ='text' name ='name' id='name' value={user.FirstName} onChange={e => setUser({...user, FirstName: e.target.value})}/>
                    </div>
                    <div className='inputField'>
                   <label htmlFor ='last-name'>Last Name</label>
                   <input type ='text' name ='last-name' id='last-name' value={user.LastName} onChange={e => setUser({...user, LastName: e.target.value})}/>
                   </div>
                   <div className='inputField'>
                   <label htmlFor ='job-title'>Job Title</label>
                   <input type ='text' name ='job-title' id='job-title' value={user.JobTitle} onChange={e => setUser({...user, JobTitle: e.target.value})}/>
                   </div>
                </form>
            </div>
            <div className='SecondBlock'>
                <h4>Contact Details</h4>
                <form id='secondBlockForm'>
                    <div className='inputField'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input type = 'tel' name='phoneNumber' id='phoneNumber' value ={user.contactDetails.phoneNumber} onChange={e => setUser({...user, contactDetails:{...user.contactDetails, phoneNumber: e.target.value}})}></input>
                    </div>
                    <div className='inputField'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' name='email' id='email' value ={user.contactDetails.Email} onChange = {e => setUser({...user, contactDetails:{...user.contactDetails, Email : e.target.value}})}></input>
                    </div>
                    <div className='inputField'>
                        <label htmlFor='website'>Personal Website</label>
                        <input type='text' name='website' id='website' value={user.contactDetails.webSite} onChange = {e => setUser({...user, contactDetails:{...user.contactDetails, webSite: e.target.value}})}></input>
                    </div>
                </form>
            </div>
            <div className='ThirdBlock'>
                <h4>Location</h4>
                <div className = 'formCluster'>
                <div className='inputField'>
                <label htmlFor='city'>City</label>
                <input type='text' name ='city' id='city' value ={user.Location.City} onChange={e => setUser({...user, Location:{...user.Location, City: e.target.value}})}></input>
                </div>
                <div className='inputField'>
                <label htmlFor='country'>Country</label>
                <input type='text' name='country' id='country' value ={user.Location.Country} onChange={e=> setUser({...user, Location:{...user.Location, Country: e.target.value}})}></input>
                </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalDPage