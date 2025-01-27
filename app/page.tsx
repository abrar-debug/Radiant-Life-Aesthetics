"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const treatments = [
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description: "A skin resurfacing treatment that removes dead cells, improving texture and tone for a radiant complexion.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
  },
  {
    id: "micro-needling",
    title: "Micro Needling",
    description: "A procedure using tiny needles to stimulate collagen production, reducing scars, wrinkles, and fine lines.",
    image: "https://th.bing.com/th/id/R.0222cfaef51a3a200cdc83db3057a834?rik=1RvX3aRWlzfI7A&pid=ImgRaw&r=0",
  },
  {
    id: "neuromodulators",
    title: "Neuromodulators (Botox)",
    description: "Injectable treatments like Botox to relax muscles, minimizing dynamic wrinkles and creating a youthful look.",
    image: "https://www.usdermatologypartners.com/wp-content/uploads/2016/10/iStock_54578486_LARGE.jpg",
  },
  {
    id: "dermal-fillers",
    title: "Dermal Fillers",
    description: "Gel-like substances injected to restore volume, smooth wrinkles, and enhance facial contours.",
    image: "https://lirp.cdn-website.com/047638b4/dms3rep/multi/opt/close-up-woman-during-lip-filler-procedure-1920w.jpg",
  },
  {
    id: "dna-analysis",
    title: "Optiphi Helix DNA",
    description: "A personalized skincare solution using DNA analysis to create a regimen tailored to your skin's needs.",
    image: "https://www.sandsaesthetics.co.za/wp-content/uploads/2022/05/Helix-Hormones-3-1024x683.jpg",
  },
  {
    id: "iv-therapy",
    title: "IV Therapy",
    description: "A wellness treatment delivering vitamins and nutrients directly into your bloodstream for quick hydration and revitalization.",
    image: "https://theinvigory.com/wp-content/uploads/2022/06/iv-therapy-thumbnail.jpg",
  },
];

export default function Home() {
  const router = useRouter();
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: welcomeRef, inView: welcomeInView } = useInView({ triggerOnce: true });
  const { ref: quoteRef, inView: quoteInView } = useInView({ triggerOnce: true });
  const { ref: treatmentsRef, inView: treatmentsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: questionsRef, inView: questionsInView } = useInView({ triggerOnce: true });

  const handleLearnMore = (treatmentId: string) => {
    router.push(`/treatments#${treatmentId}`);
  };

  return (
    <>
      <main className="min-h-screen">
        <Navigation />

        <section
          ref={heroRef}
          className={`relative h-screen flex items-center justify-center ${heroInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
              poster="https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=2070"
            >
              <source
                src="https://videos.pexels.com/video-files/3763029/3763029-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-secondary/40 to-background/95" />
          </div>

          <div className="container px-6 mx-auto text-left relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 drop-shadow-sm">
              Be Your Best You
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 mx-auto drop-shadow-sm">
              It’s all about healthy skin and the art of graceful ageing
            </p>

            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-secondary/70 hover:bg-white/20 text-foreground rounded-full"
                onClick={() => window.open('https://rla.healthaccess.co.za/#/public/bookings', '_blank')}>
                Book Consultation
              </Button>
              <Button
                size="lg"
                className=" mb-8 mx-auto bg-secondary/70 hover:bg-white/20 text-foreground rounded-full"
                onClick={() => router.push('/contact')}>
                Talk to Us
              </Button>
            </div>

          </div>
        </section>

        {/* Quote */}
        <section
          ref={quoteRef}
          className={`py-20 bg-background/50 ${quoteInView ? 'fade-in' : 'opacity-0'}`}
        >

          <div className="container  mx-auto text-center">
            <Quote className="w-16 h-16 text-secondary mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-2xl font-light italic text-foreground/50 max-w-4xl mx-auto mb-8">
              "My aim is not to change your face but to enhance the natural beauty that already exists by also slowing down the aging process for as long as possible."
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="text-left">
                <p className="font-semibold text-foreground/80">
                  – Mishqah Dollie
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Welcome */}
        <section
          ref={welcomeRef}
          className={`py-24 bg-background ${welcomeInView ? 'fade-in' : 'opacity-0'}`}>

          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Welcome to our studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="space-y-6">
                <h2 className="text-primary text-3xl md:text-4xl font-bold">
                  Welcome to Our Studio!
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-muted-foreground">
                  Our Studio is defined by our core values.  Here at Radiant Life Aesthetics, we believe that well-being is about vitality and not age.. After all, we’re only as ‘old’ as we feel – and we all know that looking good means feeling great! When it comes to looking good, the only ones we have to impress are ourselves.
                </p>
                <p className="text-lg text-muted-foreground">
                  Vitality is a celebration of where we are in life and how far we’ve come. Our bodies and the skin we’re in has brought us here, isn’t that something to celebrate?
                </p>
                <Button
                  className="bg-secondary hover:bg-primary/20 text-secondary-foreground mt-4 rounded-full"
                  onClick={() => router.push('/about')}>
                  Learn More About Us
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Treatments */}
        <section
          id="treatments"
          ref={treatmentsRef}
          className="py-20"
        >
          <div className="container px-4 mx-auto">
            <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-12">
              What we can do for you
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <Card
                  key={treatment.title}
                  className={`overflow-hidden group transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 rounded-2xl
                    ${treatmentsInView ? 'slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>

                  <div className="relative h-48 w-full">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 treatment-card-title">{treatment.title}</h3>
                    <p className="text-muted-foreground">{treatment.description}</p>
                    <Button
                      variant="ghost"
                      className="mt-4 hover:text-primary hover:bg-background/10"
                      onClick={() => handleLearnMore(treatment.id)}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          ref={questionsRef}
          className={`relative py-20 ${questionsInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=2070"
              alt="Questions background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/10 backdrop-blur-sm" />
          </div>
          <div className="container px-4 mx-auto text-center max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Questions?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're here to help you make informed decisions about your aesthetic journey. Our expert team is ready to answer any questions you may have about our treatments and services.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-primary/20 text-secondary-foreground rounded-full"
              onClick={() => router.push('/contact')}
            >
              Talk to Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}