import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar className="mx-auto max-w-screen-xl p-4 bg-white shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" variant="h5" className="cursor-pointer">
          My Portfolio
        </Typography>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </Navbar>
  );
}

