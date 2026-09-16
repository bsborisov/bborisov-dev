"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] as const;

export function Header() {
  const [
    scrolled,
    setScrolled,
  ] =
    useState(false);

  const [
    mobileOpen,
    setMobileOpen,
  ] =
    useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(
        window.scrollY >
        20,
      );
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",

        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-18">
          <Link
            href="/"
            className="font-display text-[15px] font-bold tracking-tight text-text transition-colors hover:text-accent"
          >
            Bozhidar Borisov
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map(
              (item) => (
                <Link
                  key={
                    item.href
                  }
                  href={
                    item.href
                  }
                  className="text-[13px] font-medium tracking-wide text-text-secondary transition-colors hover:text-text"
                >
                  {
                    item.label
                  }
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={
                siteConfig.github
              }
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-text-muted transition-colors hover:text-text"
            >
              GitHub
            </a>

            <a
              href={
                siteConfig.linkedin
              }
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-text-muted transition-colors hover:text-text"
            >
              LinkedIn
            </a>

            <a
              href={
                siteConfig.cv
              }
              className="rounded bg-text px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Download CV
            </a>
          </div>

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={
              mobileOpen
            }
            onClick={() =>
              setMobileOpen(
                (current) =>
                  !current,
              )
            }
            className="flex size-10 items-center justify-center text-text md:hidden"
          >
            <span className="sr-only">
              Toggle navigation
            </span>

            <span
              aria-hidden="true"
              className="font-mono text-lg"
            >
              {mobileOpen
                ? "×"
                : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navigation.map(
              (item) => (
                <Link
                  key={
                    item.href
                  }
                  href={
                    item.href
                  }
                  onClick={() =>
                    setMobileOpen(
                      false,
                    )
                  }
                  className="text-[15px] font-medium text-text"
                >
                  {
                    item.label
                  }
                </Link>
              ),
            )}

            <div className="flex flex-wrap items-center gap-4 border-t border-border pt-5">
              <a
                href={
                  siteConfig.github
                }
                target="_blank"
                rel="noreferrer"
                className="text-sm text-text-secondary"
              >
                GitHub
              </a>

              <a
                href={
                  siteConfig.linkedin
                }
                target="_blank"
                rel="noreferrer"
                className="text-sm text-text-secondary"
              >
                LinkedIn
              </a>

              <a
                href={
                  siteConfig.cv
                }
                className="rounded bg-text px-4 py-2 text-[12px] font-semibold text-white"
              >
                Download CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}