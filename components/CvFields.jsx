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
      <p></p>
      <p></p>
      <p></p>
      </div>
      <div className="Field">
     <h3>Skills</h3>
     <hr />
      <p></p>
      <p></p>
      <p></p>
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