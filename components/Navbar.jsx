import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({user}) =>{
    return(
<div className= "NavBar">
    <div className ="Title">
    <h2>{user.FirstName} {user.LastName}</h2>
    <p>{user.JobTitle}</p>
    </div>
    <div  className="Contacts">
        <p><FontAwesomeIcon icon={faPhone} className='Icon'/> {user.contactDetails.phoneNumber}</p>
        <p><FontAwesomeIcon icon={faEnvelope} className='Icon'/> {user.contactDetails.Email}</p>
        <p><FontAwesomeIcon icon={faLocationDot} className='Icon'/> {user.Location.City}, {user.Location.Country}</p>
    </div>
</div>
)
}
export default Navbar