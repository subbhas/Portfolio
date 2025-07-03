import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jayan Jayabal
ORG:WealthX Financial Solutions
TITLE:Wealth Management Expert
TEL:+16047047972
EMAIL:jayan@wealthxfinancial.com
ADR:;;142 Esplanade East;North Vancouver;BC;V7L 4X9;Canada
URL:https://www.wealthxfinancial.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jayan_Jayabal.vcf';
    link.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold transition-colors ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}>
            JJ
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Ventures", id: "ventures" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0f2e35]"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Phone Number */}
            <a
              href="tel:+16047047972"
              className={`flex items-center gap-2 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-[#0f2e35]"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              <Phone size={16} />
              <span className="font-medium">(604) 704-7972</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Ventures", id: "ventures" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 transition-colors rounded-md ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#0f2e35] hover:bg-gray-50"
                      : "text-gray-700 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Actions */}
              <a
                href="tel:+16047047972"
                className={`flex items-center gap-2 w-full px-3 py-2 transition-colors rounded-md ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0f2e35] hover:bg-gray-50"
                    : "text-gray-700 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Phone size={16} />
                <span>(604) 704-7972</span>
              </a>
              
              <button
                onClick={downloadVCard}
                className={`block w-full text-left px-3 py-2 transition-colors rounded-md ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0f2e35] hover:bg-gray-50"
                    : "text-gray-700 hover:text-white hover:bg-gray-800"
                }`}
              >
                Download Contact Card
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
