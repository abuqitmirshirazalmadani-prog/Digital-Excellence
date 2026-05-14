import React from 'react';

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Malaysia", flag: "🇲🇾" },
];

const CountryMarquee: React.FC = () => {
  return (
    <section className="border-y overflow-hidden bg-[#151515]/30 border-white/5 pt-8 pb-8 relative" id="global-presence">
        <div className="z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent w-24 absolute top-0 bottom-0 left-0"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

        <div className="flex whitespace-nowrap w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 lg:gap-20 px-10 text-gray-400 text-lg font-medium">
                    {countries.map((country, idx) => (
                        <div key={idx} className="flex gap-3 items-center group transition-colors hover:text-white">
                            <span className="text-2xl">{country.flag}</span>
                            <span className="tracking-tight text-white/80 group-hover:text-white">{country.name}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
  );
};

export default CountryMarquee;
