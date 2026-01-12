import { useState } from "react";

const links = [
  { label: "About", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="hidden md:flex justify-between items-center max-w-6xl mx-auto h-20 px-6">
        {/* Logo */}
        <div className="text-2xl font-semibold">Sulav Bajracharya</div>

        {/* Desktop Links */}
        <ul className="flex gap-8 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-black hover:text-gray-600 hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <nav className="md:hidden flex justify-between items-center h-20 px-6 bg-white shadow-md">
        <div className="text-2xl font-semibold">Sulav Bajracharya</div>

        <div className="relative">
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Mobile menu */}
          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col gap-2 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-black hover:bg-gray-100 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
