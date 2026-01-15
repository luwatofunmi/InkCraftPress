import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-amber-200" />
              <span className="text-2xl font-semibold">Lexicon Press</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Creating exceptional publishing experiences since 1998. Your story, our passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Book Publishing</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Magazine Production</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Publishing Materials</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Marketing Services</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Distribution</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Careers</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Blog</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-200 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400">
                  123 Publishing Lane<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-stone-400 hover:text-amber-200 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <a href="mailto:info@lexiconpress.com" className="text-stone-400 hover:text-amber-200 transition-colors">
                  info@lexiconpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              © 2026 Lexicon Press. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-amber-200 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
