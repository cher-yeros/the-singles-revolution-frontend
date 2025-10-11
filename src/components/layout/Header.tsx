"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useScroll } from "@/hooks/useScroll";
import { useScrollspy } from "@/hooks/useScrollspy";

interface MenuItem {
  label: string;
  href: string;
  isActive?: boolean;
  type: "anchor" | "link" | "dropdown" | "external";
  children?: MenuItem[];
}

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const { isScrolled } = useScroll();

  // Initialize scrollspy
  useScrollspy();

  // Menu configuration
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
      isActive: true,
      type: "link",
    },
    {
      label: "About",
      href: "#about",
      type: "anchor",
    },
    {
      label: "Mission",
      href: "/mission",
      type: "link",
    },
    {
      label: "Message",
      href: "/message",
      type: "link",
    },
    // {
    //   label: "Teachings",
    //   href: "#features",
    //   type: "anchor",
    // },
    {
      label: "Reviews",
      href: "#testimonials",
      type: "anchor",
    },
    // {
    //   label: "Resources",
    //   href: "#",
    //   type: "dropdown",
    //   children: [
    //     {
    //       label: "Get Free Book",
    //       href: "https://thesinglesrevolution.com/",
    //       type: "external",
    //     },
    //     {
    //       label: "Global Discussion",
    //       href: "https://thesinglesrevolution.com/",
    //       type: "external",
    //     },
    //     {
    //       label: "FAQs",
    //       href: "#faq",
    //       type: "anchor",
    //     },
    //   ],
    // },
    // {
    //   label: "Join",
    //   href: "#contact",
    //   type: "anchor",
    // },
  ];

  // Helper function to render menu items
  const renderMenuItem = (item: MenuItem) => {
    if (item.type === "dropdown") {
      return (
        <li key={item.label} className="dropdown">
          <Link href={item.href}>
            <span>{item.label}</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </Link>
          <ul>
            {item.children?.map((child: MenuItem) => (
              <li key={child.label}>
                <Link href={child.href} onClick={closeMobileNav}>
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    if (item.type === "link") {
      return (
        <li key={item.label}>
          <Link href={item.href} onClick={closeMobileNav}>
            {item.label}
          </Link>
        </li>
      );
    }

    return (
      <li key={item.label}>
        <a
          href={item.href}
          className={item.isActive ? "active" : ""}
          onClick={closeMobileNav}
        >
          {item.label}
        </a>
      </li>
    );
  };

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    // Toggle body class for mobile nav
    if (!isMobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.classList.remove("mobile-nav-active");
  };

  useEffect(() => {
    // Apply scrolled class to body
    if (isScrolled) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  }, [isScrolled]);

  useEffect(() => {
    // Handle hash links on page load
    if (window.location.hash) {
      const element = document.querySelector(
        window.location.hash
      ) as HTMLElement;
      if (element) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(element).scrollMarginTop;
          window.scrollTo({
            top: element.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  // Close mobile nav on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        closeMobileNav();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      style={{ fontFamily: "var(--nav-font)" }}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
          onClick={closeMobileNav}
        >
          <h1 className="sitename">Single & Ready</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>{menuItems.map(renderMenuItem)}</ul>
          <i
            className={`mobile-nav-toggle d-xl-none ${
              isMobileNavActive ? "bi bi-x" : "bi bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <Link
          className="btn-getstarted d-none d-xl-flex"
          href="/register"
          onClick={closeMobileNav}
        >
          Join the Revolution
        </Link>
      </div>
    </header>
  );
}
