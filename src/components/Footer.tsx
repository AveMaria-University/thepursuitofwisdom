import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-pursuit-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ave Maria University Logo and Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image 
                src="/images/Ave-Maria-white.webp" 
                alt="Ave Maria University" 
                width={200} 
                height={80}
                className="mb-4"
              />
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <Link 
                href="/signup" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Sign Up
              </Link>
              <Link 
                href="/login" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/courses" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                All Courses
              </Link>
              <Link 
                href="/app" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Download the App
              </Link>
              <Link 
                href="/donate" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <Link 
                href="/privacy-policy" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-use" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Terms of Use
              </Link>
              <Link 
                href="/cookie-policy" 
                className="block text-sm hover:text-pursuit-gold transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4 text-pursuit-gold">Social</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                className="hover:opacity-75 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="/images/facebook.webp" 
                  alt="Facebook" 
                  width={24} 
                  height={24}
                />
              </Link>
              
              <Link 
                href="https://youtube.com" 
                className="hover:opacity-75 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="/images/youtube.webp" 
                  alt="YouTube" 
                  width={24} 
                  height={24}
                />
              </Link>
              
              <Link 
                href="https://snapchat.com" 
                className="hover:opacity-75 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="/images/snap.webp" 
                  alt="Snapchat" 
                  width={24} 
                  height={24}
                />
              </Link>
              
              <Link 
                href="https://linkedin.com" 
                className="text-white hover:text-pursuit-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Ave Maria University. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              <Link 
                href="https://avemaria.edu" 
                className="hover:text-pursuit-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Ave Maria University →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
