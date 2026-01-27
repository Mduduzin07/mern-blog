import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <nav className="border-b-2 bg-white dark:bg-gray-800 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span
            className="px-2 py-1 rounded-lg text-white"
            style={{
              background:
                "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)",
            }}
          >
            Mduduzi's
          </span>{" "}
          Blog
        </Link>

        <div className="flex items-center gap-3">
          <Button className="w-12 h-10" color="gray" pill>
            <AiOutlineSearch className="h-5 w-5" />
          </Button>

          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon className="h-5 w-5" />
          </Button>

          <Link to="/sign-in">
            <Button gradientduotone="purpleToPink" className="text-white">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-3">
        <div className="flex gap-4">
          <Link
            to="/"
            className={`${path === "/" ? "text-purple-600 font-bold" : "text-gray-600"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${path === "/about" ? "text-purple-600 font-bold" : "text-gray-600"}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${path === "/projects" ? "text-purple-600 font-bold" : "text-gray-600"}`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
