import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import NameGrid from "../components/NameGrid";
import Footer from "../components/Footer";
import About from "../components/About";
function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="bg-effects">
        <div className="blur-circle blur-circle-1"></div>
        <div className="blur-circle blur-circle-2"></div>
        <div className="blur-circle blur-circle-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />

      <section id="names" className="names-section" style={{ padding: '80px 20px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '40px',
            background: 'linear-gradient(to right, #fff, var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>99 Beautiful Names of Allah</h2>

          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <NameGrid searchTerm={searchTerm} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;