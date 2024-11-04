"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-md shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Predict Blood Group</h2>
      
      {/* Image preview section */}
      {selectedImage ? (
        <div className="relative w-40 h-40 mb-4 border border-gray-300 rounded-md overflow-hidden">
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded fingerprint preview"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-40 h-40 mb-4 bg-gray-200 border border-dashed border-gray-400 rounded-md text-gray-400">
          No Image Selected
        </div>
      )}

      {/* File upload input */}
      <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-3">
        Choose Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Predict button */}
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
        Predict Blood Group
      </button>
    </div>
  );
}
