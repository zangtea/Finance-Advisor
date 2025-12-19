import { Link } from "wouter";
import { Landmark, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Landmark className="h-6 w-6" />
              <span className="font-display text-xl font-bold">Apex Finance</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering your financial future with expert guidance in loans, savings, and strategic investments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consumer-loans" className="hover:text-white transition-colors">Personal Loans</Link></li>
              <li><Link href="/savings" className="hover:text-white transition-colors">Savings Plans</Link></li>
              <li><Link href="/investments" className="hover:text-white transition-colors">Wealth Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (800) 555-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>advisors@apexfinance.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>100 Financial District, NY</span>
              </li>
            </ul>
          </div>

          {/* Ad Space Placeholder */}
          <div className="flex flex-col items-center justify-center bg-slate-800 rounded-lg h-[250px] w-full max-w-[300px] mx-auto border border-slate-700 border-dashed">
            <span className="text-xs text-slate-500 font-mono">Advertisement (300x250)</span>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Apex Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
