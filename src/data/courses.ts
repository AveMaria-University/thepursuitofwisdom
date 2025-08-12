// Central course data & helpers
// Future: integrate CMS or database. Keep static for now.

export interface CourseSection {
	order: number;
	title: string;
	summary: string;
	duration?: string; // mm:ss
	type?: 'video' | 'reading' | 'quiz' | 'discussion';
	completed?: boolean; // future state flag
	videoUrl?: string; // Dropbox link for video lessons
	resourceUrl?: string; // static asset (PDF, etc.)
}

export interface Course {
	id: number;
	slug: string;
	professor: string; // uppercase label
	professorDisplay?: string; // nicer display (capitalization, titles)
	title: string;
	image: string; // primary/card image
	heroImage?: string; // optional distinct hero image
	heroBackgroundImage?: string; // optional background image for hero section
	description?: string;
	tagline?: string;
	trailerUrl?: string; // optional Dropbox trailer video
	sections?: CourseSection[]; // syllabus / outline
	presenterBio?: string;
	presenterImage?: string; // circular headshot
}

export const courses: Course[] = [
	{
		id: 1,
		slug: 'life-and-teachings-of-st-augustine',
		image: '/images/geral-course.jpg',
		professor: 'DR. GERALD BOERSMA',
		professorDisplay: 'Dr. Gerald Boersma',
		title: 'The Life and Teachings of St. Augustine',
		heroImage: '/images/geral-course.jpg',
		heroBackgroundImage: '/images/hero-backround.png',
		description: `Dive into "The Life and Teachings of St. Augustine" with Dr. Gerald Boersma, esteemed Professor of Theology at Ave Maria University. An expert on Augustine and Thomas Aquinas, Dr. Boersma's course illuminates Augustine's transformative theology and influential writings. Leveraging insights from his acclaimed book, "Augustine’s Early Theology of Image," and numerous scholarly works, Dr. Boersma offers a captivating exploration of Augustine's life and legacy. This course provides a concise yet profound journey through the teachings of one of Christianity’s pivotal figures, guided by a leading authority in the field.`,
		trailerUrl: 'https://www.dropbox.com/scl/fi/4d5s9zqikr4e5yoa6d5r1/Boersma-Trailer.mp4?rlkey=v6ezog7uu7hq3fhg8umjtzoe9&st=4l5soiwe&dl=0',
		sections: [
			{ order: 1, title: 'Who Was Augustine?', summary: 'Discover the significance of who Augustine was.', duration: '08:26', type: 'video', completed: true, videoUrl: 'https://www.dropbox.com/scl/fi/9tn2f27pp055pv8jlncdw/Boersma-Course-1-v2.mp4?rlkey=rxndk9s88z3clfkpluyt1jape&st=ex6cr40z&dl=0' },
			{ order: 2, title: 'Augustine’s Influences', summary: 'Key figures and ideas that shaped Augustine.', duration: '13:20', type: 'video', completed: true, videoUrl: 'https://www.dropbox.com/scl/fi/jd09twk525wivvby506gf/Boersma-Course-2-v2.mp4?rlkey=5tuujjydqj4pwi3th757uixq4&st=wtjj2t4a&dl=0' },
			{ order: 3, title: 'Augustine’s Theology and His Antagonists', summary: 'Context of debates and theological development.', duration: '20:40', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/ejffzvnc97r34wdufp5hg/Boersma-Course-3-v2.mp4?rlkey=dj370ow4xjf035k3mjef9mizm&st=sv60guzr&dl=0' },
			{ order: 4, title: 'The Theology of the Confessions', summary: 'Exploring themes and structure of Confessions.', duration: '09:40', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/ag8hudm9nk5i5f09yo49k/Boersma-Course-4-v2.mp4?rlkey=16k14tk5xy871wrystpfwgh4d&st=c1o4w7c3&dl=0' },
			{ order: 5, title: 'The Theology of the City of God', summary: 'Political theology and the two cities.', duration: '17:38', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/stm81ukypzi33p0h6ptlf/Boersma-Course-5-v2.mp4?rlkey=7aku4tdh1puwrk0gfawbnz024&st=xpnsrzgl&dl=0' },
			{ order: 6, title: 'The Theology of De Trinitate', summary: 'Understanding Augustine’s Trinitarian theology.', duration: '05:55', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/174h20b40zual404vohve/Boersma-Course-6-v2.mp4?rlkey=w49dilyroqz0qrnvbmf7p3n6g&st=7qbrd59w&dl=0' },
			{ order: 7, title: 'Discussion Guide', summary: 'Prompts for reflection and group engagement.', type: 'discussion' }
		]
		,
		presenterBio: 'Gerald P. Boersma is Professor of Theology at Ave Maria University and Humboldt Fellow at the University of Tübingen. Boersma is a Catholic systematic theologian whose writings focus especially on the thought of Augustine and Thomas Aquinas. He is author of "Augustine\'s Early Theology of Image" (Oxford, 2016) and numerous essays as journal articles and book chapters devoted to theology, philosophy, and literary criticism. Prior to coming to Ave Maria University, he taught for five years at St. Bonaventure University. He has held fellowships at the Villanova University and the University of Tübingen.',
		presenterImage: '/images/geral-course.jpg'
	},
	{ id: 2, slug: 'athletics-and-the-virtues', image: '/images/patterson-course.jpg', heroImage: '/images/patterson-course.jpg', professor: 'COACH JOE PATTERSON', professorDisplay: 'Coach Joe Patterson', title: 'Athletics and the Virtues' },
	{ id: 3, slug: 'pro-life-rights-natural-law-and-catholic-thought', image: '/images/McGuire-course.jpg', heroImage: '/images/McGuire-course.jpg', professor: 'DR. SEANA MCGUIRE (SEGRUE)', professorDisplay: 'Dr. Seana McGuire (Segrue)', title: 'Pro-life: Rights Natural Law, and Catholic Thought' },
	{ id: 4, slug: 'rise-of-american-politics', image: '/images/Michael-course.jpg', heroImage: '/images/Michael-course.jpg', professor: 'DR. MICHAEL BREIDENBACH', professorDisplay: 'Dr. Michael Breidenbach', title: 'The Rise of American Politics' },
	{
		id: 5,
		slug: 'catholic-bioethics-current-issues',
		image: '/images/DIann-course.jpg',
		heroImage: '/images/DIannPort-Enhanced-SR.jpg',
		professor: 'DR. DIANN ECRET',
		professorDisplay: 'Dr. Diann Ecret',
		title: 'Catholic Bioethics: Current Issues',
		description: `Catholic Bioethics: Current Issues\n\nJourney into an illuminating exploration of faith and vocation with Dr. DiAnn Ecret in her enlightening online course, “Catholic Bioethics: Current Issues.” Artfully combining insights from her 30-year nursing and healthcare career, Dr. Ecret delves into the essence of what it means to embody Christ’s compassion, particularly in caring for the vulnerable and sick. This course tackles the vital concern of moral decision making in an increasingly secularized nursing landscape, guided by the timeless wisdom of the Gospel.\n\nJoin Dr. Ecret as she shares her invaluable experiences, offering a unique understanding of what it truly means to embrace a Catholic identity in the healthcare field, while serving as a beacon of Christ-like compassion.`,
		sections: [
			{ order: 1, title: 'The Call to Serve the Sick', summary: 'Answering the vocation to care for the vulnerable.', duration: '25:49', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/qsibbwio3k1p1sfxxxkav/DE-Course-1-Bryan.mp4?rlkey=g6q6z8d7sff0onmdb458bg73g&st=zxef6672&dl=0' },
			{ order: 2, title: 'Prenatal Diagnosis', summary: 'Moral discernment and challenges in prenatal contexts.', duration: '42:01', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/57os8lip0aprflte949jq/DE-Course-2-Bryan.mp4?rlkey=2lhejlel2ieqwo0cvyk2n9qtt&st=vqy6la3h&dl=0' },
			{ order: 3, title: 'The Certainty of Human Life', summary: 'Dignity and inviolability of human life.', duration: '24:19', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/op1gazkuq4fi4hh07pqli/DE-Course-3-Bryan.mp4?rlkey=0t60jzhd4hf6kvj1mourr0wx5&st=bcl0jrwq&dl=0' },
			{ order: 4, title: 'Outline and Additional Resources', summary: 'Catholic Bioethics Guidebook.', type: 'reading', resourceUrl: '/courses/catholic-bioethics-current-issues/guide.pdf' }
		],
		presenterBio: 'Dr. DiAnn Ecret, an alumnus of Our Lady of Lourdes School of Nursing, Wilmington University, and Villanova University, completed her Ph.D. in healthcare ethics at Duquesne University. With 37 years of diverse clinical nursing experience, and over two decades in nursing management and education, Dr. Ecret currently teaches at Ave Maria University and serves as a part-time ethicist at the National Catholic Bioethics Center.\n\nShe plays a crucial role in Ave Maria University\'s Institutional Review Board (IRB) committee and serves as an ethics consultant for Be Not Afraid, in addition to her work with Life Perspectives\' Health Care Task Force. Happily married for 35 years, Dr. Ecret and her husband, Michael, are parents to four children and grandparents to four.',
		presenterImage: '/images/DIannPort-Enhanced-SR.jpg'
	},
	{
		id: 6,
		slug: 'introduction-to-computer-science',
		image: '/images/Saverio-course.jpg',
		heroImage: '/images/Saverio-course.jpg',
		professor: 'DR. SAVERIO PERUGINI',
		professorDisplay: 'Dr. Saverio Perugini',
		title: 'An Introduction to Computer Science',
		description: `An Introduction to Computer Science\n\nJoin Dr. Saverio Perugini in his course, "An Introduction to Computer Science", as he unpacks the question "What is Computer Science?" for us.  In this introductory course, Dr. Perugini explores questions such as why study computing, what does the study of computing entail, is computing an art, science, or engineering as well as topics including artificial intelligence, the sub-areas of computer science, and the computer science curriculum at Ave Maria University. With thought-provoking discussions and practical examples, you will leave this course with an improved understanding of what computer science is and, perhaps, an interest in learning more about it. Enroll in this course and gain a well-informed perspective on computer science.`,
		sections: [
			{ order: 1, title: 'What Computer Science Is Not', summary: 'Dispelling common misconceptions about computer science.', duration: '10:11', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/bq2brlmgw62lrye5fzwvn/Saverio-Course-1-bryan.mp4?rlkey=dx45wio9o5rbel39819s42ovt&st=vw6vwc1c&dl=0' },
			{ order: 2, title: 'What Is Computer Science?', summary: 'Defining the discipline and its core concerns.', duration: '10:08', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/6wk7laoodzou1a4cqmaaz/Saverio-Course-2-bryan.mp4?rlkey=gzprvmlrwfbctk4sfgb9lkzea&st=q6m0d0v3&dl=0' },
			{ order: 3, title: 'Computational Thinking', summary: 'Abstraction, decomposition, pattern recognition, algorithms.', duration: '16:09', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/9yp5rqsklqjvzyc9riphm/Saverio-Course-3-bryan.mp4?rlkey=dfgewc8hvtuyxm4vqbm7qbx6x&st=8yx0qo0c&dl=0' },
			{ order: 4, title: 'Why Study Computer Science?', summary: 'Motivations: impact, creativity, problem solving, vocation.', duration: '08:16', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/ksy394g98rzpuee6gwzl8/Saverio-Course-4-bryan.mp4?rlkey=vcjmtmy3ahkzuvhq9a2883hm9&st=tcgoeaeu&dl=0' },
			{ order: 5, title: 'Studying Computer Science', summary: 'What coursework and learning approaches look like.', duration: '12:52', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/10mu0kw5edqjgkgzrlpdc/Saverio-Course-5-bryan.mp4?rlkey=v2v387yqkz85ulmif1t2a3xii&st=b155au6n&dl=0' },
			{ order: 6, title: 'What is A Computer?', summary: 'Conceptual model: input, processing, storage, output.', duration: '19:22', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/g8salk11qdd4nlhgk0bfz/Saverio-Course-6-bryan.mp4?rlkey=8bg13jlbnz47mptxlnc2xx5x3&st=ha2i1ktl&dl=0' },
			{ order: 7, title: 'Programming Languages and Programming', summary: 'Languages, paradigms, and translating ideas into code.', duration: '17:26', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/fugij3bwmq20jiygdhywi/Saverio-Course-7-BRYAN.mp4?rlkey=jaiix20u45lcge10jg4ilbxxw&st=h4lhik94&dl=0' },
			{ order: 8, title: 'Areas of Computer Science', summary: 'Survey of major subfields within CS.', duration: '11:48', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/aiwmb3yv8ws0oqz1jy8xo/Saverio-Course-8-BRYAN.mp4?rlkey=gxymevbp9ibuzdkmvqr9ce8f7&st=rx5xgy28&dl=0' },
			{ order: 9, title: 'The Computer Science Curriculum at Ave Maria University', summary: 'Overview of program structure and course progression.', duration: '09:51', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/lxkx7ymbft90ccx7mpwdf/Saverio-Course-9-BRYAN.mp4?rlkey=w1yjjciv8bpk6guvniydtl5ua&st=syo76hpv&dl=0' },
			{ order: 10, title: 'Artificial Intelligence', summary: 'Fundamentals, promises, and limitations of AI.', duration: '23:27', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/2px0i57wjvezot237xccl/Saverio-Course-10-BRYAN.mp4?rlkey=hb7tzfjiribg0n3fmuu2imqv4&st=4i44mxfx&dl=0' },
			{ order: 11, title: 'Computing: Art, Science, or Engineering?', summary: 'Exploring the interdisciplinary nature of computing.', duration: '22:47', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/borgjmz1amja1d1vfrax8/Saverio-Course-11-BRYAN.mp4?rlkey=yeytl3g3ui2ph1gd73gwedkor&st=2eq50mtc&dl=0' },
			{ order: 12, title: 'Computer Science and The Liberal Arts', summary: 'Integrating computing within a liberal arts tradition.', duration: '10:04', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/gedggvx96xtomjtpac4fi/Saverio-Course-12-BRYAN.mp4?rlkey=ov7cu2gnnw3aoxwu5ehadhf4x&st=ra9quk9d&dl=0' },
			{ order: 13, title: 'Careers In Computer Science', summary: 'Vocational paths and industry opportunities.', duration: '04:37', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/a8n7k7obx2hk3pyuku57m/Saverio-Course-13-BRYAN.mp4?rlkey=kmkfhydbiomp6jrdggew2qww8&st=ywq38gk0&dl=0' },
			{ order: 14, title: 'Conclusion', summary: 'Recap and encouragement for further exploration.', duration: '08:22', type: 'video', videoUrl: 'https://www.dropbox.com/scl/fi/aepgq88dufqs4t1mxart9/Saverio-Course-14-Closing-BRYAN.mp4?rlkey=ft03w4le7o0uswy531encvvfr&st=sa6ydrwb&dl=0' },
			{ order: 15, title: 'Outline and Additional Resources', summary: 'Computer Science Guidebook.', type: 'reading', resourceUrl: '/courses/introduction-to-computer-science/guide.pdf' }
		]
	},
	{ id: 7, slug: 'introduction-to-mariology', image: '/images/mark-course.jpg', heroImage: '/images/mark-course.jpg', professor: 'DR. MARK MIRAVALLE', professorDisplay: 'Dr. Mark Miravalle', title: 'Introduction to Mariology' },
	{ id: 8, slug: 'introduction-to-sacramental-theology', image: '/images/Roger-course.jpg', heroImage: '/images/RogerNuttBCam-Enhanced-SR.jpg', professor: 'DR. ROGER NUTT', professorDisplay: 'Dr. Roger Nutt', title: 'Introduction to Sacramental Theology' },
	{ id: 9, slug: 'stewarding-the-environment', image: '/images/sheperd-course.jpg', heroImage: '/images/ShephardBCam-Enhanced-SR.jpg', professor: 'DR. SAMUEL SHEPARD', professorDisplay: 'Dr. Samuel Shepard', title: 'Stewarding the Environment' },
	{ id: 10, slug: 'foundation-of-america-us-constitution', image: '/images/McGuire-course.jpg', heroImage: '/images/SeannaBCam-Enhanced-SR.jpg', professor: 'DR. SEANA MCGUIRE (SEGRUE)', professorDisplay: 'Dr. Seana McGuire (Segrue)', title: 'The Foundation of America: U.S. Constitution' },
	{ id: 11, slug: 'genius-of-gk-chesterton', image: '/images/Joseph-course.jpg', heroImage: '/images/JosephPearceBCam-Enhanced-SR.jpg', professor: 'JOSEPH PEARCE', professorDisplay: 'Joseph Pearce', title: 'The Genius of G.K. Chesterton' },
	{ id: 12, slug: 'genius-of-jrr-tolkien', image: '/images/Joseph-course.jpg', heroImage: '/images/JosephPearceBCam-Enhanced-SR.jpg', professor: 'JOSEPH PEARCE', professorDisplay: 'Joseph Pearce', title: 'The Genius of J.R.R. Tolkien' },
	{ id: 13, slug: 'philosophy-of-motherhood', image: '/images/James-course.jpg', heroImage: '/images/JaniceBCam-Enhanced-SR.jpg', professor: 'DR. JANICE CHIK BREIDENBACH', professorDisplay: 'Dr. Janice Chik Breidenbach', title: 'The Philosophy of Motherhood' },
	{ id: 14, slug: 'wisdom-of-cs-lewis', image: '/images/Dauphinais-course.jpg', heroImage: '/images/DauphinaisBCam-Enhanced-SR.jpg', professor: 'DR. MICHEL DAUPHINAIS', professorDisplay: 'Dr. Michel Dauphinais', title: 'The Wisdom of C.S. Lewis' },
	{ id: 15, slug: 'wisdom-of-fulton-sheen', image: '/images/James-course.jpg', heroImage: '/images/James-course.jpg', professor: 'DR. JAMES PATTERSON', professorDisplay: 'Dr. James Patterson', title: 'The Wisdom of Fulton Sheen' },
	{ id: 16, slug: 'virtues-and-leadership-in-business', image: '/images/Durand-course.jpg', heroImage: '/images/Durand-course.jpg', professor: 'DAVE DURAND', professorDisplay: 'Dave Durand', title: 'The Virtues and Leadership in Business' }
];

export function getCourseBySlug(slug: string) {
	return courses.find(c => c.slug === slug);
}

export function getCoursePaths() {
	return courses.map(c => ({ slug: c.slug }));
}

