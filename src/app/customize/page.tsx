"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CalendarDays,
  CalendarRange,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Navigation } from "@/components/components-navigation";

export default function AppPlanSelectionPage() {
  const durations = [
    {
      name: "Daily",
      icon: Calendar,
      description: "Perfect for trying out or short-term goals",
    },
    {
      name: "Weekly",
      icon: CalendarDays,
      description: "Ideal for establishing a routine",
    },
    {
      name: "Monthly",
      icon: CalendarRange,
      description: "Best value for long-term commitment",
    },
  ];

  return (
    <>
      {" "}
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Choose Your Plan Duration</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the duration that best fits your lifestyle and health goals.
            Flexibility is key to your success.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {durations.map((duration) => (
              <Card
                key={duration.name}
                className="transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <duration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{duration.name} Plan</CardTitle>
                  <CardDescription>{duration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Customized meal plans</li>
                    <li>Nutritionist support</li>
                    <li>Recipe instructions</li>
                    {duration.name !== "Daily" && (
                      <li>Weekly progress tracking</li>
                    )}
                    {duration.name === "Monthly" && (
                      <li>Monthly consultation included</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/nutritionist-support?duration=${duration.name.toLowerCase()}`}
                    className="w-full"
                  >
                    <Button className="w-full">
                      Select {duration.name} Plan{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Flexible Plans for Your Changing Needs
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our plans are designed to adapt to your lifestyle. Start with what
            feels comfortable, and adjust as you go. Remember, consistency is
            key to achieving your health goals.
          </p>
          <Button variant="outline" size="lg">
            Learn More About Our Plans <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can switch between daily, weekly, or monthly plans at
                any time to suit your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What if I have dietary restrictions?
              </h3>
              <p className="text-muted-foreground">
                Our nutritionists will work with you to create a plan that
                accommodates any dietary restrictions or preferences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How often will I receive new meal plans?
              </h3>
              <p className="text-muted-foreground">
                Meal plans are provided according to your chosen duration -
                daily, weekly, or monthly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is nutritionist support included in all plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, all plans include access to our team of certified
                nutritionists for guidance and support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
