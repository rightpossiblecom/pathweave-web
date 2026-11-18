import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email PathWeave support about a level, a device, or this website.",
};

export default function ContactPage() {
  return (
    <main>
      <Container className="max-w-3xl py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-teal-950">Contact</h1>
        <p className="mt-4 max-w-xl leading-7 text-teal-950/75">
          PathWeave has no in-app account, so the way to reach us is email. Include the chapter and level if a board
          will not complete, and the phone model if the app will not open.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white"
        >
          {site.email}
        </a>
        <p className="mt-8 text-sm leading-6 text-teal-950/60">
          We read messages sent to that address. We do not offer phone support, and we do not need a screenshot of your
          home screen or any password.
        </p>
      </Container>
    </main>
  );
}
