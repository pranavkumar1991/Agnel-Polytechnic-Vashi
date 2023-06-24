type DeptData = {
	name: string;
	HOD: string;
	intake: number;
	duration: number;
	about: string;
	vision: string;
	mission: string[];
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
};

export const data: Record<string, DeptData> = {
	artificial_intelligence: {
		name: 'Artificial Intelligence & Machine Learning (AN)',
		HOD: 'Mrs. Raji MP',
        intake: 60,
        duration: 3,
		about:
			'Artificial Intelligence and Machine Learning is transforming the global technology market and creating numerous jobs in the industry. AI & ML Engineering is an engineering discipline that involves learning how machines can have the ability to solve problems by using some complex algorithms which a human brain solves using natural intelligence. This specialization will help in building intelligent machines through advanced software with machine learning, analytics and visualization. This programme lays an emphasis on understanding concepts of Computer programming, Algorithms in AI, Data Structure and Algorithms, Algorithms in ML, Deep Learning Techniques involving Artificial Neural Networks, Python Programming, Natural Language Processing etc. Some of the applications of AI & ML are in speech recognition, facial recognition, language translations, robotics, healthcare, banking, E-commerce etc. With an increase in popularity, the demand for AI and Machine Learning professionals has also increased. This specialization further offers the perfect chance for students to build a career in the most demanding profession of the world.',
		vision:
			'Produce competent diploma engineers in Artificial Intelligence and Machine Learning through quality education focussed on holistic development to contribute significantly towards the national growth.',
		mission: [
			'To develop skilled professionals in the field of Artificial Intelligence and Machine Learning by providing industry oriented quality education',
			'To inculcate human values and ethical principles to cater to the societal needs.',
			'To develop technical skills in-line with current industry trends through effective teaching and industry-institute interaction'
		],
		teachingFaculty: [
			{ name: 'Mrs. Raji MP', profilePicture: '' },
			{ name: 'Mr. Pranavkumar Bhorde', profilePicture: '' },
			{ name: 'Mrs. Rashmi Dhake', profilePicture: '' },
			{ name: 'Mrs. Ashwini Baviskar', profilePicture: '' },
			{ name: 'Mrs. Ashwini Patil', profilePicture: '' }
		],
		nonTeachingFaculty: [
			{ name: '', profilePicture: '' },
			{ name: '', profilePicture: '' }
		],
        academicToppers: [],
        studentAchievements: [],
		laboratories: [
			{ name: 'DBMS ', image: ' ' },
			{ name: ' ', image: ' ' },
			{ name: ' ', image: ' ' },
			{ name: ' ', image: ' ' }
		],
        projects: [],
        workshops: [],
        industrialVisits: [],
        expertLectures: []
	}
};
