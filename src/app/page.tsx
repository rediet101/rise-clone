import Sectors from '@/components/Sectors';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sectors/>
      <Testimonials/>
      <AboutUs/>
      <Footer/>
      
      <main>
        {/* Your page content goes here */
        
        }
      </main>
    </div>
  );
  
}