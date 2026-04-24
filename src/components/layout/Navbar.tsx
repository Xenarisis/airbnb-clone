// components/Navbar.tsx
import Link from "next/link"
import Logo from "@/assets/logo.svg"
import Globe from "@/assets/globe.svg"

export default function Navbar() {
  return (
    <nav className="w-full bg-mist-200 shadow-md px-8 py-4 grid grid-cols-4">
      <nav className="flex justify-start">
        <Logo width={120} height={40} />
      </nav>
      <nav className="flex justify-center col-span-2">
        recherche
      </nav>
      <nav className="flex justify-end">
        <nav className="mr-2">
          <p>devenir hote</p>
        </nav>
        <nav className="mr-2">
          <Globe width={40} height={40} />
        </nav>
        <nav>
          <p>burgermenu</p>
        </nav>
      </nav>
    </nav>
  )
}