"use client";

import { Navigation } from "@/components/components-navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function BlockPage() {
  const plans = [
    {
      name: "Basic",
      price: 9.99,
      features: [
        "Personalized meal plans",
        "Weekly grocery lists",
        "Basic nutritional guidance",
      ],
    },
    {
      name: "Pro",
      price: 19.99,
      features: [
        "All Basic features",
        "Access to nutritionist support",
        "Customizable meal options",
        "Progress tracking",
      ],
    },
    {
      name: "Premium",
      price: 29.99,
      features: [
        "All Pro features",
        "Priority nutritionist support",
        "Advanced health metrics",
        "Exclusive recipes",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Choose Your Plan
        </h1>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
{/*                 <CardDescription>${plan.price}/month</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
