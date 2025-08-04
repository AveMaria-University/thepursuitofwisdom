import Link from 'next/link'

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
        <div>
          <h1 className="text-4xl font-bold font-crimson text-pursuit-navy mb-8">
            Courses
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our collection of wisdom-focused courses from Ave Maria University faculty.
          </p>
          
          {/* Course Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course cards will go here */}
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <span className="text-gray-500">Course Card Placeholder</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <span className="text-gray-500">Course Card Placeholder</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <span className="text-gray-500">Course Card Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
