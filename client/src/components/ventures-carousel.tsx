import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Building, Handshake } from "lucide-react";

const ventures = [
  {
    title: "WealthX Financial Solutions",
    description: "Revolutionary wealth management through integrity, innovation, and genuine client partnership. Transforming financial futures with sustainable strategies.",
    role: "Founder & CEO",
    icon: TrendingUp,
    gradient: "from-blue-600 to-blue-800",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Westgroup Financial Management",
    description: "Strategic financial guidance helping clients navigate complexity with clarity and confidence. Building generational wealth through proven methodologies.",
    role: "Chief Strategy Officer",
    icon: Building,
    gradient: "from-emerald-600 to-emerald-800",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Vanquity Investments",
    description: "Strategic acquisitions focused on creating meaningful value for all stakeholders. Pioneering compassionate care solutions across Canada.",
    role: "Managing Partner",
    icon: Handshake,
    gradient: "from-purple-600 to-purple-800",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
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
    <section id="ventures" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">Ventures</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {ventures.map((venture, index) => {
              const IconComponent = venture.icon;
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <Card className={`bg-gradient-to-br ${venture.gradient} text-white shadow-xl border-0`}>
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <img 
                              src={venture.image} 
                              alt={venture.title}
                              className="w-full h-48 object-cover rounded-xl mb-6"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-4">{venture.title}</h3>
                            <p className="text-gray-100 mb-6 leading-relaxed">
                              {venture.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-200 text-sm">{venture.role}</span>
                              <IconComponent className="w-8 h-8 text-gray-200" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
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
