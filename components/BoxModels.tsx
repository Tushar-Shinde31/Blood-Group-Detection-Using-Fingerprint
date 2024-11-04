// components/BoxModel.tsx
import { FC } from 'react';

const BoxModel: FC = () => {
  return (
    <section className="flex justify-center space-x-6 p-8 bg-gray-100">
      {/* Card 1 */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-60 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          {/* Replace with your own icon */}
          <img src="/icons/icon1.svg" alt="Icon 1" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Lorem Ipsum</h3>
        <p className="text-gray-600 text-sm text-center">
          Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-60 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          {/* Replace with your own icon */}
          <img src="/icons/icon2.svg" alt="Icon 2" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Dolor Sit Amet</h3>
        <p className="text-gray-600 text-sm text-center">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-60 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          {/* Replace with your own icon */}
          <img src="/icons/icon3.svg" alt="Icon 3" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Sed ut Perspicitatis</h3>
        <p className="text-gray-600 text-sm text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
    </section>
  );
};

export default BoxModel;
