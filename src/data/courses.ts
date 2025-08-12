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
}

export interface Course {
	id: number;
	slug: string;
	professor: string; // uppercase label
	professorDisplay?: string; // nicer display (capitalization, titles)
	title: string;
	image: string; // primary/card image
	heroImage?: string; // optional distinct hero image
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
	{ id: 2, slug: 'athletics-and-the-virtues', image: '/images/patterson-course.jpg', professor: 'COACH JOE PATTERSON', professorDisplay: 'Coach Joe Patterson', title: 'Athletics and the Virtues' },
	{ id: 3, slug: 'pro-life-rights-natural-law-and-catholic-thought', image: '/images/McGuire-course.jpg', professor: 'DR. SEANA MCGUIRE (SEGRUE)', professorDisplay: 'Dr. Seana McGuire (Segrue)', title: 'Pro-life: Rights Natural Law, and Catholic Thought' },
	{ id: 4, slug: 'rise-of-american-politics', image: '/images/Michael-course.jpg', professor: 'DR. MICHAEL BREIDENBACH', professorDisplay: 'Dr. Michael Breidenbach', title: 'The Rise of American Politics' },
	{ id: 5, slug: 'catholic-bioethics-current-issues', image: '/images/DIann-course.jpg', professor: 'DR. DIANN ECRET', professorDisplay: 'Dr. Diann Ecret', title: 'Catholic Bioethics: Current Issues' },
	{ id: 6, slug: 'introduction-to-computer-science', image: '/images/Saverio-course.jpg', professor: 'DR. SAVERIO PERUGINI', professorDisplay: 'Dr. Saverio Perugini', title: 'An Introduction to Computer Science' },
	{ id: 7, slug: 'introduction-to-mariology', image: '/images/mark-course.jpg', professor: 'DR. MARK MIRAVALLE', professorDisplay: 'Dr. Mark Miravalle', title: 'Introduction to Mariology' },
	{ id: 8, slug: 'introduction-to-sacramental-theology', image: '/images/Roger-course.jpg', professor: 'DR. ROGER NUTT', professorDisplay: 'Dr. Roger Nutt', title: 'Introduction to Sacramental Theology' },
	{ id: 9, slug: 'stewarding-the-environment', image: '/images/sheperd-course.jpg', professor: 'DR. SAMUEL SHEPARD', professorDisplay: 'Dr. Samuel Shepard', title: 'Stewarding the Environment' },
	{ id: 10, slug: 'foundation-of-america-us-constitution', image: '/images/McGuire-course.jpg', professor: 'DR. SEANA MCGUIRE (SEGRUE)', professorDisplay: 'Dr. Seana McGuire (Segrue)', title: 'The Foundation of America: U.S. Constitution' },
	{ id: 11, slug: 'genius-of-gk-chesterton', image: '/images/Joseph-course.jpg', professor: 'JOSEPH PEARCE', professorDisplay: 'Joseph Pearce', title: 'The Genius of G.K. Chesterton' },
	{ id: 12, slug: 'genius-of-jrr-tolkien', image: '/images/Joseph-course.jpg', professor: 'JOSEPH PEARCE', professorDisplay: 'Joseph Pearce', title: 'The Genius of J.R.R. Tolkien' },
	{ id: 13, slug: 'philosophy-of-motherhood', image: '/images/James-course.jpg', professor: 'DR. JANICE CHIK BREIDENBACH', professorDisplay: 'Dr. Janice Chik Breidenbach', title: 'The Philosophy of Motherhood' },
	{ id: 14, slug: 'wisdom-of-cs-lewis', image: '/images/Dauphinais-course.jpg', professor: 'DR. MICHEL DAUPHINAIS', professorDisplay: 'Dr. Michel Dauphinais', title: 'The Wisdom of C.S. Lewis' },
	{ id: 15, slug: 'wisdom-of-fulton-sheen', image: '/images/James-course.jpg', professor: 'DR. JAMES PATTERSON', professorDisplay: 'Dr. James Patterson', title: 'The Wisdom of Fulton Sheen' },
	{ id: 16, slug: 'virtues-and-leadership-in-business', image: '/images/Durand-course.jpg', professor: 'DAVE DURAND', professorDisplay: 'Dave Durand', title: 'The Virtues and Leadership in Business' }
];

export function getCourseBySlug(slug: string) {
	return courses.find(c => c.slug === slug);
}

export function getCoursePaths() {
	return courses.map(c => ({ slug: c.slug }));
}

