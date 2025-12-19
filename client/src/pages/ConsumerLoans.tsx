import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Check, TrendingUp } from "lucide-react";

export default function ConsumerLoans() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Consumer Loans
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flexible financing solutions designed to help you achieve your goals without the stress.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-100 text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">Personal Financing</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you're planning a dream wedding, renovating your home, or need to cover unexpected expenses, our consumer loans offer the flexibility you need. We provide competitive interest rates and transparent terms with no hidden fees.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Low APR starting at 5.99%",
                  "No prepayment penalties",
                  "Funding in as little as 24 hours",
                  "Fixed monthly payments",
                  "Check rate without affecting credit score",
                  "Terms from 12 to 60 months"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
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
