export type User = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    contactDetails: {
        phoneNumber: string;
        email: string;
        webSite: string;
    };
    location: {
        city: string;
        country: string;
    };
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
};

export type Experience = {
    jobTitle: string;
    companyName: string;
    companyWebsite: string;
    startMonth: string;
    endMonth: string;
    startYear: string;
    endYear: string;
};
export type Education = {
    university: string;
    degree: string;
    startMonth: string;
    endMonth: string;
    startYear: string;
    endYear: string;
};

export type Skill = {
    skillsName: string;
    proficiency: SkillProficiency;
};

export enum SkillProficiency {
  Basic = 'Basic',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert'
}

export enum LanguagProficiency {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Fluent = 'Fluent',
    Native = 'Native'
}

export enum Section {
    Experience = 'experience',
    Education = 'education',
    Skills = 'skills',
    Languages = 'languages'
}

export type Language = {
    language: string;
    proficiency: LanguagProficiency
};


export type fieldType = Education | Language | Skill | Experience

export type PageProps = {
    setPage?: (page: string) => void;
    handleChange?: (section: Section, index: number, field: string, value: string) => void;
    years?: number[];
    addField?: (section: Section, newField: fieldType) => void;
    deleteSection?: (section: Section, index: number) => void;
}

export type DataFormProps = {
    setPage: (page: string) => void;
};


