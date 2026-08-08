import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { CategorySection } from './components/CategorySection';
import { SimulationSection } from './components/SimulationSection';
import { LearningMethodSection } from './components/LearningMethodSection';
import { FinalCTA } from './components/FinalCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { FaqJsonLd } from './components/FaqJsonLd';

// Title, meta description, Open Graph, dan schema situs kini statis di index.html
// supaya sudah terbaca crawler sebelum JavaScript dijalankan.
export function App() {
  return (
    <div className="min-h-screen bg-cream-warm flex flex-col font-sans text-text-main selection:bg-gold/30">
      <FaqJsonLd />
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
      <CookieConsent />
    </div>);

}
