"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const treatments = [
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description: "Reveal younger, brighter skin with our specialized chemical peels",
    image: "/images/chemical-peels.webp",
    whatIsIt: "A chemical peel involves a professional application of a chemical solution to the skin.Once applied to the skin it removes the most outer layer of the skin surface and a new smoother, less wrinkled skin is unveiled.This resurfacing treatment is focused on cell renewal, exfoliation and improving skin’s overall texture and tone.",
    whoCanBenefit: "Chemicals peels are beneficial for those with fine lines and wrinkles, acne and pigmented or sun damaged skin.Through this process your skin appears more youthful and elastic."
  },
  {
    id: "micro-needling",
    title: "Micro Needling",
    description: "Stimulate collagen production for skin renewal",
    image: "/images/micro-needle.webp",
    whatIsIt: "Micro needling is a collagen stimulating therapy that treats the deeper skin layers to stimulate healthy tissue formation in ageing or damaged skin. A pen-like device (dermapen) which used microscopic needles pierces the skin to cause micro wounds, therefore triggering the healing process. Resulting in brighter, tighter and more youthful looking skin.",
    whoCanBenefit: "Micro needling is am effective treatment for acne scars, stretch marks, skin tightening, pigmentation, fine lines and wrinkles and can stimulate hair growth for hair loss."
  },
  {
    id: "neuromodulators",
    title: "Neuromodulators (Botox)",
    description: "Reduce fine lines and wrinkles effectively",
    image: "/images/botox.webp",
    whatIsIt: "Neuromodulators are wrinkle- relaxing injections of botulinum toxin (Botox)It is used to soften out lines and wrinkles that are formed by overactive muscles in the facial and neck area.",
    whoCanBenefit: "Botulinum toxin helps with fine lines and wrinkles in the head and neck area. It also offers effective relief from chronic migraines, tension headaches, TMJ issues such as grinding and clenching and excessive sweating.",
  },
  {
    id: "dermal-fillers",
    title: "Dermal Fillers",
    description: "Restore volume and enhance facial contours",
    image: "/images/dermal-filler.webp",
    whatIsIt: "Dermal fillers is a non-surgical treatment, where active ingredients are injected into the skin. When absorbed into the tissues and surrounding areas it feels soft and natural.",
    whoCanBenefit: "Dermal fillers can be used to hydrate skin, plump out lines and wrinkles and add volume to the lips, cheeks and cheekbones. It can also be used to remodel noses and chins as well treat bags and dark circles under the eyes.",
  },
  {
    id: "dna-analysis",
    title: "Optiphi Helix DNA",
    description: "Personalized skincare through DNA analysis",
    image: "/images/helix-treatment.webp",
    whatIsIt: "If your DNA is what makes you unique, what would be better than to base your skincare regime, diet and lifestyle behaviours on your individual genetic needs?The optiphi Helix Skin Report allows you to fully understand your skin and where it’s likely to be heading in the future, so you can plan for it. The results of the DNA Skin Test give you the knowledge and power to target these internal skin concerns, in combination to the external factors contributing to skin imperfections and aging, to greatly improve your skin’s future.",

    whoCanBenefit: "",

  },
  {
    id: "iv-therapy",
    title: "IV Therapy",
    description: "Boost wellness and skin health from within",
    image: "/images/iv-therapy.webp",
    whatIsIt: "IV therapy is a medical technique that administers fluids, medications and nutrients directly into a person’s bloodstream.IV vitamin therapy is one of the best ways to ensure you are receiving the maximum amount of nutrients possible despite any health or digestive challenges you may be facing.Each drip can be customised according to the client’s needs. They range from fertility to energy levels to general well-being.",
    whoCanBenefit: "Our vitamin drips boost immunity and supports recovery from training, illness, or even the after-effects of over-indulgence. They improve mood, energy, stamina as well as increase hydration. They slow down the signs of aging, improve skin, boost hair and nails all while leaving you feeling rejuvenated. Did I mention that all these benefits can be felt in as little as 15 minutes?",
  }
];

