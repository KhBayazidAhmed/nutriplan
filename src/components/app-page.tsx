"use client";

import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Activity,
  CheckCircle,
  Users,
  Star,
  Weight,
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
import { Navigation } from "./components-navigation";

export function BlockPage() {
  const dietaryCategories = [
    {
      name: "PCOS",
      icon: Utensils,
      description: "Balanced nutrition for hormonal health",
    },
    {
      name: "Diabetes",
      icon: Activity,
      description: "Glucose-conscious meal plans",
    },
    {
      name: "Weight Loss",
      icon: Weight,
      description: "Lose weight and build muscle",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personalized Nutrition Plans
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover meal plans tailored to your specific health goals and
            dietary needs.
          </p>
          <Link href="/customize">
            <Button size="lg">
              Customize Your Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
            Choose Your Health Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {dietaryCategories.map((category) => (
              <Card
                key={category.name}
                className="transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expertly crafted meals to support your{" "}
                    {category.name.toLowerCase()} management journey.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/customize`} className="w-full">
                    <Button className="w-full">
                      Select Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
            Why Choose NutriPlan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Personalized Plans",
                description: "Tailored to your unique needs and goals",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Access to certified nutritionists",
              },
              {
                icon: Star,
                title: "Quality Ingredients",
                description: "Fresh, locally-sourced produce",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
        {/* <NutritionistSupportPage /> */}
        <section className="mb-12 md:mb-16 bg-primary/5 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Choose Your Plan",
                description: "Select a plan that fits your health goals",
              },
              {
                step: 2,
                title: "Customize",
                description: "Tailor your meals to your preferences",
              },
              {
                step: 3,
                title: "Receive Meals",
                description: "Get fresh, pre-portioned ingredients delivered",
              },
              {
                step: 4,
                title: "Enjoy & Thrive",
                description: "Savor nutritious meals and feel great",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of others who have discovered the power of
            personalized nutrition with NutriPlan.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
