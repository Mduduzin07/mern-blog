import { Navbar, TextInput, Button, Card, Badge } from "flowbite-react";
import { HiUserGroup, HiUserAdd, HiCalendar } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2  bg-white dark:bg-gray-800">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span
          className="px-2 py-1 rounded-lg text-white"
          style={{
            background: "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)",
          }}
        >
          Mduduzi's
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          className="hidden lg:inline"
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            style={{
              background:
                "linear-gradient(to right, #6366f1,  #601EF9, #8A2BE2)",
            }}
            className="text-white "
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={path === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
