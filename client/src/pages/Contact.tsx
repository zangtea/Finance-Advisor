import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      <div className="flex-1 bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-lg text-slate-600">
                Ready to take control of your finances? Fill out the form below and one of our advisors will reach out shortly.
              </p>
            </div>
            
            <LeadForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
