"use client";

import { Navigation } from "@/components/components-navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ClipboardList,
  Utensils,
  Truck,
  Apple,
  MessageCircle,
  BarChart,
} from "lucide-react";
import Link from "next/link";

export default function BlockPage() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Choose Your Plan",
      description:
        "Select a plan that aligns with your health goals and dietary preferences.",
      details:
        "Browse our range of meal plans tailored for various health needs such as weight management, muscle gain, diabetes management, and more. You can also customize your plan based on your dietary restrictions and food preferences.",
    },
    {
      icon: Utensils,
      title: "Customize Your Meals",
      description:
        "Tailor your meal plan to your tastes and nutritional needs.",
      details:
        "Our AI-powered system generates a personalized meal plan based on your chosen plan and preferences. You can further customize your meals, swap ingredients, or adjust portion sizes to perfectly fit your lifestyle.",
    },
    {
      icon: Truck,
      title: "Receive Your Deliveries",
      description:
        "Get fresh, pre-portioned ingredients delivered right to your door.",
      details:
        "We source high-quality, fresh ingredients from local suppliers. Your ingredients are carefully portioned and packed to ensure freshness. Deliveries are made weekly, and you can easily adjust your delivery schedule through your account.",
    },
    {
      icon: Apple,
      title: "Cook and Enjoy",
      description:
        "Follow our simple recipes to prepare delicious, nutritious meals.",
      details:
        "Each delivery comes with easy-to-follow recipe cards. Our recipes are designed to be simple yet delicious, typically taking 30 minutes or less to prepare. Enjoy your meals knowing they&apos;re perfectly balanced for your nutritional needs.",
    },
    {
      icon: MessageCircle,
      title: "Get Expert Support",
      description: "Access our team of nutritionists for personalized advice.",
      details:
        "Our certified nutritionists are available for one-on-one consultations to discuss your progress, answer questions, and provide expert guidance. You can schedule video calls or use our chat feature for quick queries.",
    },
    {
      icon: BarChart,
      title: "Track Your Progress",
      description:
        "Monitor your health journey with our integrated tracking tools.",
      details:
        "Use our mobile app to log your meals, track your progress, and see how your nutrition is improving over time. Set goals, monitor key health metrics, and celebrate your achievements along the way.",
    },
  ];

  return (
    <div className=" min-h-screen bg-background ">
      <Navigation />
      <main className="container mx-auto px-4 py-8 md:py-12 space-y-12">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How NutriPlan Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how NutriPlan makes healthy eating easy, personalized, and
            delicious in just a few simple steps.
          </p>
        </section>

        <section>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Step {index + 1}: {step.title}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Tabs defaultValue="ordering" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="ordering">Ordering</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="ordering">
              <Card>
                <CardHeader>
                  <CardTitle>Ordering Process</CardTitle>
                  <CardDescription>
                    Learn about our ordering system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="font-semibold">How do I place an order?</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply sign up, choose your plan, customize your meals, and
                    proceed to checkout. Your first delivery will be scheduled
                    based on your preferences.
                  </p>
                  <h3 className="font-semibold">Can I change my order?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can modify your order up to 3 days before your
                    scheduled delivery date through your account dashboard.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="delivery">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                  <CardDescription>
                    Everything you need to know about our delivery process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="font-semibold">
                    When will I receive my delivery?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deliveries are made weekly on the day you choose during
                    signup. You can change your delivery day in your account
                    settings.
                  </p>
                  <h3 className="font-semibold">
                    How are the ingredients packaged?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All ingredients are carefully portioned and packed in
                    insulated boxes with ice packs to ensure freshness during
                    transit.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Support</CardTitle>
                  <CardDescription>Get help when you need it</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="font-semibold">
                    How can I contact customer support?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our customer support team is available via chat, email, or
                    phone from 9 AM to 9 PM EST, seven days a week.
                  </p>
                  <h3 className="font-semibold">
                    Can I speak with a nutritionist?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can schedule a consultation with one of our
                    certified nutritionists through your account dashboard.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            eating habits with NutriPlan. Start your journey to better health
            today!
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Your Free Trial
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
