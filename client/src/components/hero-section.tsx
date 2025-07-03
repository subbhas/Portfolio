import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/gettyimages-1956949830-2048x2048_1751502849477.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* HD Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 tracking-tight animate-fade-in">
          Jayan Jayabal
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          I don't just build portfolios. I build legacies that change the world.
        </p>
        <Button 
          onClick={scrollToContact}
          className="btn-primary text-lg px-8 py-4"
        >
          Schedule A Consultation
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
