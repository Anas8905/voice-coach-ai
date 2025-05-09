
import { ClientLayout } from "@/components/layout/client-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, ChevronRight, Calendar, BarChart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ClientPortal = () => {
  const userName = "Alex";
  const lastSession = new Date();
  lastSession.setDate(lastSession.getDate() - 2);
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Welcome card */}
        <Card className="bg-gradient-to-r from-coach-500 to-coach-600">
          <CardContent className="pt-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {userName}</h1>
                <p className="opacity-90 mt-1">
                  Ready for your coaching journey today?
                </p>
                <div className="mt-4">
                  <Link to="/ai-coach">
                    <Button variant="secondary" className="px-6">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Talk to AI Coach
                    </Button>
                  </Link>
                </div>
              </div>
              
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg">AC</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
        
        {/* Stats overview */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Coaching sessions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Coaching Sessions
                  </p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <div className="p-2 rounded-full bg-coach-100 dark:bg-coach-900">
                  <MessageCircle className="h-5 w-5 text-coach-600 dark:text-coach-300" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Last session: {lastSession.toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
          
          {/* Goals tracked */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Goals Completed
                  </p>
                  <p className="text-2xl font-bold">7</p>
                </div>
                <div className="p-2 rounded-full bg-coach-100 dark:bg-coach-900">
                  <BarChart className="h-5 w-5 text-coach-600 dark:text-coach-300" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                3 goals in progress
              </div>
            </CardContent>
          </Card>
          
          {/* Subscription */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Current Plan
                  </p>
                  <p className="text-xl font-bold">Professional</p>
                </div>
                <div className="p-2 rounded-full bg-coach-100 dark:bg-coach-900">
                  <Clock className="h-5 w-5 text-coach-600 dark:text-coach-300" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Renews in 18 days
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest coaching interactions and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4 p-3 bg-muted/40 rounded-md">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-coach-500 text-white">C</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">AI Coaching Session #{i}</p>
                      <span className="text-xs text-muted-foreground">
                        {i} day{i !== 1 ? "s" : ""} ago
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {i === 1 
                        ? "Discussed strategies for improving work-life balance and prioritization."
                        : i === 2 
                        ? "Explored career transition opportunities and skills assessment."
                        : "Set achievable goals for personal development and created action plan."
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Goals and resources */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Current Goals</CardTitle>
              <CardDescription>
                Track your progress on current goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Improve public speaking skills", "Develop leadership presence", "Create work-life balance"].map((goal, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                  <div className="space-y-1">
                    <p className="font-medium">{goal}</p>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-coach-500" style={{ width: `${(3 - i) * 30}%` }} />
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommended Resources</CardTitle>
              <CardDescription>
                Curated resources based on your goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "The 7 Habits of Highly Effective People", type: "Book" },
                { title: "Deep Work: Rules for Focused Success", type: "Audio" },
                { title: "Strategic Leadership Workshop", type: "Webinar" },
              ].map((resource, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{resource.type}</p>
                  </div>
                  <Button variant="outline" size="sm">Access</Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-coach-600">
                View All Resources
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Schedule section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Schedule</CardTitle>
                <CardDescription>Manage your coaching sessions</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Session
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              <Calendar className="mx-auto h-8 w-8 opacity-50" />
              <p className="mt-2">No upcoming sessions scheduled</p>
              <Button variant="link" className="mt-2">
                Add a new session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientLayout>
  );
};

export default ClientPortal;
