
import { useState, useRef, useEffect } from "react";
import { ClientLayout } from "@/components/layout/client-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Mic, MicOff, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const AICoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI coaching assistant. How can I help you today with your goals?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState<"en" | "other">("en");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      // Sample responses based on user input
      let responseText = "";
      const userInput = inputValue.toLowerCase();
      
      if (userInput.includes("goal") || userInput.includes("objective")) {
        responseText = "Setting clear goals is the foundation of progress. What specific outcome would you like to achieve? Let's make it measurable and time-bound.";
      } else if (userInput.includes("stuck") || userInput.includes("challenge")) {
        responseText = "When we feel stuck, it's often because we're facing a limiting belief. What story are you telling yourself about this situation? Let's explore if that narrative is truly serving you.";
      } else if (userInput.includes("career") || userInput.includes("job")) {
        responseText = "Career decisions are meaningful crossroads. What values are most important to you in your professional life? Let's ensure your next steps align with those core values.";
      } else if (userInput.includes("anxious") || userInput.includes("stressed")) {
        responseText = "I notice you're feeling some anxiety. Let's pause and take a breath together. What small action could you take today to create a sense of progress?";
      } else {
        responseText = "That's an interesting point. Could you tell me more about how this relates to your current goals? What would success look like for you in this area?";
      }
      
      // Add AI response
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: responseText,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      toast({
        title: "Voice recording stopped",
        description: "Voice recognition is still in development."
      });
    } else {
      setIsRecording(true);
      toast({
        title: "Voice recording started",
        description: "Speak clearly into your microphone."
      });
      
      // Simulate recording for demo
      setTimeout(() => {
        setIsRecording(false);
        setInputValue("I'm feeling stuck with my career path. What should I do?");
      }, 3000);
    }
  };

  return (
    <ClientLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-1rem)] overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">AI Coach</h1>
          
          <div className="flex items-center space-x-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "other")}
              className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
            >
              <option value="en">English</option>
              <option value="other">Secondary Language</option>
            </select>
          </div>
        </div>
        
        <Card className="flex-1 flex flex-col overflow-hidden">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 max-w-[85%]",
                    message.role === "user" ? "ml-auto" : ""
                  )}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-coach-500 text-white">C</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-xl p-3",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gray-200">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-3 max-w-[85%]">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-coach-500 text-white">C</AvatarFallback>
                  </Avatar>
                  <div className="rounded-xl p-3 bg-muted">
                    <div className="flex space-x-1 items-center h-6">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150" />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={toggleRecording}
                className={isRecording ? "bg-red-100 border-red-300 text-red-600" : ""}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 min-h-10 resize-none"
                rows={1}
              />
              
              <Button 
                type="button" 
                onClick={handleSendMessage}
                disabled={inputValue.trim() === "" || isTyping}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              This AI assistant is trained on your coach's style and approach
            </p>
          </div>
        </Card>
      </div>
    </ClientLayout>
  );
};

export default AICoach;
