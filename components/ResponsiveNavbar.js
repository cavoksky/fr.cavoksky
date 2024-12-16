"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./respnav.module.css";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener to the whole document
    document.addEventListener("click", closeMenu);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]); // Add isOpen to the dependency array

  const handleNavClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
  };

  return (
    <nav className={styles.navbar} onClick={handleNavClick}>
      <div className={styles.logo}>
        <Link href="/">
          <em>NH💚</em>
        </Link>
      </div>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">
            <em>Home</em>
          </Link>
        </li>
        <li>
          <Link href="/Cuisine">
            <em>Cuisine</em>
          </Link>
        </li>
        <li>
          <Link href="/Outdoor">
            <em>Outdoor</em>
          </Link>
        </li>
        <li>
          <Link href="/Fitness">
            <em>Fitness</em>
          </Link>
        </li>
        <li>
          <Link href="/Bien-etre">
            <em>Bien-être</em>
          </Link>
        </li>
        <li>
          <Link href="/Beauty">
            <em>Beauty</em>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
