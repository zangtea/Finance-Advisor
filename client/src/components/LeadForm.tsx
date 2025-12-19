import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { type CreateLeadInput } from "@shared/routes";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useLocation } from "wouter";

export function LeadForm() {
  const createLead = useCreateLead();
  const [, setLocation] = useLocation();

  const form = useForm<CreateLeadInput>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      phone: "",
      needs: "",
    },
  });

  const onSubmit = (data: CreateLeadInput) => {
    createLead.mutate(data, {
      onSuccess: () => {
        form.reset();
        setLocation("/thank-you");
      },
    });
  };

  return (
    <Card className="w-full shadow-2xl border-primary/10 bg-white/95 backdrop-blur overflow-hidden">
      <div className="h-2 w-full bg-gradient-to-r from-primary to-accent" />
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-2xl font-bold text-center">
          Free Financial Consultation
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Speak with our certified advisors today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="bg-gray-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 000-0000" type="tel" className="bg-gray-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How can we help?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I'm interested in a personal loan for home renovation..."
                      className="resize-none bg-gray-50"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              disabled={createLead.isPending}
            >
              {createLead.isPending ? "Submitting..." : "Request Consultation"}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
              <Lock className="w-3 h-3" />
              <span>Your information is secure and confidential.</span>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
