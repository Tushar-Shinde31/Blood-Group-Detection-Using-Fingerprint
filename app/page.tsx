// app/page.tsx
import BoxModel from '@/components/BoxModels';
import Footer from '@/components/Footer';
import ImageUpload from '@/components/ImageUpload';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <div className="relative h-screen">
        <Image 
          src="/images/hero3.jpg" // Hero image path
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

        <nav className="absolute top-0 left-0 w-full p-4 flex justify-end space-x-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/accuracy">Accuracy</Link>
        </nav>
      </div>

      {/* Inserted BoxModel component */}
      <BoxModel />
       {/* Inserted BoxModel component */}
       <ImageUpload />
       <Footer/>
    </div>
  );
}
