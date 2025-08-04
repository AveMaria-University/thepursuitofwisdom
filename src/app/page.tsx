import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pursuit-header text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-crimson italic">
                The Pursuit <span className="text-sm font-normal">of</span> Wisdom
              </h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
                NEW FROM AVE MARIA UNIVERSITY
              </p>
              <h2 className="text-6xl md:text-7xl font-bold font-crimson text-pursuit-navy leading-tight mb-6">
                Calling Those Who Seek Wisdom
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Introducing The Pursuit of Wisdom, a series of short courses presented by the faculty of Ave
                Maria University. Each professor will provide practical wisdom and insights around important
                topics and themes to help you lead a more inspired, meaningful, and joyful life.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-pursuit-gold text-white font-medium rounded hover:bg-yellow-600 transition-colors">
                  SIGN UP
                </button>
                <button className="px-8 py-3 border-2 border-pursuit-gold text-pursuit-gold font-medium rounded hover:bg-pursuit-gold hover:text-white transition-colors">
                  LOG IN
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Faculty Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg aspect-square">
                {/* Placeholder for faculty image */}
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Faculty Image</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg aspect-square">
                {/* Placeholder for faculty image */}
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Faculty Image</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg aspect-video relative">
                {/* Placeholder for video */}
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-0 h-0 border-l-8 border-l-pursuit-navy border-y-6 border-y-transparent ml-1"></div>
                    </div>
                    <span className="text-white font-semibold">WATCH THE TRAILER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
