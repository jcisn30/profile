import React from "react";

export default function Navbar() {
  return (
    <header className="bg-indigo-700 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jeff Cisneros
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 hover:underline">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:underline">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}