// components/Navbar.tsx
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full bg-mist-200 shadow-md px-8 py-4 flex gap-6">
      <nav className="flex justify-start">
        <Logo width={120} height={40} />
      </nav>
      <nav className="flex justify-center">
        recherche
      </nav>
      <nav className="flex justify-end">
        <nav className="mr-2">
          <p>devenir hote</p>
        </nav>
        <nav className="mr-2">
          <p>language</p>
        </nav>
        <nav>
          <p>burgermenu</p>
        </nav>
      </nav>
    </nav>
  )
}