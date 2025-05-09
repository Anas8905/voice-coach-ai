
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Upload, MessageCircle, BarChart } from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Clients */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-coach-100 rounded-full dark:bg-coach-900">
                    <Users className="h-6 w-6 text-coach-600 dark:text-coach-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
                    <h3 className="text-2xl font-bold">48</h3>
                  </div>
                </div>
                <div className="text-xs text-green-500 flex items-center">
                  +12%
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uploads */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-coach-100 rounded-full dark:bg-coach-900">
                    <Upload className="h-6 w-6 text-coach-600 dark:text-coach-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Uploads</p>
                    <h3 className="text-2xl font-bold">122</h3>
                  </div>
                </div>
                <div className="text-xs text-green-500 flex items-center">
                  +8%
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Interactions */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-coach-100 rounded-full dark:bg-coach-900">
                    <MessageCircle className="h-6 w-6 text-coach-600 dark:text-coach-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">AI Interactions</p>
                    <h3 className="text-2xl font-bold">1.8k</h3>
                  </div>
                </div>
                <div className="text-xs text-green-500 flex items-center">
                  +24%
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-coach-100 rounded-full dark:bg-coach-900">
                    <BarChart className="h-6 w-6 text-coach-600 dark:text-coach-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                    <h3 className="text-2xl font-bold">$3.2k</h3>
                  </div>
                </div>
                <div className="text-xs text-green-500 flex items-center">
                  +16%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Coach Training Status</CardTitle>
                <CardDescription>
                  How well your AI model is trained with your coaching content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">English content</div>
                      <div className="text-sm text-muted-foreground">86%</div>
                    </div>
                    <Progress value={86} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Secondary language</div>
                      <div className="text-sm text-muted-foreground">68%</div>
                    </div>
                    <Progress value={68} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Style matching</div>
                      <div className="text-sm text-muted-foreground">92%</div>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Overall quality</div>
                      <div className="text-sm text-muted-foreground">79%</div>
                    </div>
                    <Progress value={79} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Clients</CardTitle>
                  <CardDescription>
                    New clients in the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-sm font-medium">{String.fromCharCode(64 + i)}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Client {i}</p>
                            <p className="text-xs text-muted-foreground">Joined {i} days ago</p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {i * 4} interactions
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Uploads</CardTitle>
                  <CardDescription>
                    Latest content you've added to train your AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                            <Upload className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Audio recording {i}</p>
                            <p className="text-xs text-muted-foreground">{i === 1 || i === 3 ? "English" : "Secondary language"}</p>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {i} hour{i !== 1 ? "s" : ""} ago
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Detailed analytics will appear here</CardTitle>
                <CardDescription>
                  This section will display charts and deeper insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analytics dashboard is under development
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Download and export reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reports dashboard is under development
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
