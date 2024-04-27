"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import styles from "../app/styles/Navbar.module.css";
// Import statements remain the same

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-silver py-[30px] xs:px-4 xl:px-[100px] flex justify-between items-center sticky top-0 z-20 w-full h-fit lg:static text-gray-700">
      {/* Wrap Image component directly in Link */}
      <Link href="/">
        <Image src="/logo.png" width={155} height={24} alt="logo" />
      </Link>

      <ul
        className={`gap-12 lg:flex ${
          isOpen
            ? "flex flex-col absolute top-0 right-0 items-center justify-center w-full bg-white h-screen z-40 transition-all translate-y-0"
            : "xs:absolute xs:-translate-y-96 xs:flex xs:flex-col lg:flex-row lg:static lg:translate-y-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.id} className={styles.navItem}>
            {/* Wrap link content directly in Link */}
            <Link href={link.url}>
              {link.title}
              
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden z-50"
        onClick={() => {
          setIsOpen(!isOpen);
          document.documentElement.classList.toggle("fixed");
        }}
      >
        <Image src={"/menu.png"} width={30} height={24} alt="burger-menu" />
      </button>
    </nav>
  );
};

export default Navbar;
