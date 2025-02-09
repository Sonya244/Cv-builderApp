import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const PersonalDPage = ({user , setUser, setPage}) => {
  
    return (
        <div className="PersonalPageContainer">
            <h3>Personal Details</h3>
            <FontAwesomeIcon icon={faChevronLeft} id='ChevronBackIcon' onClick={() => setPage('DataForm')}/>
            <div className="FirstBlock">
                <form>
                    <label htmlFor ='name' > First Name </label>
                    <input type ='text' name ='name' id='name' value={user.FirstName} onChange={e => setUser({...user, FirstName: e.target.value})}/>
                   <label htmlFor ='last-name'>Last Name</label>
                   <input type ='text' name ='last-name' id='last-name' value={user.LastName} onChange={e => setUser({...user, LastName: e.target.value})}/>
                   <label htmlFor ='job-title'>Job Title</label>
                   <input type ='text' name ='job-title' id='job-title' value={user.JobTitle} onChange={e => setUser({...user, JobTitle: e.target.value})}/>
                </form>
            </div>
        </div>
    )
}
export default PersonalDPage