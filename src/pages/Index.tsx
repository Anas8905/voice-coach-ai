
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MessageCircle, ArrowRight, Globe, Upload, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  AssistAi Coach
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Elevate Your Mindset. Amplify Your Potential.
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                I help high-performers unlock clarity, confidence, and strategic growth through personalized coaching.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Work With Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/ai-coach">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Try AI Demo <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative animate-fade-in">
              <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Coaching session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How I Help You Grow
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Everything I offer is designed to transform how you think, act, and lead.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-black dark:text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Deep-Dive Sessions
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Personalized 1-on-1 coaching tailored to your goals, habits, and challenges.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-black dark:text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  AI-Powered Practice
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Train with an AI coach that reflects my style, so you grow even between sessions.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-black dark:text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Global Access
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Work with me from anywhere in the world—virtually or in-person, your growth continues.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-black dark:text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Flexible Plans
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Choose from monthly plans, intensives, or a single session based on your journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-black dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Let's build the best version of you.
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Book your first session and begin transforming today.
            </p>
            <div className="mt-8">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-xl font-bold">AssistAi Coach</span>
              </Link>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-base text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} AssistAi Coach. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
