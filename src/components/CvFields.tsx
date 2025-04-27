import React from 'react';
import { PageProps } from './types';
const CvFields: React.FC<PageProps> = ({ user }) => {
  if (!user) return <p>Loading...</p>; 

  return (
    <div className="CvFields">
      <div className="Field Experience">
        <h3>Experience</h3>
        <hr />
        {user.Experience?.map((exp, index) => (
          <div key={index}>
            <div className="divClust">
              <p>{exp.jobTitle}</p>
              <span>{exp.startMonth || 'MM'}/{exp.startYear || 'YYYY'} - {exp.endMonth || 'MM'}/{exp.endYear || 'YYYY'}</span>
            </div>
            <div className="divClustTwo">
              <p>{exp.companyName}</p>
              {exp.companyWebsite && (
                <a target='_blank' href={exp.companyWebsite.startsWith('http') ? exp.companyWebsite : `https://${exp.companyWebsite}`} rel="noopener noreferrer">
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
        {user.Education?.map((edu, index) => (
          <div key={index}>
            <div className='divClust'>
              <p>{edu.university}</p>
              <span>
                {edu.startMonth || 'MM'}/{edu.startYear || 'YYYY'} - {edu.endMonth || 'MM'}/{edu.endYear || 'YYYY'}
              </span>
            </div>
            <p>{edu.degree}</p>
          </div>
        ))}
      </div>

      <div className="Field">
        <h3>Skills</h3>
        <hr />
        {user.Skills?.map((skill, index) => (
          <div className="divClust" key={index}>
            <p>{skill.skillsName}</p>
            <span>{skill.proficiency}</span>
          </div>
        ))}
      </div>

      <div className="Field">
        <h3>Languages</h3>
        <hr />
        {user.Languages?.map((lang, index) => (
          <div className="divClust" key={index}>
            <p>{lang.language}</p>
            <span>{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvFields;