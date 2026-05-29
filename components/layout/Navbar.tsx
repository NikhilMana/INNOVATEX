"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { navigation, type NavItem } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [threshold, setThreshold] = useState(80);

  useEffect(() => {
    if (pathname === "/") {
      setThreshold(window.innerHeight * 4.5);
    } else {
      setThreshold(80);
    }
  }, [pathname]);

  const scrolled = useScrollPosition(threshold);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-out-expo",
          scrolled
            ? "bg-[#0d0d1a]/95 backdrop-blur-md border-b border-white/10 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-x flex items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            className="group flex items-center"
          >
            <img src="/images/logos/innovatex-logo-nav.png" alt="InnovateX Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-md scale-[1.4] origin-left" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              size="sm"
              icon={<Sparkles size={14} />}
              iconPosition="left"
              onClick={() => (window.location.href = "/contact")}
            >
              Join Us
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));
  const hasChildren = !!item.children?.length;

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "group relative px-4 py-2 text-sm font-medium transition-colors duration-300",
          isActive ? "text-white" : "text-muted hover:text-white"
        )}
      >
        <span className="relative">
          {item.label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-magenta to-purple-500 transition-all duration-500 ease-out-expo",
              isActive ? "w-full" : "w-0 group-hover:w-full"
            )}
          />
        </span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={cn(
          "group flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300",
          isActive ? "text-white" : "text-muted hover:text-white"
        )}
      >
        <span className="relative">
          {item.label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-magenta to-purple-500 transition-all duration-500 ease-out-expo",
              isActive ? "w-full" : "w-0 group-hover:w-full"
            )}
          />
        </span>
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full mt-2 -translate-x-1/2 w-72 origin-top transition-all duration-300 ease-out-expo",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-[#110f17] border border-white/5 rounded-2xl p-2 shadow-2xl">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-purple-500/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm font-semibold text-white">
                    {child.label}
                  </span>
                  {child.badge && (
                    <Badge
                      variant={
                        child.badge === "FLAGSHIP"
                          ? "featured"
                          : child.badge === "UPCOMING"
                            ? "upcoming"
                            : "soon"
                      }
                    >
                      {child.badge}
                    </Badge>
                  )}
                </div>
                {child.description && (
                  <p className="mt-0.5 text-xs text-muted">
                    {child.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] lg:hidden transition-all duration-500 ease-out-expo",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-bg/95 backdrop-blur-2xl transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "relative h-full w-full overflow-y-auto px-6 py-6 transition-all duration-500 ease-out-expo",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
          >
            <img src="/images/logos/innovatex-logo-nav.png" alt="InnovateX Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-md scale-[1.4] origin-left" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-2">
          {navigation.map((item, idx) => (
            <MobileNavItem
              key={item.href}
              item={item}
              pathname={pathname}
              delay={idx * 60}
              open={open}
            />
          ))}
        </nav>

        <div className="mt-10">
          <Button
            fullWidth
            size="lg"
            icon={<Sparkles size={16} />}
            iconPosition="left"
          >
            Join InnovateX
          </Button>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  pathname,
  delay,
  open,
}: {
  item: NavItem;
  pathname: string;
  delay: number;
  open: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const isActive = pathname === item.href;
  const hasChildren = !!item.children?.length;

  return (
    <div
      className="transition-all duration-500"
      style={{
        transitionDelay: open ? `${delay}ms` : "0ms",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {hasChildren ? (
        <>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex w-full items-center justify-between rounded-2xl glass-card px-5 py-4"
          >
            <span className="font-display text-lg font-semibold">
              {item.label}
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>
          {expanded && (
            <div className="mt-2 ml-4 flex flex-col gap-1 border-l border-purple-500/20 pl-4">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center justify-between py-2 text-sm text-muted hover:text-white"
                >
                  <span>{child.label}</span>
                  {child.badge && (
                    <Badge
                      variant={
                        child.badge === "FLAGSHIP"
                          ? "featured"
                          : child.badge === "UPCOMING"
                            ? "upcoming"
                            : "soon"
                      }
                    >
                      {child.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "block rounded-2xl glass-card px-5 py-4 font-display text-lg font-semibold transition-colors",
            isActive && "border-purple-400/40 bg-purple-500/10"
          )}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
}
