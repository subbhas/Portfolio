import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ventures = [
  {
    title: "WealthX Financial Solutions",
    description: "Empowering individuals and families with tailored wealth strategies. From budgeting and saving to tax optimization, investment planning, and estate management — everything is designed to build lasting wealth and long-term security.",
    url: "https://www.wealthxfinancial.com/"
  },
  {
    title: "Pier7 Mortgages", 
    description: "Innovative mortgage solutions for homeowners and businesses. Whether you're refinancing or investing in commercial property, we provide flexible, expert-backed mortgage options.",
    url: "https://pier7mortgages.com/"
  },
  {
    title: "Just Like Family",
    description: "With franchises in North Vancouver and Victoria, we provide compassionate, customized home care. From post-hospital support to dementia care — prioritizing dignity and quality of life.",
    url: "https://justlikefamily.ca/"
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
    <section id="ventures" className="py-20" style={{ backgroundColor: '#D3D3D3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="max-w-4xl mx-auto">
                  <Card className="bg-white shadow-lg border border-gray-200">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{venture.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                          {venture.description}
                        </p>
                        <a
                          href={venture.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
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
                  index === currentSlide ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
