import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 p-4 flex justify-between">
      <div className="space-x-5 mt-2 ">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contatti" className="text-white">
          Contact
        </Link>
      </div>
      <img src="images/piccolo.jpg" alt="" className="size-10 mr-2   " />
    </nav>
  );
}
