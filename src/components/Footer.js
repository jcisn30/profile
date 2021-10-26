import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-400 top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="m-auto flex flex-wrap items-center text-white justify-center">
        <p>Copyright © {new Date().getFullYear()}</p> 
        </nav>
      </div>
    </footer>
  );
}