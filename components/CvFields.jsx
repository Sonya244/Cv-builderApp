const CvFields = ({user}) => {
return(

    <div className="CvFields">
        <div className="Field Experience">
     <h3>Experience</h3>
     <hr />
     <div className="divClust">
      <p>{user.Experience.JobTitle}</p>
      <span>{user.Experience.startMonth}/{user.Experience.startYear} - {user.Experience.endMonth}/{user.Experience.endYear}</span>
      </div>
      <div className="divClustTwo">
      <p>{user.Experience.companyName}</p>
      <a target='_blank' href ={user.Experience.companyWebsite.startsWith('http')? user.Experience.companyWebsite : `https://${user.Experience.companyWebsite}`} rel="noopener noreferrer">{user.Experience.companyWebsite}</a>
      </div>
      </div>
      <div className="Field">
     <h3>Education</h3>
     <hr />
     <div className='divClust'>
      <p>{user.Education.University}</p>
      <span>{user.Education.startMonth}/{user.Education.startYear} - {user.Education.endMonth}/{user.Education.endYear}</span>
      </div>
      <p>{user.Education.Degree}</p>
      </div>
      <div className="Field">
     <h3>Skills</h3>
     <hr />
     <div className='divClust'>
      <p>{user.Skills.SkillsName}</p>
      <span>{user.Skills.Proficiency}</span>
      </div>
      </div>
      <div className="Field">
     <h3>Languages</h3>
     <hr />
      <p></p>
      <p></p>
      <p></p>
      </div>
    </div>

)
}
export default CvFields