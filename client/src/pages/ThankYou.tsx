import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We have received your request. One of our senior financial advisors will contact you within 24 hours to discuss your needs.
            </p>
            
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-white">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
