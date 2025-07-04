import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-6">Jayan Jayabal</h3>
            <p className="text-gray-300 leading-relaxed">
              Building legacies that change the world through strategic wealth management and innovative venture partnerships.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Ventures</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://www.wealthxfinancial.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2e35] transition-colors">WealthX Financial Solutions</a></li>
              <li><a href="https://pier7mortgages.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2e35] transition-colors">Pier7 Mortgages</a></li>
              <li><a href="https://justlikefamily.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f2e35] transition-colors">Just Like Family</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/jayan-jayabal-20495b155/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-[#0f2e35] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:jayan@wealthxfinancial.com" className="w-10 h-10 bg-gray-700 hover:bg-[#0f2e35] rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              142 Esplanade East<br />
              North Vancouver, BC V7L 4X9<br />
              <a href="tel:+16047047972" className="hover:text-[#0f2e35] transition-colors">(604) 704-7972</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex justify-center items-center text-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Jayan Jayabal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
