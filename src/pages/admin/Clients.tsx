
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, User, MoreHorizontal } from "lucide-react";

const Clients = () => {
  // Sample client data
  const clients = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@example.com", plan: "Professional", status: "Active", lastSession: "2 days ago" },
    { id: 2, name: "Michael Chen", email: "michael.c@example.com", plan: "Basic", status: "Active", lastSession: "5 days ago" },
    { id: 3, name: "Elena Rodriguez", email: "elena.r@example.com", plan: "Team", status: "Active", lastSession: "Yesterday" },
    { id: 4, name: "David Kim", email: "david.k@example.com", plan: "Professional", status: "Inactive", lastSession: "3 weeks ago" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">Status</Button>
          <Button variant="outline">Plan</Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Client List</CardTitle>
            <CardDescription>
              Manage your coaching clients and their access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 bg-muted/50 p-3">
                <div className="col-span-2 font-medium">Name</div>
                <div className="col-span-1 font-medium">Plan</div>
                <div className="col-span-1 font-medium">Status</div>
                <div className="col-span-1 font-medium">Last Session</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
              
              {clients.map((client) => (
                <div key={client.id} className="grid grid-cols-6 items-center border-t p-3">
                  <div className="col-span-2 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-muted-foreground">{client.email}</p>
                    </div>
                  </div>
                  <div className="col-span-1">{client.plan}</div>
                  <div className="col-span-1">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${client.status === "Active" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}>
                      {client.status}
                    </span>
                  </div>
                  <div className="col-span-1 text-muted-foreground">{client.lastSession}</div>
                  <div className="col-span-1 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Clients;
