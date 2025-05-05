import React, { createContext } from "react";
import { User, Section, SkillProficiency, LanguagProficiency,  fieldType } from './types';

export const defaultUser: User = {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Programmer',
    contactDetails: {
        phoneNumber: '9999',
        email: 'johnnoe@email.com',
        webSite: 'johnDoe.com'
    },
    location: {
        city: 'Amsterdam',
        country: 'Netherlands'
    },
    experience: [
        {
            jobTitle: '',
            companyName: '',
            companyWebsite: '',
            startMonth: '',
            endMonth: '',
            startYear: '',
            endYear: ''
        }
    ],
    education: [
        {
            university: '',
            degree: '',
            startMonth: '',
            endMonth: '',
            startYear: '',
            endYear: ''
        }
    ],
    skills: [
        {
            skillsName: '',
            proficiency: SkillProficiency.Basic

        }
    ],
    languages: [
        {
            language: '',
            proficiency: LanguagProficiency.Beginner
        }
    ]
}
export type AppContextType = {
    user: User;
    setPage: React.Dispatch<React.SetStateAction<string>>
    setUser: React.Dispatch<React.SetStateAction<User>>
    handleChange: (section: Section, index: number, field: string, value: string) => void
    addField: (section: Section, newField: fieldType) => void
    deleteSection: (section: Section, index: number) => void
}

const appDefaultContext: AppContextType = {
    user: defaultUser,
    setUser: (user) => null,
    handleChange: (a, b,  c, d) => null,
    setPage: (str) => null,
    addField: (a, b) => null,
    deleteSection: (a, b) => null

}

const AppContext: React.Context<AppContextType> = createContext(appDefaultContext)

export default AppContext