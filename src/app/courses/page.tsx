import Link from 'next/link'
import Image from 'next/image'
import { courses } from '@/data/courses'

export default function CoursesPage() {
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
              <Link href={`/courses/${course.slug}`} className="block group">
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
              </Link>
              
              {/* Course Content - More padding */}
              <div className="p-8 text-center flex-1 flex flex-col">
                <p className="text-sm text-pursuit-gold font-semibold mb-6 uppercase tracking-wide">
                  {course.professor}
                </p>
                <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-8 leading-tight flex-1 flex items-center justify-center">
                  {course.title}
                </h3>
                <Link href={`/courses/${course.slug}`} className="w-full mt-auto">
                  <span className="block w-full px-8 py-4 bg-pursuit-gold text-white font-semibold text-xl rounded-lg hover:bg-yellow-600 transition-colors text-center">
                    ENROLL
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
