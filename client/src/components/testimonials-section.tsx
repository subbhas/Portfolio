import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jordan Lee",
    role: "CEO, TechVenture Partners",
    content: "This entrepreneur in Delta is a gem! Their showcase of work is not only innovative but truly inspiring. The projects are well-curated, highlighting exceptional talent and creativity. A must-visit for anyone interested in cutting-edge developments!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  },
  {
    name: "Alex Morgan",
    role: "Investment Director, Capital Growth",
    content: "Entrepreneur in Delta offers a remarkable showcasing project. The creativity and professional piece are astounding, making it an essential visit for anyone curious about innovative work and exceptional experience!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  },
  {
    name: "Michael Chen",
    role: "Managing Partner, Pinnacle Ventures",
    content: "Working with Jayan has been transformative for our portfolio strategy. His unique approach to wealth creation while maintaining social impact has delivered exceptional results for our clients and communities alike.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, testimonials.length - 1)) % Math.max(1, testimonials.length - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Showcase Your Achievements Professionally
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformative project solutions with impeccable service make this Delta-based entrepreneur a standout in delivering exceptional quality every time.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <Card className="bg-white shadow-sm border border-gray-100 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} profile`}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
