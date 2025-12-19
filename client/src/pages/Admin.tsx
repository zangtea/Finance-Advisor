import { useLeads } from "@/hooks/use-leads";
import { useAuth } from "@/hooks/use-auth";
import { Navigation } from "@/components/Navigation";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const { data: leads, isLoading, error } = useLeads();
  const { user, isLoading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-slate-50">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">You must be logged in to view this page.</p>
        <Button onClick={() => window.location.href = "/api/login"}>Login</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card className="shadow-lg border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between border-b bg-white/50">
            <div>
              <CardTitle className="text-2xl font-bold">Leads Dashboard</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                View and manage incoming consultation requests.
              </p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Total Leads: {leads?.length || 0}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-12 flex justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="p-12 text-center text-destructive">
                Error loading leads: {error.message}
              </div>
            ) : !leads?.length ? (
              <div className="p-12 text-center text-muted-foreground">
                No leads found. Waiting for submissions.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[200px]">Date</TableHead>
                      <TableHead className="w-[200px]">Name</TableHead>
                      <TableHead className="w-[150px]">Phone</TableHead>
                      <TableHead>Needs</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id} className="hover:bg-slate-50/50">
                        <TableCell className="text-muted-foreground">
                          {lead.createdAt 
                            ? format(new Date(lead.createdAt), "MMM d, yyyy h:mm a")
                            : "N/A"
                          }
                        </TableCell>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>{lead.phone}</TableCell>
                        <TableCell className="max-w-md truncate" title={lead.needs}>
                          {lead.needs}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
