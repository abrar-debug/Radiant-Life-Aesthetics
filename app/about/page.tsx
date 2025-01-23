"use client";

import { Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function About() {
  const { ref: quoteRef, inView: quoteInView } = useInView({ triggerOnce: true });
  const { ref: welcomeRef, inView: welcomeInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Quote Section */}
        <section
          ref={quoteRef}
          className={`relative py-24 ${quoteInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=2070"
              alt="Aesthetic background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-background/80 backdrop-blur-sm" />
          </div>
          <div className="container px-4 mx-auto text-center relative z-10">
            <Quote className="w-16 h-16 text-white mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium italic text-white max-w-4xl mx-auto mb-8">
              We are not here to change you! Quite the opposite actually, we’re here to celebrate all that is you - the parts that you LOVE and the parts you wish to enhance.
            </blockquote>
          </div>
        </section>

        {/* Welcome Section */}
        <section
          ref={welcomeRef}
          className={`py-24 bg-background ${welcomeInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Welcome to Our Studio</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-muted-foreground">
                  Radiant Life Aesthetics is a new Aesthetic Studio on Constantia, Cape Town, founded by Dr Mishqah Dollie.  At Radiant Life, we celebrate skin rejuvenation through medical grade skin renewal and enhancement treatments.
                </p>
                <p className="text-lg text-muted-foreground">
                  As our current day lifestyles become more fast-paced and demanding, premature ageing has become a reality for many of us.  Extermal factors such as environment, stress and genetics affects our health and that of our skin, eventually causing our skin canvas to appear damaged,  presenting hyperpigmentation, deep lines, wrinkles and severe volume loss.  We may feel young and energised on the inside, while looking tired and aged on the outside.
                </p>
                <p className="text-lg text-muted-foreground">
                  Here at Radiant Life aesthetics we want to slow down the raging process,  by maintaining your beautifully natural and youthful looking skin, while also preventing further damage.
                </p>
              </div>
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/pexels-monstera-6621353-1-e1651056438602.jpg?resize=1024%2C722&ssl=1"
                  alt="Our modern aesthetic clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section
          ref={missionRef}
          className={`py-24 bg-secondary/10 ${missionInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] overflow-hidden order-2 md:order-1">
                <Image
                  src="https://i0.wp.com/radiantlifeaesthetics.co.za/wp-content/uploads/2022/04/Screen-Shot-2022-04-05-at-21.18.49.png?w=575&ssl=1"
                  alt="Our mission in action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-muted-foreground">
                  We created our studio to give women (and men) the confidence to tap into the best within ourselves, because we’re often the only ones standing in our way.
                </p>
                <p className="text-lg text-muted-foreground">
                  This is our time! It’s time to park those negative thoughts and self-limiting beliefs. Time to stop being ashamed and wanting to be different to who we are. It’s time to celebrate us and to start taking stock of what we love about ourselves. We’re here to enhance the things you want so that you can be your best and live your best life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          ref={visionRef}
          className={`py-24 bg-background ${visionInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Giving My Patients the Perfect Smile Wasn't Enough</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-muted-foreground">
                As a practitioner with over 15 years of experience, I realized that true aesthetic wellness goes beyond any single treatment. It's about creating harmony between inner confidence and outer radiance, about understanding each patient's unique needs and desires.
                </p>
                <p className="text-lg text-muted-foreground">
                This understanding led to the creation of our comprehensive approach to aesthetic wellness. We don't just treat symptoms; we enhance your natural beauty while promoting overall skin health and wellness. Our goal is to help you achieve lasting results that make you feel confident and beautiful every day.                </p>
              </div>
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
                  alt="Dr. Sarah Mitchell consulting with a patient"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}