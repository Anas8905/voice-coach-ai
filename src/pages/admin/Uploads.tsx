
import { useState } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AudioUpload } from "@/components/ui/audio-upload";
import { Upload, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Uploads = () => {
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulating processing delay
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: "Content uploaded successfully",
        description: "Your content is now being processed and added to your AI coach.",
      });
      setNotes("");
      setTitle("");
    }, 2000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Upload Content</h1>
          <Button variant="outline" className="hidden md:flex">
            View Upload History
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          Upload audio recordings and notes to train your AI coaching assistant.
        </p>
        
        <Tabs defaultValue="audio" className="space-y-6">
          <TabsList>
            <TabsTrigger value="audio">Audio Recordings</TabsTrigger>
            <TabsTrigger value="text">Text Notes</TabsTrigger>
            <TabsTrigger value="history">Upload History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="audio" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Language</CardTitle>
                  <CardDescription>
                    Upload coaching recordings in your primary language (English)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AudioUpload language="en" />
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  The AI will analyze your coaching style and tone from these recordings
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Secondary Language</CardTitle>
                  <CardDescription>
                    Upload coaching recordings in your secondary language
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AudioUpload language="other" />
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  These recordings will help your AI coach communicate in your secondary language
                </CardFooter>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recording Details</CardTitle>
                <CardDescription>
                  Add context about this coaching session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="title">Recording Title</Label>
                    <Input 
                      id="title" 
                      placeholder="E.g., Career Coaching Session #12"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Session Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Add any notes or context about this coaching session..."
                      className="min-h-32"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                  
                  <Button type="submit" disabled={processing}>
                    {processing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Process Uploads
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Written Notes</CardTitle>
                <CardDescription>
                  Add coaching notes, methodologies, or frameworks to train your AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="note-title">Title</Label>
                    <Input id="note-title" placeholder="E.g., Goal-Setting Framework" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select 
                      id="language" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="en">English</option>
                      <option value="other">Secondary Language</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea 
                      id="content" 
                      placeholder="Enter your coaching methodologies, frameworks, or notes here..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Or upload document</Label>
                    <Input id="file-upload" type="file" />
                    <p className="text-xs text-muted-foreground">
                      Accepts .txt, .docx, .md, or .pdf files
                    </p>
                  </div>
                  
                  <Button type="submit">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Notes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Upload History</CardTitle>
                <CardDescription>
                  Review your previous uploads and their processing status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-4 p-3 rounded-md border">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}>
                        {i === 1 ? (
                          <Upload className="h-5 w-5" />
                        ) : (
                          <Check className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {i % 2 === 0 ? "Audio Recording" : "Text Notes"} #{i}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {i} day{i !== 1 ? "s" : ""} ago
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {i === 1 ? "Processing" : "Processed and added to AI coach"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Uploads;
