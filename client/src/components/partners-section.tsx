export default function PartnersSection() {
  const logos = [
    "IPSUM", "LOGOIPSUM", "LOGO", "PARTNERS", "VENTURES", "CAPITAL"
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-white mb-4">Trusted by Industry Leaders</h3>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll items-center space-x-16">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 flex-shrink-0">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="text-white text-3xl font-bold opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-16 flex-shrink-0">
              {logos.map((logo, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="text-white text-3xl font-bold opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
