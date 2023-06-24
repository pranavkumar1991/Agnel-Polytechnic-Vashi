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
	semester: string, 
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
	}, 
    electronics_and_computer: {
		name: 'Artificial Intelligence & Machine Learning (AN)',
		HOD: 'Mrs. Raji MP',
        intake: 60,
        duration: 3,
		about:
			'The rapid pace of technological change and the diversity of modern applications require a broad educational background and a lifelong commitment to learning new and specialised skills. ELECTRONICS & COMPUTER ENGINEERING programme combines the core elements of Electronics Engineering with those of Computer Science, the intellectual discipline underlying all aspects of software development',
		vision:
			'Be a premier Electronics and Computer Engineering Department creating competent diploma engineers, focusing on holistic development with Indian values and ethics',
		mission: [
			'To impart industry oriented quality education and training in the field of Electronics and Computer Engineering.',
			'To provide value based education and opportunities for holistic development.',
			'To inculcate awareness towards societal needs and environmental issues.'
		],
		teachingFaculty: [
			{ name: 'Mrs. Raji MP', profilePicture: '' },
			{ name: 'Mrs. Jewel Samanta', profilePicture: '' },
			{ name: 'Mrs. Ms. Suhasini David Sekhar', profilePicture: '' },
			{ name: 'Mr. Umesh Mhapankar', profilePicture: '' },
			{ name: 'Mrs. Ms. Archana Wasule', profilePicture: '' },
			{ name: 'Ms. Sonali Sherigar', profilePicture: '' },
			{ name: 'Ms. Varsha Meshram', profilePicture: '' },
			{ name: 'Ms. Varsha Meshram', profilePicture: '' },
			{ name: 'Mr. Amol Surywanshi', profilePicture: '' },
		],
		nonTeachingFaculty: [
			{ name: 'Mr. Vishwas Patil', profilePicture: '' },
			{ name: 'Mr. Manoj Parthe', profilePicture: '' },
			{ name: 'Mr. Kishor Barve', profilePicture: '' },
			{ name: 'MR. Avadhut Ghadge', profilePicture: '' }
		],
        academicToppers: [],
        studentAchievements: [],
		laboratories: [
			{ name: 'DBMS ', image: ' ' },
			{ name: ' ', image: ' ' },
			{ name: ' ', image: ' ' },
			{ name: ' ', image: ' ' }
		],
        projects: [
            {name: 'INTRUSION DETECTION SYSTEM', image: ''},
            {name: 'PLC CONTROLLED WATER SUPPLY SYSTEM', image: ''},
            {name: 'HAPTIC ROBOTIC ARM', image: ''},
        ],
        workshops: [
            {name: 'RELIANCE JIO TRAINING', image: ''},
            {name: 'PLC TRAINING PROGRAM', image: ''},
            {name: 'ELECTRONIC WORKSHOP', image: ''},
            {name: 'EMBEDDED SYSTEM WORKSHOP', image: ''},
        ],

        industrialVisits: [
            {name: 'GOKUL DAIRY, VASHI.- 3rd Sem', image:''},
            {name: 'Visit to water filtration plant, Nashik. – 6th SEM – PP', image:''},
            {name: 'INDUSTRY-INSTITUTE INTERACTION BY SAGE AUTOMATION', image: ''},
            {name: 'INDUSTRIAL VISIT DOORDARSHAN KENDRA PUNE', image: ''},
            {name: 'INDUSTRIAL VISIT TO AKASHWANI', image: ''},
            {name: 'INDUSTRIAL VISIT TO VITAL ELECTRONICS', image: ''},
            {name: 'INDUSTRIAL VISIT TO PRADEEP METALS', image: 'INDUSTRIAL VISIT TO PORTAL ENGG.'},
        ],
        expertLectures: [
            {name: 'Mrs. Mohini Kher, FCRIT, Vashi. – Renewable Energy Sources', image: ''},
            {name: 'Dr. Ankita Shahasane, Director, ROANA Industries, Nerul – Motivational Speech', image: ''},
            {name: 'ENTREPRENEURSHIP DEVELOPMENT PROGRAMME BY MR. PRASAD MENON', image:''},
            {name: 'EXPERT LECTURE ON POWER ELECTRONICS AND APPLICATIONS BY Dr. SUSHIL THALE', image: ''},
            {name: 'Expert lecture on power electronics & applications by Dr. Mini RAjeev', image: ''}, 
            {name: 'PERSONALITY DEVELOPMENT PROGRAMMES BY MR. KENNETH S. FROM INFOSYS', image: ''},
            {name: 'PERSONALITY DEVELOPMENT PROGRAMMES BY MR. VIPUL BHAGAT FROM L & T', image: ''},
            {name: 'EXPERT LECTURE ON ARDUINO BY MR. ROHAN STANLEY', image: ''},
            {name: 'Seminar On Industrial Automation By SAGE Automation', image: ''}
        ]

	}, 
    automobile_engineering: {
		name: 'Automobile Engineering (AE)',
		HOD: 'Mr. Nitin Kulkarni',
        intake: 60,
        duration: 3,
		about:
			'Automobile engineering is a branch of vehicle engineering, incorporating elements of mechanical, electrical, electronic, software and safety engineering as applied to the design, manufacture and operation of all types of vehicles and their respective engineering subsystems.',
		vision:
			'Be a progressive Automobile Engineering Department Creating Engineers with high caliber and ethics, contributing to the development of Nation.',
		mission: [
			'Impart technical knowledge and skills in the field of Automobile Engineering, focusing on latest trends in the industry.',
			'Establish and enhance interaction with industries for training, internship and entrepreneurial activities.',
			'Educate the students for effective communication, teamwork and leadership for their overall development.'
		],
		teachingFaculty: [
			{ name: 'Mr. Nitin Kulkarni', profilePicture: '' },
			{ name: 'Mr. Dinesh Patil', profilePicture: '' },
			{ name: 'Ms. Sonal Kapadia', profilePicture: '' },
			{ name: 'Mr. Umesh Mhapankar', profilePicture: '' },
			{ name: 'Ms. Cige Lious', profilePicture: '' },
			{ name: 'Mr. Satish Endole', profilePicture: '' },
			{ name: 'Mr. Syed Mohammed Arif', profilePicture: '' },
			{ name: 'Mr. Mahesh Vhanmane', profilePicture: '' },
		],
		nonTeachingFaculty: [
			{ name: 'Mr. Paresh Ranpura', profilePicture: '' },
			{ name: 'Mr. Ganesh Rathod', profilePicture: '' },
		],
        academicToppers: [
			{name: 'KOTECHA PRATHAMESH', profilePicture: '', percentage: 90.38, semester: 'AE-6-I'},
			{name: 'KOLI TANISH', profilePicture: '', percentage:79.29, semester: 'AE-4-I'},
			{name: 'PATIL VIRENDRA', profilePicture: '', percentage: 79.5, semester: 'AE-2-I'}, 
			{name: 'SODHI RAJVEER SINGH', profilePicture: '', percentage: 87.68, semester: 'AE-6-I'}, 
			{name: 'MEHTA SAHIL', profilePicture: '', percentage: 78.71, semester: 'AE-4-I'},
			{name: 'POOJARI HARSHITH', profilePicture: '', percentage: 76, semester: 'AE-2-I' },

		],
        studentAchievements: [],
		laboratories: [
			{ name: 'Engineering Mechanics Laboratory', image: ' ' },
			{ name: 'Engine lab ', image: ' ' },
			{ name: 'Transmission lab', image: ' ' },
			{ name: 'Automobile Lab', image: ' ' }
		],
        projects: [
            {name: 'Diesel Motorcycle fabrication', image: ''},
            {name: 'Design & Fabrication of combined slotting, milling, and drilling machine', image: ''},
            {name: 'Electric Tricycle', image: ''},
            {name: 'Electric Wheel Chair', image: ''},

        ],
        workshops: [],

        industrialVisits: [
            {name: 'Drive Electric Expo-2022', image:''},
            {name: 'Boiler India Expo-2022', image:''},
            {name: 'PLASTIVISION EXHIBITION visit at Goregaon by staff and students', image: ''},
            {name: 'PLASTIVISION EXHIBITION visit at Goregaon by staff and students', image: ''},
            {name: 'TATA Motors Power of 6 Expo 2022', image: ''},
            {name: 'TATA Motors Power of 6 Expo 2022', image: ''},
        ],
        expertLectures: [
            {name: 'Hands-on Training on Hyundai EV', image: ''},
            {name: 'Guest lecture on Petroleum conservation( PCRA) by Mr.Santosh Dalvi', image: ''},
            {name: 'Personality development Lecture by Mrs. Rupali Hegade', image:''},
            {name: 'Guest Lecture on Introduction and development on Tyre Technology by Mr. Uday Gudsurkar', image: ''},
            {name: 'Electric Vehicle Seminar by Hyundai Motors India Ltd.By Mr. Sujoy Mishra', image: ''}, 
            {name: 'Electric Vehicle Seminar by Hyundai Motors India Ltd.By Mr. Sujoy Mishra', image: ''},
            {name: 'Seminar and Workshop on 3D Printing by Mr.Umesh and Team From MIT Introduction given by HOD of Automobile Dept.', image: ''},
            {name: 'Seminar and Workshop on 3D Printing by Mr.Umesh and Team From MIT explanation by Mr.Umesh Sir', image: ''},
            {name: 'Students learning and observing 3D printing on a 3D printer', image: ''},
            {name: 'Students learning and observing 3D printing on a 3D printer', image: ''},
            {name: 'Hyundai Training at Agnel Polytechnic Centre', image: ''},
            {name: 'Hyundai Training at HMIL Training Centre', image: ''},
        ]
        
	},
	civil_engineering: {
		name: 'Civil Engineering (CE)',
		HOD: 'Mr. Manvendra Sinha',
        intake: 60,
        duration: 3,
		about:
			'Civil Engineering is considered to be the oldest engineering discipline. It is believed to have commenced during 4000 BC in ancient Egypt and Mesopotamia when humans started to abandon the nomadic existence and make permanent settlements. It deals with the design, construction and maintenance of building, bridges, roads, canals, dams etc. Today with globalization there is an increased need for the development of infrastructure all over the world. Hence Civil Engineers are in great demand..',
		vision:
			'Be a premier department of Civil Engineering, producing ethically strong professional civil engineers to contribute in the development of the nation.',
		mission: [
			'Empower the students to become diploma civil engineers of high caliber.',
			'To provide sustained environment for learning, co-curricular and extra-curricular activities for overall personality development.',
			'To develop students with skills of employability, entrepreneurship potential and professionally ethical citize.'
		],
		teachingFaculty: [
			{ name: 'Mr. MANVENDRA SINHA', profilePicture: '' },
			{ name: 'Mr.SHASHIKANT SAWANT', profilePicture: '' },
			{ name: 'Ms. NIRMALA MASCARENHAS', profilePicture: '' },
			{ name: 'Ms. AMARPREET KAUR', profilePicture: '' },
			{ name: 'Ms.SEEMA KSHIRSAGAR', profilePicture: '' },
			{ name: 'Ms.PAPIYA BALA', profilePicture: '' },
			{ name: 'Mr.VISHAL DALVI', profilePicture: '' },
			{ name: 'Mr. LEWIS ANTHONY', profilePicture: '' },
			{ name: 'Ms.RUCHIRA SHINDE', profilePicture: '' },
		],
		nonTeachingFaculty: [
			{ name: 'Mr. Shrikant Shinde', profilePicture: '' },
			{ name: 'Mr. Lahu Surve', profilePicture: '' },
			{ name: 'Mr. Mahesh Suryavanshi', profilePicture: '' },
		],
        academicToppers: [
			{name: 'Raahil Patel', profilePicture: '', percentage: 90.84, semester: 'CE-6-I'},
			{name: 'Akash Kaulage', profilePicture: '', percentage: 81.13, semester: 'CE-4-I'},
			{name: 'Darsh Bhoir', profilePicture: '', percentage: 84.34, semester: 'AE-2-I'}, 
			{name: 'Anamay Ghangale', profilePicture: '', percentage: 90.63, semester: 'CE-6-I'}, 
			{name: 'Sartak Hande', profilePicture: '', percentage: 81.13, semester: 'CE-4-I'},
			{name: 'Sahil Dalvi', profilePicture: '', percentage: 82.32, semester: 'CE-2-I' },

		],
        studentAchievements: [],
		laboratories: [
			{ name: 'Concrete Technology Lab', image: ' ' },
			{ name: 'Strength of Materials Lab', image: ' ' },
			{ name: 'Strength of Materials Lab', image: ' ' },
			{ name: 'Survey Lab', image: ' ' },
			{ name: 'Geo technical Lab', image: ' ' },
			{ name: 'Environmental Lab', image: ' ' },
		],
        projects: [
            {name: 'Smog Free Tower', image: ''},
        ],
        workshops: [
			{name: 'STAAD PRO WORKSHOP', image:''}
		],

        industrialVisits: [
            {name: 'Visit to Ankur Theme Park to  understand Solid Waste Management – 2020', image:''},
            {name: 'Visit to upcoming RCC Building in Nerul  – Nov 2022', image:''},
            {name: 'Visit to water treatment plant, Bhandup  – 2022', image: ''},
            {name: 'Visit to Sewage treatment plant at Seawoods – 2022', image: ''},
            {name: 'Visit to RCC Construction site of an institutional building, Vashi – 2019', image: ''},
            {name: 'Visit to Shivaji hospital, Kalwa for understanding Vermicomposting -2019', image: ''},
            {name: 'Site visit of Culvert, Navi Mumbai 2022', image: ''},
            {name: 'New building under construction – 4TH SEM – PP', image: ''},
            {name: 'Road and Bridge site visit March 2022', image: ''},
        ],
        expertLectures: [
            {name: 'Lecture on Entrepreneurship skills 2018 – 2019', image: ''},
            {name: 'Expert Lecture by UltraTech 2019 – 2020', image: ''},
            {name: 'Lecture on Mental Well being 2019 – 2020', image:''},
            {name: 'Lecture by CADD Centre on Different Softwares in Civil Engineering', image: ''},
        ]
        
	},
	mechanical_engineering: {
		name: 'MECHANICAL ENGINEERING (ME)',
		HOD: 'Ms. Beenu Johnkutty',
        intake: 120,
        duration: 3,
		about:
			'Mechanical Engineering is an engineering discipline that involves the application of principles of science for analysis, design, manufacturing, and maintenance of mechanical systems. Mechanical engineering is one of the oldest and broadest engineering disciplines. It requires a solid understanding of core concepts including mechanics, kinematics, thermodynamics, fluid mechanics, and energy. Mechanical engineers use the core principles as well as other knowledge in the field to design and analyze motor vehicles, aircraft, heating and cooling systems, watercraft, manufacturing plants, industrial equipment and machinery, robotics, medical devices and more. The educational objectives for Mechanical Engineering programme at Agnel Polytechnic are designed to produce competent engineers who are ready to contribute effectively to the advancement of mechanical engineering field and to accommodate the needs of the community.',
		vision:
			'Be a well-recognized Mechanical Engineering department producing a blend of responsible & technically competent engineers imbibed with human values',
		mission: [
			'Impart fundamentals of Mechanical Engineering and technical skills to serve the industry and the society',
			'Organize regular interactions with industry in order to provide exposure to emerging technologies for professional development.',
			'Provide opportunities to promote organizational and leadership skills through extra-curricular and co-curricular activities.'
		],
		teachingFaculty: [
			{ name: 'Ms. Beenu Johnkutty', profilePicture: '' },
			{ name: 'Mr. Yogesh Vishwakarma', profilePicture: '' },
			{ name: 'Ms. Pratima Kokate', profilePicture: '' },
			{ name: 'Mr. Uday Gudsoorkar', profilePicture: '' },
			{ name: 'Mr. Vivek Fegade', profilePicture: '' },
			{ name: 'Mr. Milind Shrirao', profilePicture: '' },
			{ name: 'Mr. Ganesh Gawande', profilePicture: '' },
			{ name: 'Ms. Madhuri Jadhav', profilePicture: '' },
			{ name: 'Mr. Chetan Baviskar', profilePicture: '' },
			{ name: 'Mr. Premkuar P Joshi', profilePicture: '' },
			{ name: 'Mr. Momin M', profilePicture: '' },
			{ name: 'Ms. Suvarchala M', profilePicture: '' },
		],
		nonTeachingFaculty: [
			{ name: 'Mr. Mahesh Salunkhe', profilePicture: '' },
			{ name: 'Mr. Avinash Jage', profilePicture: '' },
			{ name: 'Mr. Shailesh Gawand', profilePicture: '' },
			{ name: 'Mr. Mangesh Deshmukh', profilePicture: '' },
		],
        academicToppers: [
			{name: 'Siddik Shingare', profilePicture: '', percentage: 93.33, semester: 'ME-6-I'},
			{name: 'Dvij Koli', profilePicture: '', percentage: 89.63, semester: 'ME-4-I'},
			{name: 'Varad Yande', profilePicture: '', percentage: 84.00, semester: 'ME-2-I'}, 
			{name: 'Mirdul Date', profilePicture: '', percentage: 91.22, semester: 'ME-6-I'}, 
			{name: 'Naveen Thomas', profilePicture: '', percentage: 87.25, semester: 'ME-4-I'},
			{name: 'Kishan Chaoudhari', profilePicture: '', percentage: 81.60, semester: 'ME-2-I' },
			{name: 'Pundlik Shinde', profilePicture: '', percentage: 90.78, semester: 'ME-6-I' },
			{name: 'Tanmay Ambulkar', profilePicture: '', percentage: 82.75, semester: 'ME-6-I' },
			{name: 'Ganesh Jalvi', profilePicture: '', percentage: 81.47, semester: 'ME-6-I' },
		],
        studentAchievements: [
			{name: '1st Prize in State Level Project Competition Saraswati College of Engineering, Kharghar “SCOE TECHNOTHON-2022”', image: ''},
			{name: '1st Prize in Technical Mimic Technocratz 2022-2023', image: ''},
			{name: '1st Prize in Technical Quiz Competition Technocratz 2022-2023', image: ''},
			{name: '1st Prize Technical Paper Presentation Technocratz 2022-2023', image: ''},
			{name: 'IEDSSA – Table Tennis Winner (A-1 Zonal District Level) Held at SIOT, Kharghar Dated 14/11/2022', image: ''},
			{name: 'IEDSSA- Badminton Winner (A-1 Zonal District Level) held at Government Polytechnic, Pen, Dated- 17/11/2022', image: ''},
			{name: 'IEDSSA- Basketball Winner (A-1 Zonal District Level) held at Agnel Polytechnic, Vashi Dated:- 16/11/2022', image: ''},
			{name: 'IEDSSA- Chess Winner (A-1 Zonal District Level) held at Armiet Polytechnic, Shahapur, Dated- 07/11/2022', image: ''},
			{name: 'Magnetic Maharashtra Conclave Honorable C.M. Shri Devendra Fadnavis appreciating the project “Organic Waste Composter Machine”', image: ''},
			{name: 'Honorable Education Minister Shri Vinod Tawde.', image: ''},
			{name: '1st Prize and 2nd Prize in State Level Technical Quiz Competition at Technocratz (2019-2020)', image: ''},
		],
		laboratories: [
			{ name: 'Metrology Lab', image: ' ' },
			{ name: 'Power Engineering/RAC Lab', image: ' ' },
			{ name: 'CNC Lab', image: ' ' },
			{ name: 'Hydraulics & Pneumatic Lab', image: ' ' },
			{ name: 'Metallurgy / Theory of Machine Lab', image: ' ' },
			{ name: 'Autocad Lab', image: ' ' },
		],
        projects: [
            {name: 'Adjustable Platform', image: ''},
            {name: 'Cornering Headlight', image: ''},
            {name: 'Regenerative braking', image: ''},
            {name: 'Reusing waste water', image: ''},
            {name: 'Ice Cream Maker', image: ''},
            {name: 'Solar Street Light', image: ''},
            {name: 'Water Purification Plant', image: ''},
        ],
        workshops: [
			{name: '“ANSYS Training” for Final Year Students in Collaboration with CADD Center', image:''},
			{name: '“Industrial Automation Workshop” for Second Year Students in Collaboration with PRAYAS', image:''},
			{name: 'AutoCAD and Solid Modelling” for Second Students by in House Expert Prof. Momin M', image:''},
		],
        industrialVisits: [
            {name: 'Visit to Ankur Theme Park to  understand Solid Waste Management – 2020', image:''},
            {name: 'Visit to upcoming RCC Building in Nerul  – Nov 2022', image:''},
            {name: 'Visit to water treatment plant, Bhandup  – 2022', image: ''},
            {name: 'Visit to Sewage treatment plant at Seawoods – 2022', image: ''},
            {name: 'Visit to RCC Construction site of an institutional building, Vashi – 2019', image: ''},
            {name: 'Visit to Shivaji hospital, Kalwa for understanding Vermicomposting -2019', image: ''},
            {name: 'Site visit of Culvert, Navi Mumbai 2022', image: ''},
            {name: 'New building under construction – 4TH SEM – PP', image: ''},
            {name: 'Road and Bridge site visit March 2022', image: ''},
        ],
        expertLectures: [
            {name: 'Lecture on Entrepreneurship skills 2018 – 2019', image: ''},
            {name: 'Expert Lecture by UltraTech 2019 – 2020', image: ''},
            {name: 'Lecture on Mental Well being 2019 – 2020', image:''},
            {name: 'Lecture by CADD Centre on Different Softwares in Civil Engineering', image: ''},
        ]
        
	}
};