const chemicalPeelPrices = [
  {
    name: "Skin rejuvenation peel (AHA 30%)",
    description: "Improves skin tone and texture, hyperpigmentation and premature ageing",
    price: "R650"
  },
  {
    name: "Skin rejuvenation peel (AHA 50%)",
    description: "Improves skin tone and texture, hyperpigmentation and premature ageing",
    price: "R850"
  },
  {
    name: "Restorative 30/30 peel",
    description: "Targets sun damage, inflammation and pigmentation, boosts collagen, reinforces skin barrier",
    price: "R850"
  },
  {
    name: "Restorative 30/50 peel",
    description: "Targets sun damage, inflammation and pigmentation, boosts collagen, reinforces skin barrier",
    price: "R900"
  },
  {
    name: "Anti-aging quadraction retinol peel",
    description: "Firms and plumps skin, targets lines and wrinkles, provides deep exfoliation, promotes clear and even complexion.",
    price: "R1250"
  }
];

export default function Treatments() {
  const router = useRouter();
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: treatmentsRef, inView: treatmentsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Header Section */}
        <section
          ref={headerRef}
          className={`relative py-16 md:py-24 ${headerInView ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/treatment-poster.webp"
              alt="Treatments header"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-background/80 backdrop-blur-sm" />
          </div>
          <div className="container px-4 mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Our Treatments</h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Discover our range of premium aesthetic treatments, each designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </section>

        {/* Treatments Section */}
        <section
          id="treatments"
          ref={treatmentsRef}
          className="py-12 md:py-20 bg-background"
        >
          <div className="container px-4 mx-auto">
            <div className="space-y-12 md:space-y-20">
              {treatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  id={treatment.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start ${treatmentsInView ? 'slide-up opacity-100' : 'opacity-0 translate-y-8'
                    }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`space-y-4 md:space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">{treatment.title}</h2>
                    <div className="w-20 h-1 bg-secondary rounded-full" />

                    <Card className="p-4 md:p-6 bg-secondary/5 rounded-2xl">
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">What is it?</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{treatment.whatIsIt}</p>
                    </Card>

                    <Card className="p-4 md:p-6 bg-secondary/5 rounded-2xl">
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">Who can benefit?</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{treatment.whoCanBenefit}</p>

                    </Card>

                    {treatment.id === 'chemical-peels' && (
                      <div className="space-y-4">
                        <Button
                          onClick={() => setIsPriceListOpen(!isPriceListOpen)}
                          variant="outline"
                          className="w-full justify-between hover:bg-secondary"
                        >
                          <span>View Price List</span>
                          {isPriceListOpen ? (
                            <ChevronUp className="h-4 w-4 ml-2" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-2" />
                          )}
                        </Button>

                        {isPriceListOpen && (
                          <Card className="p-4 md:p-6 bg-secondary/5 animate-accordion-down">
                            <div className="space-y-4 ">
                              {chemicalPeelPrices.map((treatment, i) => (
                                <div key={i} className="flex justify-between items-start border-b border-border pb-4 last:border-0 last:pb-0">
                                  <div className="flex-1">
                                    <h5 className="font-medium">{treatment.name}</h5>
                                    <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>
                                  </div>
                                  <span className="font-semibold text-primary ml-4 whitespace-nowrap">{treatment.price}</span>
                                </div>
                              ))}
                            </div>
                          </Card>
                        )}
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-4">
                      <Button
                        className="flex-1 bg-secondary hover:bg-primary/20 text-secondary-foreground rounded-full"
                        onClick={() => window.open('https://www.fresha.com/a/radiant-life-aesthetics-cape-town-6-wodehouse-crescent-u8c4r3m4/all-offer?menu=true&pId=600666', '_blank')}
                      >
                        Make a Booking
                      </Button>
                      <Button

                        className="flex-1 border-secondary text-foreground hover:bg-secondary/20 rounded-full"
                        onClick={() => router.push('/contact')}
                      >
                        Talk to Us
                      </Button>
                    </div>
                  </div>

                  <div className={`relative h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent " />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}