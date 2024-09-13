'use client'
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import Budget from "./sections/budget";
import News from "./sections/news";
import ContactForm from "./sections/contact-form";
import Experience from "./sections/experience";

export default function Home() {
  return (
    <div className="bg-[#0B132B] text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Budget />
      <News />
      <ContactForm />
      <Footer />
    </div>
  );
}
