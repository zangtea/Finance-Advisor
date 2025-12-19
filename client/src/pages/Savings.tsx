import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { PiggyBank, Check } from "lucide-react";

export default function Savings() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Smart Savings Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Build a safety net and plan for the future with our high-yield savings accounts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-green-100 text-accent">
                  <PiggyBank className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">Grow Your Wealth</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Stop letting your money sit idle. Our savings accounts work harder for you, offering rates well above the national average. With automated savings tools and goal tracking, building wealth has never been easier.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
                <h3 className="text-xl font-bold mb-4">Why save with Apex?</h3>
                <ul className="space-y-4">
                  {[
                    "APY up to 4.50% on High-Yield Accounts",
                    "FDIC Insured up to $250,000",
                    "No monthly maintenance fees",
                    "Unlimited transfers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Ad Placeholder */}
            <div className="w-full h-[250px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
              <span className="text-slate-400">Ad Space (Content Banner)</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadForm />
              
              {/* Ad Placeholder Sidebar */}
              <div className="mt-8 w-full h-[250px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
                <span className="text-slate-400">Ad Space (300x250)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
