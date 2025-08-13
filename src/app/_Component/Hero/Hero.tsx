import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-[#f0f0e1] p-3">
      <main className="flex flex-col items-center justify-center text-center max-w-3xl sm:gap-3 gap-1 m-auto sm:p-6 px-1 py-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-[#2d1b69] font-bold">Discover Your Next</h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#ffa94d] font-bold">Favorite Recipe</h2>
        <p className="md:text-xl sm:text-lg text-sm text-gray-400">
          AI-powered recipe recommendations tailored to your tase, dietary
          preferences, and available ingredients.
        </p>
        <div className="sm:w-full w-max flex items-center justify-between bg-white rounded-lg p-2">
          <Search className="w-6 h-6 text-[#2d1b69] hidden sm:block" />
          <input className="sm:grow bg-white text-gray-400 focus:border-none focus:outline-none px-3" type="text" placeholder="Enter ingredients (e.g., chicken, tomatores, basil)....." />
          <button className=' px-3 py-1 bg-[#ffa94d] text-center text-gray-500 rounded-[6px]'>Search</button>
        </div>
      </main>
    </div>
  );
}
