// components/Navbar.tsx
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex gap-6">
      <Logo width={120} height={40} />
    </nav>
  )
}