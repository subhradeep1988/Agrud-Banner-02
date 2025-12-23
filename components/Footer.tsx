import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl font-display font-bold tracking-tight text-white">AGRUD</span>
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                Agrud is a global leader in financial technology and data intelligence, helping institutions navigate the complexities of the digital economy with confidence.
              </p>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors border border-white/10 hover:border-brand-primary">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-brand-accent inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#solutions" className="hover:text-brand-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Solutions</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Services</a></li>
              <li><a href="#company" className="hover:text-brand-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> About Agrud</a></li>
              <li><a href="#insights" className="hover:text-brand-accent transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span> Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-brand-accent inline-block pb-1">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>123 Financial District,<br/>London, UK EC2A 4NE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span>contact@agrud.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>+44 20 7123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agrud. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-12 h-12 bg-brand-primary hover:bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 z-20"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;