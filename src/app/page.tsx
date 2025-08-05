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

      {/* Main Content - Hero Section - FULL VIEWPORT HEIGHT */}
      <main className="bg-gray-100 py-8 min-h-screen flex items-center">
        <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 w-full">
          {/* HUGE White rounded container - MAXIMUM WIDTH */}
          <div className="bg-white rounded-3xl shadow-lg p-20 lg:p-24 max-w-[95vw] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center min-h-[900px]">
              {/* Left Content */}
              <div>
                <div className="mb-8">
                  <p className="text-lg uppercase tracking-wide text-gray-600 mb-8">
                    NEW FROM AVE MARIA UNIVERSITY
                  </p>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-crimson text-pursuit-navy leading-tight mb-10">
                    Calling Those Who Seek Wisdom
                  </h2>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-12">
                    Introducing The Pursuit of Wisdom, a series of short courses presented by the faculty of Ave
                    Maria University. Each professor will provide practical wisdom and insights around important
                    topics and themes to help you lead a more inspired, meaningful, and joyful life.
                  </p>
                  <div className="flex space-x-6">
                    <button className="px-12 py-5 bg-pursuit-gold text-white font-medium text-xl rounded-lg hover:bg-yellow-600 transition-colors">
                      SIGN UP
                    </button>
                    <button className="px-12 py-5 border-2 border-pursuit-gold text-pursuit-gold font-medium text-xl rounded-lg hover:bg-pursuit-gold hover:text-white transition-colors">
                      LOG IN
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - MASSIVE Faculty Images Grid with Convergence Animation */}
              <div className="grid grid-cols-2 gap-6 h-[900px] relative">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  {/* Top Left - Janice Portrait - Arrives SECOND */}
                  <div className="rounded-2xl overflow-hidden shadow-lg flex-1 animate-converge-top-left">
                    <Image
                      src="/images/JanicePort-Enhanced-SR.jpg"
                      alt="Dr. Janice"
                      width={500}
                      height={700}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Bottom Left - Dauphinais Portrait - Arrives THIRD */}
                  <div className="rounded-2xl overflow-hidden shadow-lg flex-1 animate-converge-bottom-left">
                    <Image
                      src="/images/DauphinaisPort-Enhanced-SR.jpg"
                      alt="Dr. Dauphinais"
                      width={500}
                      height={700}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  {/* Top Right - Joseph Pearce - Arrives FIRST */}
                  <div className="rounded-2xl overflow-hidden shadow-lg h-[280px] animate-converge-top-right">
                    <Image
                      src="/images/JosephPearceBCam-Enhanced-SR.jpg"
                      alt="Joseph Pearce"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Middle - Video Player Placeholder - APPEARS IMMEDIATELY */}
                  <div className="bg-pursuit-navy rounded-2xl relative flex-1 shadow-lg min-h-[320px] animate-fade-in-early">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-pursuit-gold rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-0 h-0 border-l-12 border-l-white border-y-10 border-y-transparent ml-1"></div>
                        </div>
                        <span className="font-semibold text-xl">WATCH THE TRAILER</span>
                        <div className="text-sm text-gray-300 mt-2">Video Player</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Right - Diann Portrait - Arrives FOURTH (LAST) */}
                  <div className="rounded-2xl overflow-hidden shadow-lg h-[280px] animate-converge-bottom-right">
                    <Image
                      src="/images/DIannPort-Enhanced-SR.jpg"
                      alt="Dr. Diann"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Less Information, More Wisdom Section */}
      <section className="bg-pursuit-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-crimson mb-2">
              Less Information, More Wisdom
            </h2>
            <div className="w-24 h-1 bg-pursuit-gold mx-auto mb-12"></div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                In today's fast-paced, information-driven world, we may feel overwhelmed by the constant barrage of 
                noise and data. Numbers, facts, opinions, websites, books...we can easily become burned out of the 
                joy of learning.
              </p>
              
              <p>
                The solution is to pursue wisdom. <strong>God desires for our hearts and minds to be filled with wisdom, not 
                information!</strong> Wisdom cuts through the noise, providing valuable insights and guiding us toward 
                meaningful decisions. Wisdom fills us with joy and appreciation of the good, the true, and the beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Here, Wisdom is Found Section */}
      <section className="bg-gray-100 py-20 relative overflow-hidden">
        {/* Decorative tree background */}
        <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-amber-200 to-amber-100 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-crimson text-pursuit-navy mb-8">
              Here, Wisdom is Found
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Insights from Top Catholic Scholars */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Scholar Image</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-crimson text-pursuit-navy mb-4">
                Insights from Top Catholic Scholars
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join the professors of Ave Maria University on this incredible journey...new programs are added regularly!
              </p>
            </div>

            {/* Card 2: Topics from Theology to Computer Science */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Compass Image</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-crimson text-pursuit-navy mb-4">
                Topics from Theology to Computer Science
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each beautiful video course is between 1-3 hours and broken down for on-the-go inspiration.
              </p>
            </div>

            {/* Card 3: Free to Friends of the University and Beyond */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Student Image</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-crimson text-pursuit-navy mb-4">
                Free to Friends of the University and Beyond
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thanks to our generous donors and members of the{" "}
                <a href="#" className="text-blue-500 hover:underline">Annunciation Circle</a>, 
                The Pursuit of Wisdom series is free of charge - forever!
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-4">
                Start Your Journey Today
              </h3>
            </div>
            <button className="px-12 py-4 bg-pursuit-gold text-white font-bold text-lg rounded hover:bg-yellow-600 transition-colors">
              SIGN UP FOR FREE
            </button>
          </div>
        </div>
      </section>

      {/* Explore the Courses Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
              ENROLL AT NO COST
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-crimson text-pursuit-navy">
              Explore the Courses
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1: Dr. Saverio Perugini */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Dr. Perugini Image</span>
              </div>
              <div className="p-8 text-center flex-1 flex flex-col">
                <p className="text-sm text-pursuit-gold font-semibold mb-4 uppercase tracking-wide">
                  DR. SAVERIO PERUGINI
                </p>
                <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-6 leading-tight flex-1 flex items-center justify-center">
                  An Introduction to Computer Science
                </h3>
                <button className="w-full px-8 py-4 bg-pursuit-gold text-white font-semibold text-lg rounded-lg hover:bg-yellow-600 transition-colors mt-auto">
                  PURSUE WISDOM
                </button>
              </div>
            </div>

            {/* Course 2: Dr. Gerald Boersma */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Dr. Boersma Image</span>
              </div>
              <div className="p-8 text-center flex-1 flex flex-col">
                <p className="text-sm text-pursuit-gold font-semibold mb-4 uppercase tracking-wide">
                  DR. GERALD BOERSMA
                </p>
                <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-6 leading-tight flex-1 flex items-center justify-center">
                  The Life and Teachings of St. Augustine
                </h3>
                <button className="w-full px-8 py-4 bg-pursuit-gold text-white font-semibold text-lg rounded-lg hover:bg-yellow-600 transition-colors mt-auto">
                  PURSUE WISDOM
                </button>
              </div>
            </div>

            {/* Course 3: Coach Joe Patterson */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Coach Patterson Image</span>
              </div>
              <div className="p-8 text-center flex-1 flex flex-col">
                <p className="text-sm text-pursuit-gold font-semibold mb-4 uppercase tracking-wide">
                  COACH JOE PATTERSON
                </p>
                <h3 className="text-2xl font-bold font-crimson text-pursuit-navy mb-6 leading-tight flex-1 flex items-center justify-center">
                  Athletics and the Virtues
                </h3>
                <button className="w-full px-8 py-4 bg-pursuit-gold text-white font-semibold text-lg rounded-lg hover:bg-yellow-600 transition-colors mt-auto">
                  PURSUE WISDOM
                </button>
              </div>
            </div>
          </div>

          {/* See All Courses Button */}
          <div className="text-center mt-16">
            <Link href="/courses">
              <button className="px-12 py-4 border-2 border-pursuit-gold text-pursuit-gold font-semibold text-lg rounded-lg hover:bg-pursuit-gold hover:text-white transition-colors">
                SEE ALL COURSES
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section with Forest Background */}
      <section className="relative bg-gray-800 py-20 overflow-hidden">
        {/* Dark forest background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        
        {/* Tree silhouettes effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 400'%3E%3Cpath d='M0,400 Q100,200 200,300 T400,280 T600,320 T800,290 T1000,310 L1000,400 Z' fill='%23111827' opacity='0.8'/%3E%3Cpath d='M0,400 Q150,180 300,280 T600,300 T900,270 T1200,290 L1200,400 Z' fill='%231f2937' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
              "Wisdom is a tree of life to those who lay hold of her; those who hold her fast are called blessed."
            </blockquote>
            
            {/* Golden line divider */}
            <div className="w-24 h-1 bg-pursuit-gold mx-auto mb-6"></div>
            
            <cite className="text-lg text-gray-300 font-light">
              Proverbs 3:18 ESV
            </cite>
          </div>
        </div>
      </section>

      {/* Mobile App Promotion Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Golden rounded border card */}
            <div className="border-4 border-pursuit-gold rounded-3xl bg-white p-12 relative overflow-hidden">
              
              {/* Golden decorative circle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-pursuit-gold rounded-full"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <p className="text-pursuit-gold font-semibold text-lg mb-4">Now Available</p>
                  <h2 className="text-4xl md:text-5xl font-bold font-crimson text-pursuit-navy mb-6">
                    Wisdom in Your Pocket
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Get access to all of the video programs, free of charge.
                  </p>
                  
                  {/* App Store Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#" className="inline-block">
                      <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                        <div className="text-2xl">📱</div>
                        <div>
                          <div className="text-xs">Download on the</div>
                          <div className="text-lg font-semibold">App Store</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="inline-block">
                      <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                        <div className="text-2xl">▶️</div>
                        <div>
                          <div className="text-xs">GET IT ON</div>
                          <div className="text-lg font-semibold">Google Play</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="flex justify-center lg:justify-end relative">
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Phone Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-b from-pursuit-gold to-yellow-600">
                          {/* App Header */}
                          <div className="p-4 text-center">
                            <h3 className="text-white font-crimson italic text-lg">
                              The Pursuit <span className="text-sm font-normal">of</span> Wisdom
                            </h3>
                          </div>
                          
                          {/* Professor Image */}
                          <div className="px-4 mt-8">
                            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                              <span className="text-gray-600 text-sm">Professor Video</span>
                            </div>
                          </div>
                          
                          {/* Video Controls */}
                          <div className="absolute bottom-20 left-0 right-0 px-6">
                            <div className="bg-black bg-opacity-30 rounded-full p-4">
                              <div className="flex items-center justify-center space-x-6 text-white">
                                <button className="text-xl">⚡</button>
                                <button className="text-xl">⏮️</button>
                                <button className="text-3xl bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                                  ▶️
                                </button>
                                <button className="text-xl">⏭️</button>
                                <button className="text-xl">⚡</button>
                              </div>
                              
                              {/* Progress Bar */}
                              <div className="mt-4">
                                <div className="w-full bg-white bg-opacity-30 rounded-full h-1">
                                  <div className="bg-white h-1 rounded-full" style={{width: '40%'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
