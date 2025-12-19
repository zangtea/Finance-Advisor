import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, TrendingUp, PiggyBank, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 bg-slate-50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Trusted by over 10,000 clients
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Secure Your Future With <span className="text-primary">Smart Finance</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Expert guidance on loans, savings, and investments tailored to your life goals. 
                We simplify the complex world of finance so you can focus on what matters.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                    Start Free Consultation
                  </Button>
                </Link>
                <Link href="/consumer-loans">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base border-primary/20 hover:bg-primary/5">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">15+</h3>
                  <p className="text-sm text-slate-600 mt-1">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">$2B+</h3>
                  <p className="text-sm text-slate-600 mt-1">Assets Managed</p>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20" />
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Comprehensive Financial Solutions</h2>
            <p className="text-lg text-slate-600">
              Whether you're looking to grow your wealth or need immediate funding, our tailored services are designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/consumer-loans" className="group">
              <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Consumer Loans</h3>
                <p className="text-slate-600 mb-4">
                  Competitive rates for personal needs, home renovation, or debt consolidation with flexible repayment terms.
                </p>
                <span className="text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/savings" className="group">
              <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Savings Plans</h3>
                <p className="text-slate-600 mb-4">
                  High-yield savings accounts and structured plans to help you reach your financial milestones faster.
                </p>
                <span className="text-accent font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Start saving <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/investments" className="group">
              <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Investments</h3>
                <p className="text-slate-600 mb-4">
                  Diversified investment portfolios managed by experts to protect and grow your wealth over time.
                </p>
                <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  View strategies <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Choose Apex Finance?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Uncompromising Security</h3>
                    <p className="text-slate-400">Your data and assets are protected by bank-grade encryption and security protocols.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Advisory Team</h3>
                    <p className="text-slate-400">Personalized support from certified financial professionals who understand your goals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ad Placeholder */}
            <div className="flex items-center justify-center h-[300px] bg-slate-800 rounded-2xl border-2 border-dashed border-slate-700">
              <span className="text-slate-500">Ad Space (Responsive)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
