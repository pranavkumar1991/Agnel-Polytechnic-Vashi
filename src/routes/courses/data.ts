type DeptData = {
	name: string;
	HOD: string;
	about: string;
	vision: string;
	mission: string;
	teachingFaculty: Profile[];
    nonTeachingFaculty: Profile[];
    academicToppers: TopperProfile[];
    studentAchievements: ImageDescription[];
    laboratories: ImageDescription[];
    projects: ImageDescription[];
    workshops: ImageDescription[];
    industrialVisits: ImageDescription[];
    expertLectures: ImageDescription[];
    
};

type Profile = {
	name: string;
	profilePicture: string;
};

interface TopperProfile extends Profile {
    percentage: number;
}

type ImageDescription = {
    name: string;
    image: string;
}
