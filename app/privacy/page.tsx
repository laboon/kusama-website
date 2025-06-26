import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { NetworkMesh } from "@/components/network-mesh"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { TerminalOutput } from "@/components/terminal-output"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-[#ff0066]/20 backdrop-blur-sm bg-black/50 fixed w-full z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kusama-logo-canary-white.png"
              alt="Kusama"
              width={60}
              height={15}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wider">
            <Link href="https://docs.polkadot.com/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              DEVELOPMENT DOCS
            </Link>
            <Link href="https://wiki.polkadot.network/kusama/kusama-getting-started/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              KUSAMA GUIDE
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link href="https://x.com/kusamanetwork" className="text-white/70 hover:text-[#ff0066]">
                <Twitter size={18} />
              </Link>
              <Link href="https://forum.polkadot.network/tag/kusama" className="text-white/70 hover:text-[#ff0066]">
                <MessageSquare size={18} />
              </Link>
              <Link href="https://github.com/paritytech/polkadot-sdk" className="text-white/70 hover:text-[#ff0066]">
                <Github size={18} />
              </Link>
            </div>
          </nav>

          <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" className="hidden md:flex">
            THE NEW VISION
          </HoverGlowButton>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>




      <main className="flex-1 pt-16">

        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/70 mb-6 font-mono leading-relaxed">
                <div className="flex space-x-4">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ff0066]/20 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/kusama-logo-canary-white.png"
                alt="Kusama"
                width={100}
                height={25}
                className="opacity-70"
              />
            </div>
            <div className="flex space-x-8 text-xs font-mono text-white/50">
              <Link href="/terms" className="hover:text-[#ff0066]">
                LEGAL DISCLOSURES
              </Link>
              <Link href="/privacy" className="hover:text-[#ff0066]">
                PRIVACY POLICY
              </Link>
              <Link href="/contact" className="hover:text-[#ff0066]">
                DISCLAIMER
              </Link>
              <span>© {new Date().getFullYear()} KUSAMA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
