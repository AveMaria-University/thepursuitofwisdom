import Link from 'next/link'
import Image from 'next/image'

export default function CoursesPage() {
  // Course data with your specified images and exact content
  const courses = [
    {
      id: 1,
      image: '/images/geral-course.jpg',
      professor: 'DR. GERALD BOERSMA',
      title: 'The Life and Teachings of St. Augustine',
    },
    {
      id: 2,
      image: '/images/patterson-course.jpg',
      professor: 'COACH JOE PATTERSON',
      title: 'Athletics and the Virtues',
    },
    {
      id: 3,
      image: '/images/McGuire-course.jpg',
      professor: 'DR. SEANA MCGUIRE (SEGRUE)',
      title: 'Pro-life: Rights Natural Law, and Catholic Thought',
    },
    {
      id: 4,
      image: '/images/Michael-course.jpg',
      professor: 'DR. MICHAEL BREIDENBACH',
      title: 'The Rise of American Politics',
    },
    {
      id: 5,
      image: '/images/DIann-course.jpg',
      professor: 'DR. DIANN ECRET',
      title: 'Catholic Bioethics: Current Issues',
    },
    {
      id: 6,
      image: '/images/Saverio-course.jpg',
      professor: 'DR. SAVERIO PERUGINI',
      title: 'An Introduction to Computer Science',
    },
    {
      id: 7,
      image: '/images/mark-course.jpg',
      professor: 'DR. MARK MIRAVALLE',
      title: 'Introduction to Mariology',
    },
    {
      id: 8,
      image: '/images/Roger-course.jpg',
      professor: 'DR. ROGER NUTT',
      title: 'Introduction to Sacramental Theology',
    },
    {
      id: 9,
      image: '/images/sheperd-course.jpg',
      professor: 'DR. SAMUEL SHEPARD',
      title: 'Stewarding the Environment',
    },
    {
      id: 10,
      image: '/images/McGuire-course.jpg',
      professor: 'DR. SEANA MCGUIRE (SEGRUE)',
      title: 'The Foundation of America: U.S. Constitution',
    },
    {
      id: 11,
      image: '/images/Joseph-course.jpg',
      professor: 'JOSEPH PEARCE',
      title: 'The Genius of G.K. Chesterton',
    },
    {
      id: 12,
      image: '/images/Joseph-course.jpg',
      professor: 'JOSEPH PEARCE',
      title: 'The Genius of J.R.R. Tolkien',
    },
    {
      id: 13,
      image: '/images/James-course.jpg',
      professor: 'DR. JANICE CHIK BREIDENBACH',
      title: 'The Philosophy of Motherhood',
    },
    {
      id: 14,
      image: '/images/Dauphinais-course.jpg',
      professor: 'DR. MICHEL DAUPHINAIS',
      title: 'The Wisdom of C.S. Lewis',
    },
    {
      id: 15,
      image: '/images/James-course.jpg',
      professor: 'DR. JAMES PATTERSON',
      title: 'The Wisdom of Fulton Sheen',
    },
    {
      id: 16,
      image: '/images/Durand-course.jpg',
      professor: 'DAVE DURAND',
      title: 'The Virtues and Leadership in Business',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pursuit-header text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold font-crimson italic">
                The Pursuit <span className="text-sm font-normal">of</span> Wisdom
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/courses" className="hover:text-yellow-200 transition-colors">
                COURSES
              </Link>
              <Link href="#" className="hover:text-yellow-200 transition-colors">
                GET THE APP
              </Link>
              <Link href="#" className="hover:text-yellow-200 transition-colors">
                DONATE
              </Link>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-pursuit-navy text-white rounded hover:bg-opacity-90 transition-colors">
                SIGN IN
              </button>
              <button className="px-6 py-2 bg-white text-pursuit-navy rounded hover:bg-gray-100 transition-colors">
                SIGN UP FREE
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
            ENROLL AT NO COST
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-crimson text-pursuit-navy">
            Explore the Courses
          </h1>
        </div>
        
        {/* Course Grid - 3 columns on large screens, responsive, larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
              {/* Course Image - Larger aspect ratio */}
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.professor}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Course Content - More padding */}
              <div className="p-8 text-center flex-1 flex flex-col">
                <p className="text-sm text-pursuit-gold font-semibold mb-6 uppercase tracking-wide">
                  {course.professor}
                </p>
                <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-8 leading-tight flex-1 flex items-center justify-center">
                  {course.title}
                </h3>
                <button className="w-full px-8 py-4 bg-pursuit-gold text-white font-semibold text-xl rounded-lg hover:bg-yellow-600 transition-colors mt-auto">
                  ENROLL
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
