"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.css"; // Example CSS module

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    // Open the search results in a new tab
    window.open(`/search?q=${searchValue}`);
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Find the Best Flights and Hotels</h1>
            <p>
              Search and compare flights and hotels effortlessly with CavokSky.
            </p>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter your destination or query"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>
          </div>
          <div className={styles.heroImage}>
            {/* <Image
              src="/hero-flight.jpg" // Replace with actual image path
              alt="Flights and Hotels"
              width={800}
              height={500}
              priority
            />*/}
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2>Why Choose CavokSky?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Comprehensive Search</h3>
              <p>Access a vast database of flights and hotels.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>User-Friendly Interface</h3>
              <p>
                Navigate and find your desired results with ease and simplicity.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Reliable Results</h3>
              <p>Get accurate and updated results for all your travel needs.</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Begin your search for flights and hotels now and plan your perfect
            trip.
          </p>
          <a href="#" className={styles.ctaButton}>
            Get Started
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} CavokSky. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
