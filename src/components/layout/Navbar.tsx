// components/Navbar.tsx
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex gap-6">
        <div className="bg-gray-900 py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <Logo width={120} height={40} />
              </div>
          </div>
        </div>
    </nav>
  )
}