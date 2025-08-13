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
	introBackgroundImage?: string; // optional background image for introduction section
	exploreImage?: string; // optional image for explore the program section
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
	{
		id: 2,
		slug: 'athletics-and-the-virtues',
		image: '/images/patterson-course.jpg',
		heroImage: '/images/patterson-course.jpg',
		heroBackgroundImage: '/images/athlete-virtues.jpg',
		exploreImage: '/images/patterson-explore.jpg',
		professor: 'COACH JOE PATTERSON',
		professorDisplay: 'Coach Joe Patterson',
		title: 'Athletics and the Virtues',
		description: `Join Coach Joe Patterson in his course, "Athletics and The Virtues", as he explores how sport and the spiritual life can either help or hinder our journey to holiness. Over his 28 years of coaching (as well as directing athletics at Ave Maria University since 2020), Patterson has worked with thousands of athletes to help them grow as sons and daughters of God AND champions in their sport. As an added bonus, Coach Patterson is joined by coaches from Ave Maria University as they share their own experience and wisdom around each virtue.`,
		sections: [
			{ order: 1, title: 'Effort, Toughness, and Love', summary: 'Foundational principles for athletic and spiritual excellence.', duration: '11:17', type: 'video' },
			{ order: 2, title: 'The Virtue of Humility', summary: 'Learning humility through competition and teamwork.', duration: '08:28', type: 'video' },
			{ order: 3, title: 'The Virtue of Generosity', summary: 'Giving of oneself for the team and others.', duration: '05:12', type: 'video' },
			{ order: 4, title: 'The Virtue of Charity', summary: 'Love for God and neighbor in athletics.', duration: '03:43', type: 'video' },
			{ order: 5, title: 'The Virtue of Patience', summary: 'Developing patience through training and competition.', duration: '07:48', type: 'video' },
			{ order: 6, title: 'The Virtue of Piety', summary: 'Reverence and devotion in athletic pursuits.', duration: '10:08', type: 'video' },
			{ order: 7, title: 'The Virtue of Chastity', summary: 'Purity and self-control in sport and life.', duration: '05:03', type: 'video' },
			{ order: 8, title: 'The Virtue of Temperance', summary: 'Moderation and balance in athletic training.', duration: '02:43', type: 'video' },
			{ order: 9, title: 'Discussion Guide', summary: 'Prompts for reflection and group discussion.', type: 'reading' }
		],
		presenterBio: 'Joe Patterson is in his 28th season as a head football coach, having served as the head coach at Ave Maria University for the past eight years. He has also served as the University\'s athletic director since 2020.\n\nCoach Patterson also taught literature for two decades, and he brings an educator\'s eye to the athletic field. He views athletics as a true training ground for virtue, especially when coupled with a robust academic education. A father of six, Coach Patterson is keenly aware of the impact that athletics can have on culture, either for ill or for good.',
		presenterImage: '/images/patterson-course.jpg'
	},
	{ 
		id: 3, 
		slug: 'pro-life-rights-natural-law-and-catholic-thought', 
		image: '/images/McGuire-course.jpg', 
		heroImage: '/images/McGuire-course.jpg', 
		heroBackgroundImage: '/images/McGuire-hero.png', 
		professor: 'DR. SEANA MCGUIRE (SEGRUE)', 
		professorDisplay: 'Dr. Seana McGuire (Segrue)', 
		title: 'Pro-Life: Rights, Natural Law, and Catholic Thought',
		description: `Embark on a journey into the philosophy and teachings of the Catholic Church on the sanctity of life through this thought-provoking course. Delve into critical discussions on natural law, the moral complexities of end-of-life issues, the Church's position on abortion, and the broader concept of being pro-human. Unravel the rich tapestry of doctrine and belief that positions the Catholic Church at the forefront of advocating for life in all its stages.

Join Dr. McGuire as she expertly guides you through this exploration, and together, you'll uncover the reasons behind the Church's unwavering pro-life stance, connecting these teachings with the challenges and opportunities presented in contemporary society.`,
		sections: [
			{ order: 1, title: 'Catholicism and Human Nature', summary: 'Understanding the Catholic view of human dignity and nature.', duration: '08:34', type: 'video' },
			{ order: 2, title: 'Life in the Early Stages', summary: 'Exploring the Church\'s teachings on life from conception.', duration: '17:33', type: 'video' },
			{ order: 3, title: 'The End of Life', summary: 'Catholic perspectives on end-of-life issues and dignity.', duration: '09:11', type: 'video' },
			{ order: 4, title: 'The Life of the Guilty', summary: 'Examining Catholic teachings on capital punishment and justice.', duration: '12:46', type: 'video' },
			{ order: 5, title: 'Life In The Every Day', summary: 'Applying pro-life principles to daily living.', duration: '10:42', type: 'video' },
			{ order: 6, title: 'Life In The Family', summary: 'Pro-life values within family life and relationships.', duration: '15:25', type: 'video' },
			{ order: 7, title: 'Life In Our Spirituality', summary: 'The spiritual dimensions of the pro-life worldview.', duration: '15:19', type: 'video' },
			{ order: 8, title: 'Being Pro-Human', summary: 'Understanding what it means to be truly pro-human.', duration: '05:50', type: 'video' },
			{ order: 9, title: 'Outline and Reflection Guide', summary: 'Course materials and reflection prompts for deeper study.', type: 'reading', resourceUrl: '/courses/pro-life-rights-natural-law-and-catholic-thought/guide.pdf' }
		]
	},
	{ 
		id: 4, 
		slug: 'rise-of-american-politics', 
		image: '/images/Michael-course.jpg', 
		heroImage: '/images/Michael-course.jpg', 
		heroBackgroundImage: '/images/riseinpolitics-hero.jpg', 
		exploreImage: '/images/politics-program.jpg',
		presenterImage: '/images/Michael-course.jpg',
		professor: 'DR. MICHAEL BREIDENBACH', 
		professorDisplay: 'Dr. Michael Breidenbach', 
		title: 'The Rise of American Politics',
		description: `Dive into the compelling history of Catholics in America with Dr. Michael Breidenbach's course, "The Rise of American Politics." Uncover the vital role Catholics played in founding the United States and explore their dual loyalty to America and the Holy See, despite doubts about their fidelity. With Dr. Breidenbach's expertise to guide you, examine the rich history of Catholics in America and their dedication to both religious and national identities.

Join this captivating journey through the emergence of American politics from a distinctly Catholic perspective.`,
		presenterBio: `Dr. Michael Breidenbach is an associate professor of history at Ave Maria University, specializing in American politics, religion, and law. He authored "Our Dear-Bought Liberty" (Harvard University Press, 2021), a runner-up for the Journal of the American Revolution's 2022 Book of the Year Award. Dr. Breidenbach co-edited "The Cambridge Companion to the First Amendment and Religious Liberty" (Cambridge University Press, 2020) and has been published in esteemed publications. He is a fellow of the Royal Historical Society, he has held research positions at institutions including Princeton University and Oxford University, and made appearances on national media. Dr. Breidenbach earned his Ph.D. from King's College, Cambridge, and resides in Southwest Florida with his family.`,
		sections: [
			{ order: 1, title: 'Catholics as the Founders', summary: 'Exploring the role Catholics played in founding the United States.', duration: '18:23', type: 'video' },
			{ order: 2, title: 'Catholics and the Constitution', summary: 'Understanding Catholic influence on the U.S. Constitution.', duration: '21:31', type: 'video' },
			{ order: 3, title: 'Catholics in American Society', summary: 'Examining Catholic integration into American social fabric.', duration: '25:02', type: 'video' }
		]
	},
	{
		id: 5,
		slug: 'catholic-bioethics-current-issues',
		image: '/images/DIann-course.jpg',
		heroImage: '/images/DIannPort-Enhanced-SR.jpg',
		heroBackgroundImage: '/images/bioethics-hero.jpg',
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
		heroBackgroundImage: '/images/computer-hero.jpeg',
		exploreImage: '/images/computer-hero.jpeg',
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
		],
		presenterBio: `Dr. Saverio Perugini is a mathematics and computer science professor at Ave Maria University. With a Ph.D. in computer science from Virginia Tech, he previously held a tenured professor position at the University of Dayton for 18 years. Dr. Perugini's research interests include information retrieval, human- computer interaction, and programming languages. He has published numerous scholarly papers and co-authored a laboratory manual through an IUSE grant from the National Science Foundation. In 2023, he published a programming languages textbook and is currently working on three book manuscripts. As a senior member of the ACM and IEEE Computer Society, he joined Ave Maria University in the fall of 2022 to establish and lead the computer science program.`,
		presenterImage: '/images/Saverio-course.jpg'
	},
	{ 
		id: 7, 
		slug: 'introduction-to-mariology', 
		image: '/images/mark-course.jpg', 
		heroImage: '/images/mark-course.jpg', 
		heroBackgroundImage: '/images/mary-hero.png', 
		exploreImage: '/images/mary-program.jpeg',
		professor: 'DR. MARK MIRAVALLE', 
		professorDisplay: 'Dr. Mark Miravalle', 
		title: 'Introduction to Mariology',
		description: `An Introduction to the Study of Mary

Embark on a transformative journey into the heart of Mariology with Dr. Mark Miravalle's insightful course, "Introduction to Mariology." Explore the profound significance of Mary, the Mother of God, within the Catholic tradition. Delve into the four Marian Dogmas – her Divine Motherhood, Perpetual Virginity, Immaculate Conception, and Assumption – and understand their implications for our faith. Discover the profound role of Mary as our spiritual mother, guiding and interceding for us on our path to Christ. Through Dr. Miravalle's expert guidance, cultivate a deeper appreciation for Mary's unique place in salvation history and her enduring influence on the lives of believers.`,
		sections: [
			{ order: 1, title: 'Why Mary and Mariology?', summary: 'Understanding the importance and relevance of Marian studies.', duration: '13:53', type: 'video' },
			{ order: 2, title: 'The Four Marian Dogmas', summary: 'Exploring Divine Motherhood, Perpetual Virginity, Immaculate Conception, and Assumption.', duration: '22:45', type: 'video' },
			{ order: 3, title: 'Is Mary Your Mother?', summary: 'Understanding Mary\'s maternal role in the spiritual life.', duration: '23:44', type: 'video' },
			{ order: 4, title: 'The Three Great Marian Devotions', summary: 'Key devotional practices honoring the Mother of God.', duration: '24:24', type: 'video' },
			{ order: 5, title: 'The Marian Apparitions', summary: 'Examining significant apparitions of Our Lady throughout history.', duration: '23:22', type: 'video' },
			{ order: 6, title: 'Discussion Guide', summary: 'Study guide and discussion questions for deeper reflection.', type: 'reading' }
		],
		presenterBio: `Dr. Mark Miravalle earned his Sacred Theological Doctorate from the Pontifical University of St. Thomas Aquinas in Rome. He holds the Saint John Paul II Chair of Mariology at Franciscan University and the Constance Schifflin-Blum Chair of Mariology at Ave Maria University. He founded and edits Ecce Mater Tua, an international Mariology research journal, and presides over the International Marian Association, a group of over 130 theologians, bishops, clergy, and laity promoting Marian devotion and doctrine. A renowned speaker on Mariology, he has addressed numerous episcopal conferences and assisted bishops with apparition investigations. 

Dr. Miravalle has authored/edited over 20 books on Mariology and Spiritual Theology, including Meet Your Mother, Meet Your Spiritual Father, Time to Meet the Angels, and Jesus In You.`,
		presenterImage: '/images/mark-course.jpg'
	},
	{ 
		id: 8, 
		slug: 'introduction-to-sacramental-theology', 
		image: '/images/Roger-course.jpg', 
		heroImage: '/images/RogerNuttBCam-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/mary-program.jpeg',
		exploreImage: '/images/mary-program.jpeg',
		professor: 'DR. ROGER NUTT', 
		professorDisplay: 'Dr. Roger Nutt', 
		title: 'Introduction to Sacramental Theology',
		description: `An Introduction to Sacramental Theology

Join Dr. Roger Nutt in his course, "Introduction to Sacramental Theology," as he unveils the significance of the seven sacraments and the integral role they play in the Catholic faith journey. Amidst societal skepticism, the sacraments stand as a profound source of truth and grace, enriching our spiritual lives. With Dr. Nutt's guidance, gain a deeper understanding of sacramental theology and discover how these revered rites can offer spiritual fulfillment and enrich your faith journey.`,
		sections: [
			{ order: 1, title: 'Salvation Through the Sacraments', summary: 'Understanding how the sacraments mediate God\'s saving grace.', duration: '28:13', type: 'video' },
			{ order: 2, title: 'The Gift of Grace', summary: 'Exploring the nature and significance of sacramental grace.', duration: '25:14', type: 'video' },
			{ order: 3, title: 'Living Our Faith', summary: 'Integrating sacramental life into daily Catholic practice.', duration: '20:01', type: 'video' },
			{ order: 4, title: 'Outline and Further Reading', summary: 'Study guide and additional resources for deeper exploration.', type: 'reading' }
		],
		presenterBio: `Dr. Roger Nutt, S.T.L., S.T.D., is the provost and a professor of theology at Ave Maria University. He co-directs the Aquinas Center for Theological Renewal and is a member of the Academy of Catholic Theology. Dr. Nutt's research focuses on Christology and sacramental theology, particularly the theology of St. Thomas Aquinas. He has written three books and translated works, with publications in esteemed journals. Additionally, Dr. Nutt serves as a co-editor for multiple volumes, contributing to subjects such as Christian responses to death, Aquinas and Christology, Aquinas and the Greek Fathers, and Thomism and predestination.`,
		presenterImage: '/images/RogerNuttBCam-Enhanced-SR.jpg'
	},
	{ 
		id: 9, 
		slug: 'stewarding-the-environment', 
		image: '/images/sheperd-course.jpg', 
		heroImage: '/images/ShephardBCam-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/environment-hero.jpeg',
		introBackgroundImage: '/images/tree-background.jpeg',
		exploreImage: '/images/environment-hero.jpeg',
		professor: 'DR. SAMUEL SHEPARD', 
		professorDisplay: 'Dr. Samuel Shepard', 
		title: 'Stewarding the Environment',
		description: `Stewarding the Environment

Join Dr. Samuel Shephard as he explores the wonders of creation and our role as stewards of the earth. Discover how Catholics interact with the natural world and responsibly utilize its goods. Through practical insights and thought provoking discussions, Dr. Shephard empowers you to embrace your role as a responsible steward, nurturing a peaceful relationship between humanity and the earth.

Embark on this illuminating journey and appreciate the beauty and interconnectedness of the natural world, while learning to safeguard and cherish God's creation.`,
		sections: [
			{ order: 1, title: 'A History of Creation', summary: 'Understanding the origins and development of the natural world.', duration: '16:33', type: 'video' },
			{ order: 2, title: 'Ecological Theory', summary: 'Exploring scientific and theological approaches to ecology.', duration: '15:36', type: 'video' },
			{ order: 3, title: 'Why Should Catholics be Good Stewards of Creation?', summary: 'The Catholic foundation for environmental responsibility.', duration: '16:25', type: 'video' },
			{ order: 4, title: 'Individual Responsibility', summary: 'Personal accountability in environmental stewardship.', duration: '11:09', type: 'video' },
			{ order: 5, title: 'Everyday Stewardship', summary: 'Practical ways to care for creation in daily life.', duration: '14:54', type: 'video' },
			{ order: 6, title: 'Outline and Additional Resources', summary: 'Study guide and supplementary materials for deeper exploration.', type: 'reading' }
		],
		presenterBio: `Dr. Samuel Shephard, a biology professor at Ave Maria University, grew up in the Scottish Highlands and later worked as a commercial fisherman in Ireland, sparking his passion for fisheries science. He pursued graduate studies in the field and made significant contributions to the scientific community through his publications. More recently, he has focused on environmental stewardship and integrating sustainability with Catholic teachings. Outside of academia, he is happily married with seven children, embracing the joys of family life. Dr. Samuel Shephard embodies a spirit of scholarly exploration, merging faith and science to promote harmonious coexistence with nature.

Professional Webpage: <a href="https://www.samuelshephard.com" target="_blank" rel="noopener noreferrer" class="text-pursuit-navy hover:text-pursuit-gold transition-colors">Samuel Shephard | samuelshephard.com</a>`,
		presenterImage: '/images/ShephardBCam-Enhanced-SR.jpg'
	},
	{ 
		id: 10, 
		slug: 'foundation-of-america-us-constitution', 
		image: '/images/McGuire-course.jpg', 
		heroImage: '/images/SeannaBCam-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/foundation-hero.jpeg',
		exploreImage: '/images/mcguire-program.jpeg',
		professor: 'DR. SEANA MCGUIRE (SEGRUE)', 
		professorDisplay: 'Dr. Seana McGuire (Segrue)', 
		title: 'The Foundations of America: U.S. Constitution',
		description: `Embark on a journey exploring the U.S. Constitution, examining its key figures, pivotal events, and unpacking the vital documents from America's founding. Enrich your understanding of these historic achievements while discovering how they remain relevant and meaningful in the context of modern-day United States politics.

Join Dr. McGuire (Sugrue) as she expertly guides you through this exploration of the U.S. Constitution, providing invaluable insight into America's enduring legacy.`,
		sections: [
			{ order: 1, title: 'The Ancient and the Founders', summary: '', duration: '14:28', type: 'video' },
			{ order: 2, title: 'The Declaration of Independence and the U.S. Constitution', summary: '', duration: '15:50', type: 'video' },
			{ order: 3, title: 'The Big Picture', summary: '', duration: '18:43', type: 'video' },
			{ order: 4, title: 'The Bill of Rights', summary: '', duration: '17:28', type: 'video' },
			{ order: 5, title: 'The 14th Amendment', summary: '', duration: '16:36', type: 'video' },
			{ order: 6, title: 'The Constitution and The Supreme Court', summary: '', duration: '12:50', type: 'video' },
			{ order: 7, title: 'Conclusion', summary: '', duration: '04:33', type: 'video' },
			{ order: 8, title: 'Outline and Further Reading', summary: '', type: 'reading', resourceUrl: '/courses/foundation-of-america-us-constitution/guide.pdf' }
		],
		presenterBio: `Dr. Seana McGuire (Sugrue) is the Ambassador Michael Novak Chair of Politics at Ave Maria University and previously served as the associate director of the James Madison Program at Princeton University. With over two decades of experience, Dr. McGuire teaches constitutional law and civil liberties, specializing in separation of powers, religious liberty, marriage, civil society, and civil disobedience. As a highly regarded professor, her guidance and mentorship have aided many students in pursuing law and public service careers. She holds degrees from the University of Ottawa and McGill University and is also a proud mother of three talented young women.`,
		presenterImage: '/images/SeannaBCam-Enhanced-SR.jpg'
	},
	{ 
		id: 11, 
		slug: 'genius-of-gk-chesterton', 
		image: '/images/Joseph-course.jpg', 
		heroImage: '/images/JosephPearceBCam-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/GK-hero.jpeg',
		exploreImage: '/images/GK-hero.jpeg',
		professor: 'JOSEPH PEARCE', 
		professorDisplay: 'Joseph Pearce', 
		title: 'The Genius of G.K. Chesterton',
		description: `Embark on an enriching exploration of one of the greatest contemporary thinkers with Joseph Pearce in his online course, "The Genius of G.K. Chesterton." This fascinating journey weaves through the life, works, and enduring impact of G.K. Chesterton.

Through this course, deepen your understanding of Chesterton by delving into his intellectual legacy, his prolific works, and his unwavering influence on modern thinking. With the guidance of Joseph Pearce, uncover the inexhaustible genius that makes Chesterton an enduring icon in the landscape of contemporary thought.`,
		sections: [
			{ order: 1, title: 'His Life and Legacy', summary: '', duration: '19:10', type: 'video' },
			{ order: 2, title: 'The Essayist', summary: '', duration: '21:52', type: 'video' },
			{ order: 3, title: 'The Poet', summary: '', duration: '22:48', type: 'video' },
			{ order: 4, title: 'The Novelist', summary: '', duration: '21:05', type: 'video' },
			{ order: 5, title: 'The Apologist', summary: '', duration: '22:29', type: 'video' },
			{ order: 6, title: 'The Everlasting Man', summary: '', duration: '19:20', type: 'video' },
			{ order: 7, title: 'Outline and Additional Resources', summary: '', type: 'reading', resourceUrl: '/courses/genius-of-gk-chesterton/guide.pdf' }
		],
		presenterBio: `Prof. Joseph Pearce is a visiting professor of literature and a renowned author with many internationally acclaimed bestsellers, including works such as "The Quest for Shakespeare," "Tolkien: Man and Myth," and "C.S. Lewis and the Catholic Church." His books have been translated into multiple languages, including Spanish, Portuguese, French, Dutch, Italian, Korean, Mandarin, Croatian, and Polish. Pearce is not only an accomplished author, but also a host of two 13-part television series covering Shakespeare on EWTN, as well as a writer and presenter of documentaries discussing Catholicism in "The Lord of the Rings" and "The Hobbit." His talents extend beyond literature, with his off-Broadway performance in the verse drama, "Death Comes for the War Poets," having received critical acclaim. Pearce is a frequent participant and lecturer at various literary events held in the United States, Canada, Britain, Europe, Africa, and South America. He is also the editor of the "St. Austin Review" and series editor of the Ignatius Critical Editions. Additionally, he is a senior instructor at Homeschool Connections and senior contributor at "Imaginative Conservative and Crisis Magazine."`,
		presenterImage: '/images/JosephPearceBCam-Enhanced-SR.jpg'
	},
	{ 
		id: 12, 
		slug: 'genius-of-jrr-tolkien', 
		image: '/images/Joseph-course.jpg', 
		heroImage: '/images/JosephPearceBCam-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/GK-hero.jpeg',
		exploreImage: '/images/GK-hero.jpeg',
		professor: 'JOSEPH PEARCE', 
		professorDisplay: 'Joseph Pearce', 
		title: 'The Genius of J.R.R. Tolkien',
		description: `Embark on a captivating journey into the world of J.R.R. Tolkien with Joseph Pearce as your guide. Join "The Genius of J.R.R. Tolkien" course and delve into the rich tapestry of Tolkien's life, theology, and timeless works. Uncover the hidden treasures of "The Lord of the Rings" as you explore the connections between its characters and biblical figures, revealing profound symbolism and spiritual insight.

Discover the enchanting tale of "The Hobbit" and its wisdom on humanity's relationship with God. Pearce's illuminating course offers valuable insights into Tolkien's narratives, deepening your understanding of the human experience and our connection to the divine.`,
		sections: [
			{ order: 1, title: 'Who is Tolkien?', summary: '', duration: '20:48', type: 'video' },
			{ order: 2, title: 'A MythUnderstood Man', summary: '', duration: '23:15', type: 'video' },
			{ order: 3, title: 'The Hobbit as a Parable', summary: '', duration: '19:17', type: 'video' },
			{ order: 4, title: 'Divine Comedy and Divine Epic', summary: '', duration: '19:03', type: 'video' },
			{ order: 5, title: 'Finding Christ in the Lord of the Rings', summary: '', duration: '18:54', type: 'video' },
			{ order: 6, title: 'Finding Ourselves in the Lord of the Rings', summary: '', duration: '23:03', type: 'video' },
			{ order: 7, title: 'Outline and Additional Resources', summary: '', type: 'reading', resourceUrl: '/courses/genius-of-jrr-tolkien/guide.pdf' }
		],
		presenterBio: `Prof. Joseph Pearce is a visiting professor of literature and a renowned author with many internationally acclaimed bestsellers, including works such as "The Quest for Shakespeare," "Tolkien: Man and Myth," and "C.S. Lewis and the Catholic Church." His books have been translated into multiple languages, including Spanish, Portuguese, French, Dutch, Italian, Korean, Mandarin, Croatian, and Polish. Pearce is not only an accomplished author, but also a host of two 13-part television series covering Shakespeare on EWTN, as well as a writer and presenter of documentaries discussing Catholicism in "The Lord of the Rings" and "The Hobbit." His talents extend beyond literature, with his off-Broadway performance in the verse drama, "Death Comes for the War Poets," having received critical acclaim. Pearce is a frequent participant and lecturer at various literary events held in the United States, Canada, Britain, Europe, Africa, and South America. He is also the editor of the "St. Austin Review" and series editor of the Ignatius Critical Editions. Additionally, he is a senior instructor at Homeschool Connections and senior contributor at "Imaginative Conservative and Crisis Magazine."`,
		presenterImage: '/images/JosephPearceBCam-Enhanced-SR.jpg'
	},
	{ 
		id: 13, 
		slug: 'philosophy-of-motherhood', 
		image: '/images/JanicePort-Enhanced-SR.jpg', 
		heroImage: '/images/JanicePort-Enhanced-SR.jpg', 
		heroBackgroundImage: '/images/motherhood-hero.jpeg',
		exploreImage: '/images/motherhood-hero.jpeg',
		professor: 'DR. JANICE CHIK BREIDENBACH', 
		professorDisplay: 'Dr. Janice Chik Breidenbach', 
		title: 'The Philosophy of Motherhood',
		description: `Join Dr. Janice Chik Breidenbach in a profound exploration of motherhood, gaining unique insights into human nature and existence. Discover the evolving societal perceptions of motherhood and unravel its mysteries. Drawing from philosophical wisdom, Dr. Breidenbach will guide you in recognizing the beauty and significance of ordinary moments and how motherhood leads us to God. Explore how motherhood shapes our understanding of ourselves, others, and the world.

Embark on a remarkable journey to gain invaluable insight into the importance of motherhood as a gateway to understanding our place in God's plan.`,
		sections: [
			{ order: 1, title: 'Motherhood as a Philosophy', summary: '', duration: '06:00', type: 'video' },
			{ order: 2, title: 'Control, Commodification, and Careerism', summary: '', duration: '23:08', type: 'video' },
			{ order: 3, title: 'The Theology of Motherhood', summary: '', duration: '11:54', type: 'video' },
			{ order: 4, title: 'Outline and Additional Resources', summary: '', type: 'reading', resourceUrl: '/courses/philosophy-of-motherhood/guide.pdf' }
		],
		presenterBio: `Dr. Janice Chik Breidenbach is an associate professor of philosophy at Ave Maria University with research affiliations at Oxford and UPenn. She is working on a book entitled "How Many We Are: Assembly Among the Expressive Freedoms" and has published numerous articles on the topic. Dr. Breidenbach teaches and speaks on logic, metaphysics, aesthetics, ethics, human action, and the philosophy of motherhood. She holds degrees in philosophy, public policy, and music performance. Outside of work, Dr. Breidenbach enjoys homemaking, wine tasting, and playing music for her son, Paul Thomas.`,
		presenterImage: '/images/JanicePort-Enhanced-SR.jpg'
	},
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

