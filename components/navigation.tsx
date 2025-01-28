"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, Facebook, Instagram } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Treatments", "/treatments"],
    ["Our Partners", "/partners"],
    ["Contact", "/contact"],
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/DrMishqahDollie/about",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/radiant.life_aesthetics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram"
    }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isHomePage
          ? isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative w-[180px] h-[50px]">
            <Image
              src="https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/Radiant-Life-Revised-adjusted-1-1.png?resize=300%2C148&ssl=1"
              alt="Radiant Life Aesthetics"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  "text-sm font-light transition-colors hover:text-secondary",
                  isHomePage && !isScrolled ? "text-white" : "text-primary",
                  pathname === href && "text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2  hover:text-secondary transition-colors",
                  isHomePage && !isScrolled ? "text-white" : "text-foreground"
                )}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "md:hidden p-2 hover:bg-secondary/10 transition-colors",
                  isHomePage && !isScrolled ? "text-white" : "text-foreground"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <div className="relative w-[180px] h-[50px] mx-auto">
                    <Image
                      src="https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/Radiant-Life-Revised-adjusted-1-1.png?resize=300%2C148&ssl=1"
                      alt="Radiant Life Aesthetics"
                      fill
                      className="object-contain"
                    />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map(([label, href], index) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-lg font-light text-foreground hover:text-primary transition-colors py-2 animate-in slide-in-from-right-4"
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {label}
                  </Link>
                ))}
                
                {/* Social Links */}
                <div className="pt-8 mt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4 animate-in slide-in-from-right-4" 
                     style={{ animationDelay: `${navLinks.length * 100}ms` }}>
                    Follow us on social media
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary/10 hover:bg-secondary/20 transition-colors animate-in slide-in-from-right-4"
                        style={{ 
                          animationDelay: `${(navLinks.length + 1 + index) * 100}ms`,
                          animationFillMode: 'backwards'
                        }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-secondary" />
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}