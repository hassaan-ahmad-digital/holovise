import logo from '@/assets/logo.svg'
import facebook from '@/assets/social/Fb.svg'
import { default as instagram, default as linkedin } from '@/assets/social/In.svg'
import mail from '@/assets/social/Mail.svg'
import twitter from '@/assets/social/Tw.svg'
import phone from '@/assets/social/phone.svg'
import send from '@/assets/social/send.svg'
import { Button } from '@/components/ui'
import { Menu, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header id="app-header-1" className="flex flex-col fixed w-full top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue text-white py-1 flex justify-between items-center">
        <div className="container-large py-1 px-4 flex justify-between items-center">
          <div className="text-sm mr-auto sora_14_600">Vision Meets Technology</div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 sora_14_600">
              <Image src={phone} alt="Email" width={22} height={22} />
              <span className="text-sm">(000) 666 555 444</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="mailto:support@holovise.io" className="hidden md:flex items-center gap-1 sora_14_600">
                <Image src={send} alt="Email" width={22} height={22} />
                <span className="text-sm">support@holovise.io</span>
              </Link>
              <div className="flex items-center gap-[17px]">
                <Link href="#" className="py-[9px]" aria-label="Facebook">
                  <Image src={facebook} alt="Facebook" width={22} height={22} />
                </Link>
                <Link href="#" className="py-[9px]" aria-label="LinkedIn">
                  <Image src={linkedin} alt="LinkedIn" width={22} height={22} />
                </Link>
                <Link href="#" className="py-[9px]" aria-label="Twitter">
                  <Image src={twitter} alt="Twitter" width={22} height={22} />
                </Link>
                <Link href="#" className="py-[9px]" aria-label="Email">
                  <Image src={mail} alt="Email" width={22} height={22} />
                </Link>
                <Link href="#" className="py-[9px]" aria-label="Instagram">
                  <Image src={instagram} alt="Instagram" width={22} height={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-header-bg text-white ">
        <div className="container-large py-3 px-4 flex gap-8 justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Holovise" width={208} height={45.8} />
          </Link>

          <nav className="hidden lg:flex items-center ml-auto gap-8">
            <div className="relative group">
              <Link href="#" className="flex items-center gap-1">
                About
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              <Link href="#" className="flex items-center gap-1 bg-blue-600 px-3 py-1 rounded">
                Services
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <Link href="#" className="hover:text-blue-400">
              Blog
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Careers
            </Link>

            <Button className="bg-purple-600 hover:bg-purple-700 ml-4">Get in Touch</Button>

            <div className="border border-gray-700 px-2 py-1 rounded flex items-center gap-1">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="16" fill="#00247D" />
                <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2" />
                <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4" />
                <path d="M12 0V16M0 8H24" stroke="#CF142B" strokeWidth="2" />
              </svg>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <button aria-label="Toggle dark mode">
              <Moon size={20} />
            </button>
          </nav>

          <button className="" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
