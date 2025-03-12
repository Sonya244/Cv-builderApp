import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';

const buttons = [{
    icon: faUser,
    text: 'Personal Details',
    
},
{
    icon: faBriefcase,
    text: 'Experience',
},
{
    icon: faGraduationCap,
    text: 'Education',
},
{
    icon: faBoltLightning,
    text: 'Skills',
} ,
{
    icon: faGlobe,
    text: 'Languages'
}
]
const pageMap = {
    'Personal Details' : 'PersonalDPage',
    'Experience' : 'ExperiencePage',
    'Education' : 'EducationPage'
}
const DataForm = ({ setPage }) => {
 return (
    <div className="DataForm">
        <h3>CV</h3>
        <div className="DataList">
        <ul>
            {buttons.map(({icon,text}, i) => 
            <Fragment key={i}> 
                <li><FontAwesomeIcon icon={icon} className='ListIcon'/>{text}<FontAwesomeIcon icon={faChevronRight} className='ListIconChevron'  onClick={() =>setPage(pageMap[text])}/></li>
                {i == buttons.length - 1 ? null :  <hr /> }
            </Fragment>
            )}
        </ul>
        </div>
    </div>
 )
}
export default DataForm