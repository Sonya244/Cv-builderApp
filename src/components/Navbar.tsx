import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { User } from './types';

type NavBarProps = {
    user: User
}
const Navbar: React.FC<NavBarProps> = ({ user }) => {
    return (
        <div className="NavBar">
            <div className="Title">
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.jobTitle}</p>
            </div>
            <div className="Contacts">
                <p><FontAwesomeIcon icon={faPhone} className='Icon' /> {user.contactDetails.phoneNumber}</p>
                <p><FontAwesomeIcon icon={faEnvelope} className='Icon' /> {user.contactDetails.email}</p>
                <p><FontAwesomeIcon icon={faLocationDot} className='Icon' /> {user.location.city}, {user.location.country}</p>
            </div>
        </div>
    )
}
export default Navbar