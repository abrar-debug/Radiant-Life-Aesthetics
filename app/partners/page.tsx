"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    name: "Fagron",
    logo: "https://th.bing.com/th/id/OIP.lQWDPltEAui3228sK3PfYQHaD4?rs=1&pid=ImgDetMain",
    website: "https://fagron.co.za/"
  },
  {
    name: "Optiphi",
    logo: "https://th.bing.com/th/id/OIP.AYl04DQbt9weB_zmwgqTHAAAAA?rs=1&pid=ImgDetMain",
    website: "https://www.optiphi.co.za/"
  },
  {
    name: "RestyLane",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/restylane-logo.png?ssl=1",
    website: "https://www.restylaneusa.com/"
  },
  {
    name: "Allergan",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/allergan-logo.png?ssl=1",
    website: "https://www.allerganaesthetics.com/"
  },
  {
    name: "Medskills",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/medskills-logo.png?ssl=1",
    website: "https://www.aesthetictraining.co.za/"
  },
  {
    name: "Dermalhealth",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/dermalhealth-logo.png?ssl=1",
    website: "https://dermalhealth.store/"
  },
  {
    name: "Skin Rejuvenation Technologies",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2023/12/Untitled-1.png?ssl=1",
    website: null
  },
  {
    name: "Mesoestetic",
    logo: "https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2023/12/Untitled-2.png?ssl=1",
    website: "https://www.mesoestetic.co.za/"
  }
];

export default function Partners() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header Section */}
        <section
          ref={headerRef}
          className={`relative py-24 ${headerInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
              alt="Partners header"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-background/80 backdrop-blur-sm" />
          </div>
          <div className="container px-4 mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Trusted Partners</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We collaborate with leading brands in aesthetic medicine to bring you the highest quality treatments and products.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section
          ref={partnersRef}
          className={`py-20 bg-background ${partnersInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card
                  key={partner.name}
                  className={`group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden ${
                    partnersInView ? 'slide-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 0.1}s`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative h-48">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{partner.name}</h3>
                    {partner.website ? (
                      <Link
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground">Website coming soon</span>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}