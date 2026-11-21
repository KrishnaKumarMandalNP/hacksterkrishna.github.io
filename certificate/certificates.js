/*
 * Certificates & achievements shown on certificates.html
 *
 * To add a certificate:
 *   1. Put the PDF in this folder, e.g. certificate/my-new-course-2026.pdf
 *      (use lowercase names without spaces).
 *   2. Add an entry below. The list is newest first.
 *
 * Fields:
 *   title     (required) name of the certificate / achievement
 *   issuer    who issued it
 *   date      e.g. "2026", "Mar 2024", "15 Jun 2021"
 *   category  "Certification", "Training", "UNDP Learning", "Award",
 *             "Experience" or "Education"
 *   file      path to the PDF, relative to the site root,
 *             e.g. "certificate/my-new-course-2026.pdf"
 *   note      optional one-line description
 *   verify    optional link where the issuer lets anyone verify it
 */
window.CERTIFICATES = [
	{
		title: "First Aid Training",
		issuer: "Nepal Red Cross Society, District Chapter Dhanusha",
		date: "3 Jun 2026",
		category: "Training",
		note: "CPR, unconsciousness, bleeding and shock, fractures, lifting and moving, wounds and bandaging.",
		file: "certificate/first-aid-nrcs-2026.pdf"
	},
	{
		title: "The AI Masterclass",
		issuer: "Dhruv Rathee Academy",
		date: "15 Feb 2026",
		category: "Training",
		file: "certificate/ai-masterclass-dhruv-rathee-2026.pdf"
	},
	{
		title: "Mainstreaming of Security eLearning Programme",
		issuer: "United Nations – Office of Human Resources",
		date: "6 Feb 2026",
		category: "UNDP Learning",
		file: "certificate/undp-mainstreaming-security-2026.pdf"
	},
	{
		title: "LGPAS Training of Trainers",
		issuer: "Ministry of Federal Affairs and General Administration, Government of Nepal",
		date: "Magh 2082 BS (Jan 2026)",
		category: "Training",
		note: "Trainer training on the Local Governance Performance Assessment System (LGPAS), held in Biratnagar, Koshi Province.",
		file: "certificate/lgpas-tot-mofaga-2082.pdf"
	},
	{
		title: "AI for Business Professionals",
		issuer: "HP LIFE – HP Foundation",
		date: "15 Jan 2026",
		category: "Certification",
		note: "AI in business, integrated AI tools, prompt crafting and ethical use.",
		file: "certificate/hp-life-ai-for-business-2026.pdf"
	},
	{
		title: "AI for Beginners",
		issuer: "HP LIFE – HP Foundation",
		date: "15 Jan 2026",
		category: "Certification",
		note: "Key AI concepts, the role of data, business applications and ethics.",
		file: "certificate/hp-life-ai-for-beginners-2026.pdf"
	},
	{
		title: "Area-Based Development Essentials: Local Focus, Global Impact",
		issuer: "UNDP Crisis Academy",
		date: "9 Nov 2025",
		category: "UNDP Learning",
		note: "Passed with a score of 100%.",
		file: "certificate/undp-area-based-development-2025.pdf",
		verify: "https://certificates.easygenerator.com/69106ab61245dd000773c39c.pdf"
	},
	{
		title: "Anti-Fraud: Fraud and Corruption Awareness and Prevention",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-anti-fraud-2025.pdf"
	},
	{
		title: "BSAFE (UN Security Awareness)",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-bsafe-2025.pdf"
	},
	{
		title: "Disability Inclusion: Building an Inclusive and Accessible United Nations",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-disability-inclusion-2025.pdf"
	},
	{
		title: "Ethics and Integrity at UNDP",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-ethics-integrity-2025.pdf"
	},
	{
		title: "Greening the Blue",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-greening-the-blue-2025.pdf"
	},
	{
		title: "Preventing Sexual Harassment and Other Prohibited Conduct",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-preventing-sexual-harassment-2025.pdf"
	},
	{
		title: "Prevention of Sexual Exploitation and Abuse (PSEA)",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-psea-2025.pdf"
	},
	{
		title: "The Gender Journey",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-gender-journey-2025.pdf"
	},
	{
		title: "UNDP Foundations",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-foundations-2025.pdf"
	},
	{
		title: "UNDP Legal Framework",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/undp-legal-framework-2025.pdf"
	},
	{
		title: "United Nations Human Rights Responsibilities (Basic)",
		issuer: "United Nations – Office of Human Resources",
		date: "9 Oct 2025",
		category: "UNDP Learning",
		file: "certificate/un-human-rights-responsibilities-2025.pdf"
	},
	{
		title: "Computer Operator — Experience Letter",
		issuer: "Ministry of Energy, Irrigation and Water Supply, Madhesh Province",
		date: "21 Feb 2025",
		category: "Experience",
		note: "Computer Operator (Assistant 5th level): IT systems and networks, IT support, official email and website, digital records management.",
		file: "certificate/experience-mowsed-madhesh-2025.pdf"
	},
	{
		title: "Samman-Patra (Certificate of Honour)",
		issuer: "Shree Ekrahi Samaj Sewa Yuva Club, Bideha Municipality, Dhanusha",
		date: "Magh 2081 BS (Jan 2025)",
		category: "Award",
		note: "Honoured on Maghe Sankranti for contributions in information technology and continued support to Ekrahi village and its youth.",
		file: "certificate/ekrahi-yuva-club-samman-2081.pdf"
	},
	{
		title: "Taekwondo Instructor — Experience Letter",
		issuer: "Mamata Taekwondo Dojang, Janakpurdham (affiliated to Nepal Taekwondo Association)",
		date: "2081-04-30 BS (Aug 2024)",
		category: "Experience",
		note: "Served as Taekwondo Instructor at the Dojang.",
		file: "certificate/taekwondo-instructor-mamata-dojang-2081.pdf"
	},
	{
		title: "Provincial Statistical Literacy Training",
		issuer: "National Statistics Office, Government of Nepal",
		date: "Baisakh 10–12, 2081 BS (Apr 2024)",
		category: "Training",
		note: "Pradesh-level statistical literacy training held in Janakpur, Dhanusha.",
		file: "certificate/statistical-literacy-nso-2081.pdf"
	},
	{
		title: "Digital Marketing Fundamentals MasterClass",
		issuer: "IIDE – Indian Institute of Digital Education",
		date: "4 Apr 2021",
		category: "Training",
		file: "certificate/digital-marketing-iide-2021.pdf"
	},
	{
		title: "Senior Full Stack Developer & Project Manager — Experience Letter",
		issuer: "Orangic Smart Technology Pvt. Ltd., Janakpurdham",
		date: "14 Jun 2021",
		category: "Experience",
		note: "17 Jul 2019 – 13 Jun 2021: led development projects and mentored junior developers.",
		file: "certificate/experience-orangic-2021.pdf"
	},
	{
		title: "PHP Developer & Project Manager — Experience Letter",
		issuer: "Grab Infotech Pvt. Ltd., Kathmandu",
		date: "16 Jul 2019",
		category: "Experience",
		note: "Nov 2017 – Jul 2019: full-stack development and project management of A1pathshala.",
		file: "certificate/experience-grab-infotech-2019.pdf"
	},
	{
		title: "Driving Training",
		issuer: "Creation Driving School, Kathmandu",
		date: "Oct – Nov 2017",
		category: "Training",
		note: "Motorcycle and car driving, general mechanics, traffic laws and rules.",
		file: "certificate/driving-training-2017.pdf"
	},
	{
		title: "Java, Web Designing & Manual Testing",
		issuer: "ABC for Java & Testing (Aradhya Group)",
		date: "3 Jul 2017",
		category: "Certification",
		note: "Course completion certificate.",
		file: "certificate/java-web-testing-abc-2017.pdf"
	},
	{
		title: "Self Defense & Centering Workshop",
		issuer: "Institute of Korean Martial Arts (IKMA)",
		date: "16 Apr 2017",
		category: "Training",
		note: "Under International Master Instructor Debabrata Dutta.",
		file: "certificate/self-defense-ikma-2017.pdf"
	},
	{
		title: "Indian Android Champ Workshop",
		issuer: "GADgets & Indian Android Champ (IAC India)",
		date: "30–31 Mar 2015",
		category: "Training",
		note: "Indian Android Championship workshop at Sambhram Institute of Technology, Bangalore.",
		file: "certificate/indian-android-champ-2015.pdf"
	},
	{
		title: "C++ Workshop",
		issuer: "ABC for Java with Pearson, Sambhram Institute of Technology",
		date: "20 Aug 2013",
		category: "Training",
		file: "certificate/cpp-workshop-2013.pdf"
	},
	{
		title: "Certified Ethical Hacking Expert (Integrated Level 1.0 & 2.0)",
		issuer: "TechDefence Pvt. Ltd. – Hacktrack, at SVCE Bangalore",
		date: "23–24 Feb 2013",
		category: "Certification",
		file: "certificate/ethical-hacking-techdefence-2013.pdf"
	},
	{
		title: "Diploma in Information Technology (12 months)",
		issuer: "Dipesh Software & Hardware Computer Training Center, Dhanusha",
		date: "Jan 2011 – Feb 2012",
		category: "Education",
		file: "certificate/dipesh-it-diploma-12-month.pdf"
	},
	{
		title: "Diploma in Information Technology (3 months)",
		issuer: "Dipesh Software & Hardware Computer Training Center, Dhanusha",
		date: "2066 BS (2009)",
		category: "Education",
		file: "certificate/dipesh-it-diploma-3-month.pdf"
	},
	{
		title: "Repairing & Assembling Training",
		issuer: "Naw Kantipur Electric Training Center, Kathmandu",
		date: "",
		category: "Training",
		note: "House wiring, motor winding, industrial wiring and equipment installation.",
		file: "certificate/naw-kantipur-electric-training.pdf"
	},
	{
		title: "Quiz Competition — 3rd Place",
		issuer: "Gramin Swavalamban Bikas Kendra, Dhanusha",
		date: "2062 BS",
		category: "Award",
		note: "Primary-level Hajiri Jawaf (quiz) competition, representing Shree Janata Rashtriya Primary School, Ekrahi.",
		file: "certificate/hajiri-jawaf-quiz-competition.pdf"
	}
];
