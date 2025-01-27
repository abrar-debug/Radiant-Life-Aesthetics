"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-normal mb-4">Radiant Life</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner in aesthetic wellness, providing premium beauty treatments and personalized care.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/DrMishqahDollie/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/radiant.life_aesthetics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Treatments", "/treatments"],
                ["Our Partners", "/partners"],
                ["Contact Us", "/contact"]
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Chemical Peels",
                "Micro Needling",
                "Neuromodulators",
                "Dermal Fillers",
                "Optiphi Helix - Discover your DNA",
                "Intravenous (IV) Therapy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/treatments#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  6 Wodehouse Cres, The Vines<br />
                  Cape Town, 7806
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Link
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  +27 (65) 929-4342
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <Link
                  href="mailto:info@radiantlife.com"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  info@radiantlifeaesthetics.co.za
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Radiant Life Aesthetics. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Powered by</span>
              <Link 
                href="https://www.kaizentech.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-24 h-8"
              >
                <Image
                  src="https://admin.kaizentech.co.za/kaizentech.svg"
                  alt="Kaizen Tech"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}