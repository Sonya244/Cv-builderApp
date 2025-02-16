const CvFields = ({user}) => {
return(

    <div className="CvFields">
        <div className="Field">
     <h3>Experience</h3>
     <hr />
      <p>{user.Experience.JobTitle}</p>
      <p>{user.Experience.companyName}</p>
      <p>{user.Experience.companyWebsite}</p>
      
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