export type User = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    contactDetails: {
        phoneNumber: string;
        email: string;
        webSite: string;
    };
    Location: {
        city: string;
        country: string;
    };
    Experience: Experience[];
    Education: Education[];
    Skills: Skill[];
    Languages: Language[];
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
    proficiency: string;
};

export type Language = {
    language: string;
    proficiency: string;
};
type setUser = React.Dispatch<React.SetStateAction<User>>

export type PageProps = {
    setPage?: (page: string) => void;
    user: User;
    setUser?: setUser;
    handleChange?: (section: string, index: number, field: string, value: string) => void;
    years?: number[];
    addField?: (section: string, newField: any) => void;
    deleteSection?: (section: string, index: number) => void;
}

export type DataFormProps = {
    setPage: (page: string) => void;
};

export type CvFieldsProps = {
    user?: User;
}

