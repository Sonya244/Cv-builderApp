import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { PageProps } from './types';

const PersonalDPage: React.FC<PageProps> = ({
    user,
    handleChange,
    setPage }) => {

    return (
        <div className="PersonalPageContainer">
            <div className='topBar'>
                <h3>Personal Details</h3>
                <FontAwesomeIcon icon={faChevronLeft} id='ChevronBackIcon' onClick={() => setPage?.('DataForm')} />
            </div>
            <div className="FirstBlock">
                <form>
                    <div className='inputField'>
                        <label htmlFor='name' > First Name </label>
                        <input type='text' name='name' id='name' value={user.firstName} onChange={e => handleChange({ ...user, firstName: e.target.value })} />
                    </div>
                    <div className='inputField'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input type='text' name='last-name' id='last-name' value={user.lastName} onChange={e => handleChange({ ...user, lastName: e.target.value })} />
                    </div>
                    <div className='inputField'>
                        <label htmlFor='job-title'>Job Title</label>
                        <input type='text' name='job-title' id='job-title' value={user.jobTitle} onChange={e => handleChange({ ...user, jobTitle: e.target.value })} />
                    </div>
                </form>
            </div>
            <div className='SecondBlock'>
                <h4>Contact Details</h4>
                <form id='secondBlockForm'>
                    <div className='inputField'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input type='tel' name='phoneNumber' id='phoneNumber' value={user.contactDetails.phoneNumber} onChange={e => handleChange({ ...user, contactDetails: { ...user.contactDetails, phoneNumber: e.target.value } })}/>
                    </div>
                    <div className='inputField'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' name='email' id='email' value={user.contactDetails.email} onChange={e => handleChange({ ...user, contactDetails: { ...user.contactDetails, email: e.target.value } })}/>
                    </div>
                    <div className='inputField'>
                        <label htmlFor='website'>Personal Website</label>
                        <input type='text' name='website' id='website' value={user.contactDetails.webSite} onChange={e => handleChange({ ...user, contactDetails: { ...user.contactDetails, webSite: e.target.value } })}/>
                    </div>
                </form>
            </div>
            <div className='ThirdBlock'>
                <h4>Location</h4>
                <div className='formCluster'>
                    <div className='inputField'>
                        <label htmlFor='city'>City</label>
                        <input type='text' name='city' id='city' value={user.location.city} onChange={e => handleChange({ ...user, location: { ...user.location, city: e.target.value } })}/>
                    </div>
                    <div className='inputField'>
                        <label htmlFor='country'>Country</label>
                        <input type='text' name='country' id='country' value={user.location.country} onChange={e => handleChange({ ...user, location: { ...user.location, country: e.target.value } })}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalDPage