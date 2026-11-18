import Link from "next/link";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-teal-900/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <img src="/app_logo.png" alt="" className="h-7 w-7 rounded-md" />
            {site.name}
          </div>
          <p className="mt-2 max-w-sm text-sm leading-6 text-teal-950/70">
            One stroke. Every open tile. A quiet puzzle you can play with the network off.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-teal-950/70">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/help">Help</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </Container>
      <Container className="mt-6 text-xs text-teal-950/50">© {new Date().getFullYear()} PathWeave</Container>
    </footer>
  );
}
