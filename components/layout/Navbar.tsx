"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/help", label: "Help" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-teal-900/10 bg-[#f7fbfa]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <img src="/app_logo.png" alt="" className="h-8 w-8 rounded-lg" />
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-teal-950/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-teal-800">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-teal-800 px-4 py-2 font-semibold text-white">
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="text-sm font-semibold md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      {open ? (
        <Container className="flex flex-col gap-3 pb-4 text-sm md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </Container>
      ) : null}
    </header>
  );
}
