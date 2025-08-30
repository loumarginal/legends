import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navigationItems = [
  { name: "Home🍜", href: "/" },
  { name: "Comisiona una novela🍱", href: "/comisiones" },
  { name: "Únete al Patreon🎉", href: "https://www.patreon.com/LegendsNoFansub" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.webp"
              alt="Gashadokai Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl">Legends no Fansub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            {/* Social Media Buttons */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-border">
              <Link
                href="https://www.facebook.com/LegendsNoFansub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="rounded"
                />
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Social Media Buttons */}
                <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-border">
                  <Link
                    href="https://www.facebook.com/LegendsNoFansub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png"
                      alt="Facebook"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
