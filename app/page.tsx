"use client";

import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { Services } from "@/components/services";
import { BookingForm } from "@/components/booking-form";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-[#FFF8F0] via-white to-[#F7FCF9]`}> 
      <Navigation />

      <header className="container mx-auto px-6 lg:px-8">
        <HeroSection />
      </header>

      <section id="services" className="container mx-auto px-6 lg:px-8 py-16">
        <Services />
      </section>

      <section id="booking" className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <BookingForm />
          </div>
          <div className="space-y-6">
            <Pricing />
            <Testimonials />
          </div>
        </div>
      </section>

      <section id="gallery" className="container mx-auto px-6 lg:px-8 py-16">
        <Gallery />
      </section>

      <section id="about" className="container mx-auto px-6 lg:px-8 py-16">
        <About />
      </section>

      <section id="contact" className="container mx-auto px-6 lg:px-8 py-16">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
