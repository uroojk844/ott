import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaCanadianMapleLeaf, FaRegUser } from "react-icons/fa";
import LogoWithName from "./LogoWithName";
const NavBar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/series",
      name: "Series",
    },
    {
      path: "/movies",
      name: "Movies",
    },
    {
      path: "/kids",
      name: "Kids",
    },
    {
      path: "/shows",
      name: "TV Shows",
    },
    {
      path: "/documentaries",
      name: "Documentaries",
    },
  ];

  const [open, setOpen] = useState(false);
  function toggleNav() {
    setOpen((cur) => !cur);
  }

  const path = usePathname();
  return (
    <nav className="sticky top-0 z-20 max-sm:p-4 p-6 text-white flex items-center">
      <LogoWithName />
      <div
        className={`md:ml-24 flex gap-8 navbar-content ${
          !open && "max-md:-translate-x-full"
        }`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={` hover:text-blue-500 ${
              path == link.path && "text-blue-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-6 ml-auto">
        <FaRegUser size={20} />
        <FaBars
          onClick={toggleNav}
          size={20}
          className="md:hidden cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default NavBar;
