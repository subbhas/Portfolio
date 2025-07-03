import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import wealthxLogo from "@assets/Screenshot 2025-07-02 at 17.46.02_1751503635779.png";
import pier7Logo from "@assets/Pier7-Mortgage-Architect_1751503635779.png";
import jlFamilyLogo from "@assets/jlfamily-logo_1751503635778.jpeg";

const ventures = [
  {
    title: "WealthX Financial Solutions",
    description: "Empowering individuals and families with tailored wealth strategies. From budgeting and saving to tax optimization, investment planning, and estate management — everything is designed to build lasting wealth and long-term security.",
    url: "https://www.wealthxfinancial.com/",
    logo: wealthxLogo
  },
  {
    title: "Pier7 Mortgages", 
    description: "Innovative mortgage solutions for homeowners and businesses. Whether you're refinancing or investing in commercial property, we provide flexible, expert-backed mortgage options.",
    url: "https://pier7mortgages.com/",
    logo: pier7Logo
  },
  {
    title: "Just Like Family",
    description: "With franchises in North Vancouver and Victoria, we provide compassionate, customized home care. From post-hospital support to dementia care — prioritizing dignity and quality of life.",
    url: "https://justlikefamily.ca/",
    logo: jlFamilyLogo
  }
];

export default function VenturesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ventures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ventures" className="py-20 relative" style={{ backgroundColor: '#D3D3D3' }}>
      {/* Professional Financial Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='financial-grid' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%230f2e35' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23financial-grid)'/%3E%3Cg fill='%230f2e35' opacity='0.15'%3E%3Ccircle cx='25' cy='25' r='2'/%3E%3Ccircle cx='75' cy='25' r='2'/%3E%3Ccircle cx='25' cy='75' r='2'/%3E%3Ccircle cx='75' cy='75' r='2'/%3E%3Cpath d='M10 50 Q 30 30 50 50 T 90 50' stroke='%230f2e35' stroke-width='1' fill='none' opacity='0.4'/%3E%3Cpath d='M15 60 L 25 45 L 35 55 L 45 40 L 55 50 L 65 35 L 75 45 L 85 30' stroke='%230f2e35' stroke-width='1.5' fill='none' opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      ></div>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">Ventures</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {ventures.map((venture, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="max-w-md mx-auto">
                  <Card className="bg-white shadow-lg border border-gray-200 aspect-square">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="text-center">
                        {/* Company Logo */}
                        <div className="mb-6 flex justify-center">
                          <img 
                            src={venture.logo} 
                            alt={`${venture.title} logo`}
                            className={`h-16 w-auto max-w-[200px] object-contain ${
                              venture.title === "Pier7 Mortgages" ? "filter brightness-0" : ""
                            } ${
                              venture.title === "WealthX Financial Solutions" ? "object-right" : ""
                            }`}
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">{venture.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                          {venture.description}
                        </p>
                        <a
                          href={venture.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-medium transition-colors"
                          style={{ color: '#0f2e35' }}
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {ventures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#0f2e35]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
