import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

export default function Investments() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Strategic Investments
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expertly managed portfolios designed to maximize returns while managing risk.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">Wealth Management</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Investing shouldn't be a gamble. Our certified financial advisors build diversified portfolios aligned with your risk tolerance and timeline. From stocks and bonds to ETFs and alternative assets, we handle the complexity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Growth Portfolios</h3>
                  <p className="text-slate-600 text-sm">Focused on long-term capital appreciation for retirement or major life goals.</p>
                </div>
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-lg mb-2">Conservative Income</h3>
                  <p className="text-slate-600 text-sm">Prioritizing capital preservation and steady income generation for stability.</p>
                </div>
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
