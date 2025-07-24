// src/pages/Index.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollingFeatures from '../components/ui/features-scroll';
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MessageCircle, ArrowRight, Globe, Upload, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  AssistAi Coach
                </span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/features"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  to="/docs"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Docs
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
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
                Turn Your Coaching Content into Instant, Data-Driven Answers
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Upload your playbooks, session notes, and resources—our AI uses your data to answer every client question immediately.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/ai-coach">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See It in Action <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative animate-fade-in">
                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  src="/poster.svg"
                  alt="Coaching session"
                  className="w-full h-full object-cover"
                />
                </div>
            </div>
          </div>
        </div>
      </div>


      <ScrollingFeatures />

      

      {/* Features */}
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Everything you need to provide fast, accurate support—powered by your unique coaching knowledge.
              Turn your experience into an always-on assistant that works 24/7 for your clients.
            </p>
          </div>

          <div className="mt-20">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
    Powerful Features for Coaches
  </h2>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {/* Feature 1 */}
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center mb-4">
        <Upload className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Data-Driven Uploads
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Drag & drop your docs, templates, and transcripts—no setup fuss.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center mb-4">
        <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Instant, Contextual Answers
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        AI answers your clients using only your content—100% secure.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center mb-4">
        <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Flexible Integrations
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Connect to Slack, email, or your coaching portal via API.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center mb-4">
        <CreditCard className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Scalable Client Support
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Automate FAQs and prep clients between sessions—effortlessly.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-black dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Empower Your Clients with AI?
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Start your free trial today and see AI in action with your data.
            </p>
            <div className="mt-8">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between space-y-6 md:space-y-0">
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  AssistAi Coach
                </span>
              </Link>
            </div>
            <div className="flex space-x-6 justify-center md:justify-end">
              <Link to="/features" className="text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/docs" className="text-gray-500 hover:text-gray-900">
                Docs
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                Terms
              </Link>
            </div>
            <p className="text-center md:text-right text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} AssistAi Coach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
