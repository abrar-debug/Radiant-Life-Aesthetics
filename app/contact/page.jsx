"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <main className="pt-16">
        {/* Header Section */}
        <section
          ref={headerRef}
          className={`relative py-24 ${headerInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-poster.webp"
              alt="Contact header"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-background/80 backdrop-blur-sm" />
          </div>
          <div className="container px-4 mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              We're here to answer your questions and help you achieve your aesthetic goals
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-foreground hover:bg-primary/20 "
              onClick={() => window.open('https://www.fresha.com/a/radiant-life-aesthetics-cape-town-6-wodehouse-crescent-u8c4r3m4/all-offer?menu=true&pId=600666', '_blank')}
            >
              Make a Booking
            </Button>
          </div>
        </section>

        {/* Contact Information */}
        <section
          ref={contentRef}
          className={`py-20 bg-background ${contentInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">You Can Find Us At</h2>
                <div className="w-20 h-1 bg-secondary " />
                
                <Card className="p-6 hover:shadow-lg transition-all duration-300 ">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Location</h3>
                      <p className="text-muted-foreground">
                        6 Wodehouse Cres <br />
                        The Vines<br />
                        Cape Town, 7806
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 ">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <Link 
                        href="tel:+1234567890" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +27 (65) 929-4342
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 ">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <Link 
                        href="mailto:info@radiantlife.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        info@radiantlifeaesthetics.co.za
                      </Link>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h3 className="font-semibold">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link 
                      href="https://www.facebook.com/DrMishqahDollie/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary/10  transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-primary hover:text-secondary" />
                    </Link>
                    <Link 
                      href="https://www.instagram.com/radiant.life_aesthetics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary/10   transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-primary hover:text-secondary" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={`${formInView ? 'slide-up' : 'opacity-0 translate-y-8'}`}
              >
                <Card className="p-8 ">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className=""
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className=""
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="min-h-[150px] "
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground "
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] relative">
          <Image
            src="/images/contact-footer.webp"
            alt="Location map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </section>
      </main>
      
    </>
  );
}
