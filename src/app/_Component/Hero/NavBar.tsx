'use client';
import React from 'react';
import { Search, User, Heart, Sparkles } from 'lucide-react';


export default function Navigation() {
  return (
    <nav className="text-[#2d1b69] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" flex items-center">
            <button
              className="flex items-center space-x-2"
            >
              <div className=" w-8 h-8 bg-[#ffa94d] rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">RecipeVault</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <button
              className={`px-3 py-2 rounded-md transition-colors hover:text-[#ffa94d]`}
            >
              Home
            </button>
            <button
              className={`px-3 py-2 rounded-md transition-colors flex items-center space-x-1 hover:text-[#ffa94d]`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Generator</span>
            </button>
            <button
              className={`px-3 py-2 rounded-md transition-colors flex items-center space-x-1 hover:text-[#ffa94d]`}
            >
              <Heart className="w-4 h-4" />
              <span>My Recipes</span>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex hover:text-[#ffa94d]">
              <Search className="w-4 h-4" />
            </button>
            <button className="hidden sm:flex hover:text-[#ffa94d]">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="w-full md:hidden flex items-center justify-center pb-4">
          <button
            className={`flex-1 sm:flex-none px-3 py-2 rounded-md text-sm transition-colors hover:text-[#ffa94d]`}
          >
            Home
          </button>
          <button
            className={`flex-1 sm:flex-none px-3 py-2 rounded-md text-sm transition-colors flex items-center space-x-1 hover:text-[#ffa94d]`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Generator</span>
          </button>
          <button
            className={`flex-1 sm:flex-none px-3 py-2 rounded-md text-sm transition-colors flex items-center space-x-1 hover:text-[#ffa94d]`}
          >
            <Heart className="w-4 h-4" />
            <span>My Recipes</span>
          </button>
        </div>
      </div>
    </nav>
  );
}