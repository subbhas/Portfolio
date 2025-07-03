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
      {/* Professional Banner Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-[#0f2e35] via-[#1a4a52] to-[#0f2e35]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
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
