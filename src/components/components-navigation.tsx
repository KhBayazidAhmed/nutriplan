"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-red-500">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl flex justify-center  items-center font-bold text-primary"
          >
            <Image width={80} height={40} alt="Daily Bowl" src={Logo} />
            Daily Bowl
          </Link>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
