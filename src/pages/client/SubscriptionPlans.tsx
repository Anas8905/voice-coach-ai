
import { useState } from "react";
import { ClientLayout } from "@/components/layout/client-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";


interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  current?: boolean;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    description: "Limited access to the AI coach",
    features: [
      "5 coaching sessions per month",
      "English language only",
      "Text-based conversations",
      "Access to basic coaching templates",
      "Whatsapp integration",
      "Email support"
    ]
  },
  {
    id: "pro",
    name: "Professional",
    price: 19.99,
    description: "Full access to the AI coach",
    features: [
      "Unlimited coaching sessions",
      "Multilingual support",
      "Voice and text conversations",
      "WhatsApp integration",
      "Priority customer support",
      "Access to all coaching templates"
    ],
    popular: true,
    current: true
  },
  {
    id: "team",
    name: "Team",
    price: 49.99,
    description: "For small teams and organizations",
    features: [
      "Everything in Professional",
      "Up to 5 team members",
      "Team analytics dashboard",
      "Shared coaching resources",
      "Custom training for your team's AI coach",
      "Dedicated account manager"
    ]
  }
];

const faqs = [
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "How do I change my plan?",
    answer:
      "You can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all plans come with a 7-day free trial. You won't be charged until the trial period ends.",
  },
];

const SubscriptionPlans = () => {
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const handleSubscribe = (planId: string) => {
    setIsLoading({ [planId]: true });
    
    // Simulate subscription process
    setTimeout(() => {
      setIsLoading({});
      
      // Find if this is the current plan
      const plan = plans.find(p => p.id === planId);
      if (plan?.current) {
        toast({
          title: "Already subscribed",
          description: `You are already subscribed to the ${plan.name} plan.`,
        });
      } else {
        toast({
          title: "Stripe Checkout",
          description: "Redirecting to secure payment page...",
        });
        // In a real app, redirect to Stripe checkout here
      }
    }, 1000);
  };

  const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-left focus:outline-none"
        >
          <h4 className="text-sm font-medium text-gray-800">{question}</h4>
          {open ? <HiChevronUp className="w-4 h-4 text-gray-500" /> : <HiChevronDown className="w-4 h-4 text-gray-500" />}
        </button>
        {open && (
          <p className="mt-2 text-sm text-gray-600 transition-all duration-200">
            {answer}
          </p>
        )}
      </div>
    );
  };
  

  return (
    <ClientLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscription Plans</h1>
          <p className="text-muted-foreground mt-2">
            Choose the plan that best fits your coaching needs
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative overflow-hidden ${plan.popular ? "border-coach-500 dark:border-coach-400" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="h-16 w-16 bg-coach-500 rotate-45 transform origin-bottom-left"></div>
                  <span className="absolute top-[5px] right-[4px] text-[10px] text-white font-semibold">POPULAR</span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <span>{plan.name}</span>
                  {plan.current && (
                    <span className="ml-2 text-xs bg-coach-100 dark:bg-coach-900 text-coach-700 dark:text-coach-300 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-600 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "outline" : (plan.popular ? "default" : "secondary")}
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isLoading[plan.id]}
                >
                  {isLoading[plan.id] ? (
                    "Processing..."
                  ) : plan.current ? (
                    "Manage Subscription"
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6 mt-10 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Subscription FAQs</h3>
          <div className="mt-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </ClientLayout>
  );
};

export default SubscriptionPlans;
