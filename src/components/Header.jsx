
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blueGray-200  shadow-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">

        <div className="flex items-center space-x-2">
  
          <h1 className="text-xl font-semibold text-gray-800 cursor-pointer">
            My Portfolio
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="px-4 py-2  hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 hover:text-blue-500">
            About
          </Link>
          <Link href="/projects" className="px-4 py-2 hover:text-blue-500">
            Projects
          </Link>
          <Link href="/contact" className="px-4 py-2 hover:text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


