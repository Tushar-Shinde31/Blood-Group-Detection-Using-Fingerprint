// app/page.tsx

import BoxModel from '@/components/BoxModels';
import Footer from '@/components/Footer';
import ImageUpload from '@/components/ImageUpload';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 flex justify-between items-center z-50 shadow-lg">
        {/* Title on the left side */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          BloodGroup Detector
        </Link>
        
        {/* Navigation Links on the right side */}
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/login" className="hover:text-blue-400">Login</Link>
          <Link href="/signup" className="hover:text-blue-400">Sign Up</Link>
          <Link href="/accuracy" className="hover:text-blue-400">Accuracy</Link>
        </div>
      </nav>

      <div className="relative h-screen pt-16"> {/* Added pt-16 to avoid content overlap */}
        {/* Background Image */}
        <Image 
          src="/images/hero.jpg" // Hero image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upload fingerprint to Check</h1>
          <p className="text-lg md:text-xl mb-6">New way of Detecting Blood Group with Fingerprint</p>

          <div className="flex space-x-4">
            <Link href="/get-started" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Get Started
            </Link>
            <Link href="/watch-video" className="bg-transparent border-2 border-white py-2 px-4 rounded text-white">
              Watch Video
            </Link>
          </div>
        </div>
      </div>

      {/* BoxModel section */}
      <div className="py-0">
        <BoxModel />
      </div>

      {/* ImageUpload section */}
      <div className="py-0">
        <ImageUpload />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
