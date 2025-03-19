const CvFields = ({user}) => {
  return(
    <div className="CvFields">
        <div className="Field Experience">
          <h3>Experience</h3>
           <hr />
           {user.Experience.map((exp, index) => (
            <div key={index}>
             <div className="divClust">
              <p>{exp.JobTitle}</p>
      <span>{exp.startMonth || 'MM'}/{exp.startYear || 'YYYY'} - {exp.endMonth || 'MM'}/{exp.endYear || 'YYYY'}</span>
      </div>
      <div className="divClustTwo">
      <p>{exp.companyName}</p>
         {exp.companyWebsite && (<a target='_blank' href ={exp.companyWebsite.startsWith('http')? exp.companyWebsite : `https://${exp.companyWebsite}`}
     rel="noopener noreferrer">
         {exp.companyWebsite}
        </a>
     )}
     </div>
      </div>
           ))}
           </div>
        
       
      <div className="Field">
     <h3>Education</h3>
     <hr />
     {user.Education.map((edu, index) =>(
         <div key={index}>
           <div className='divClust'>
             <p>{edu.University}</p>
            <span>
                {edu.startMonth || 'MM'}/{edu.startYear || 'YYYY'} - {edu.endMonth || 'MM'}/{edu.endYear || 'YYYY'}
                </span>
      </div>
      <p>{edu.Degree}</p>
      </div>
     ))}
     </div>
    
                <div className="Field">
                    <h3>Skills</h3>
                    <hr />
                    {user.Skills.map((skill, index) => (
                        <div className="divClust" key={index}>
                            <p>{skill.SkillsName}</p>
                            <span>{skill.Proficiency}</span>
                        </div>
                    ))}
                </div>
            
   
      <div className="Field">
     <h3>Languages</h3>
     <hr />
     {user.Languages.map((lang, index) => (
       <div className="divClust" key={index}>
          <p>{lang.Language}</p>
          <span>{lang.Proficiency}</span>
       </div>
     ))}
      </div>
    
    </div>
);
};
export default CvFields