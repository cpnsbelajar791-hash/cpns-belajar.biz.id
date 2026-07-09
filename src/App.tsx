import React, { useEffect, createElement } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { CategorySection } from './components/CategorySection';
import { SimulationSection } from './components/SimulationSection';
import { LearningMethodSection } from './components/LearningMethodSection';
import { FinalCTA } from './components/FinalCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
export function App() {
  useEffect(() => {
    document.title =
    'CPNS Mastery — Latihan TWK, TIU, TKP untuk Persiapan CPNS SKD';
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Latihan TWK, TIU, dan TKP dalam satu alur belajar terarah. Bangun strategi, kecepatan, dan konsistensi menuju nilai aman di seleksi CPNS SKD.'
    );
  }, []);
  return (
    <div className="min-h-screen bg-cream-warm flex flex-col font-sans text-text-main selection:bg-gold/30">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <CategorySection />
        <SimulationSection />
        <LearningMethodSection />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>);

}