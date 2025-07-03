import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Jayan Jayabal</h3>
            <p className="text-gray-300 leading-relaxed">
              Building legacies that change the world through strategic wealth management and innovative venture partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Investment Strategy</a></li>
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Financial Planning</a></li>
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Venture Capital</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Companies</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">WealthX Financial Solutions</a></li>
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Westgroup Financial Management</a></li>
              <li><a href="#" className="hover:text-[#0f2e35] transition-colors">Vanquity Investments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#0f2e35] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#0f2e35] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#0f2e35] rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              142 Esplanade East<br />
              North Vancouver, BC V7L 4X9
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Jayan Jayabal. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#0f2e35] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0f2e35] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0f2e35] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
