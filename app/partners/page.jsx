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
    logo: "https://cdn-djgee.nitrocdn.com/nvaSSStTwEejPXGoFCKDyKElfeEGTHZA/assets/images/optimized/rev-aa06fce/fagron.co.za/wp-content/uploads/fagron-logo.svg",
    website: "https://fagron.co.za/"
  },
  {
    name: "Optiphi",
    logo: "https://optiphi.com/cdn/shop/files/optiphi_Logo_8k_res_Sep22_155x.png?v=1686749054",
    website: "https://www.optiphi.co.za/"
  },
  {
    name: "Restylane",
    logo: "https://www.restylaneusa.com/themes/custom/infinitytheme/images/brand/eyelight.svg",
    website: "https://www.restylaneusa.com/"
  },
  {
    name: "Allergan",
    logo: "https://www.allerganaesthetics.com/content/dam/aa-corporate/logos/logo-white.svg",
    website: "https://www.allerganaesthetics.com/"
  },
  {
    name: "Medskills",
    logo: "https://www.aesthetictraining.co.za/wp-content/uploads/2023/04/Medskills-logo-275x48-1.png",
    website: "https://www.aesthetictraining.co.za/"
  },
  {
    name: "Dermalhealth",
    logo: "https://dermalhealth.store/cdn/shop/files/DH2.png?v=1723492078&width=500",
    website: "https://dermalhealth.store/"
  },
  {
    name: "Skin Rejuvenation Technologies",
    logo: "https://optiphi.com/cdn/shop/files/optiphi_Logo_8k_res_Sep22_155x.png?v=1686749054",
    website: null
  },
  {
    name: "Mesoestetic",
    logo: "https://www.mesoestetic.co.za/static/version1738048705/frontend/tbb/mesoestetic/en_ZA/images/logo.svg",
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
              src="/images/partner-poster.webp"
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
                  className={`group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden ${partnersInView ? 'slide-up opacity-100' : 'opacity-0 translate-y-8'
                    }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative h-48 flex items-center justify-center bg-black/10 p-4">
                    <div className="w-full h-full relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 treatment-card-title">{partner.name}</h3>
                    {partner.website ? (
                      <Link
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-secondary hover:text-primary/80 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Website coming soon
                      </span>
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