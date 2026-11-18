import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Container className="my-24 rounded-[2rem] bg-teal-900 px-8 py-12 text-teal-50 sm:px-12">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight">A board you can finish in a quiet room.</h2>
        <p className="mt-4 max-w-xl text-teal-100/80">
          Forty campaign puzzles and one daily weave. If you want the release notes or a level that will not settle,
          write to the support desk.
        </p>
        <div className="mt-8">
          <Button href="/contact" className="bg-white text-teal-900 hover:bg-teal-50">
            Contact PathWeave
          </Button>
        </div>
      </Container>
    </main>
  );
}
