"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Video, FileText } from "lucide-react";
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

export default function BlockPage() {
  const supportOptions = [
    {
      title: "Chat with a Nutritionist",
      icon: MessageSquare,
      description: "Get instant answers to your nutrition questions",
      benefits: [
        "Real-time support",
        "Quick answers to simple queries",
        "Available 24/7",
      ],
    },
    {
      title: "Video Consultation",
      icon: Video,
      description:
        "Schedule a face-to-face video call with a certified nutritionist",
      benefits: [
        "In-depth discussion of your health goals",
        "Personalized advice",
        "Visual demonstrations",
      ],
    },
    {
      title: "Personalized Plan Review",
      icon: FileText,
      description: "Have a nutritionist review and adjust your meal plan",
      benefits: [
        "Detailed analysis of your current plan",
        "Suggestions for optimization",
        "Written report provided",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Expert Nutritionist Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of certified nutritionists is here to guide you on your
            journey to better health. Choose the support option that best fits
            your needs.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <Card
                key={option.title}
                className="transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {option.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/subscription-setup" className="w-full">
                    <Button className="w-full">
                      {option.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Why Consult with Our Nutritionists?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our nutritionists are not just experts in diet—they&apos;re your
            partners in achieving optimal health. With personalized advice and
            ongoing support, you&apos;ll have the guidance you need to reach
            your goals.
          </p>
          <Button variant="outline" size="lg">
            Learn About Our Nutritionists{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How often can I consult with a nutritionist?
              </h3>
              <p className="text-muted-foreground">
                You can schedule consultations as often as needed, based on your
                subscription plan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Are the nutritionists certified?
              </h3>
              <p className="text-muted-foreground">
                Yes, all our nutritionists are certified professionals with
                extensive experience in their field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I switch between support options?
              </h3>
              <p className="text-muted-foreground">
                You can choose different support options each time based on your
                current needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What if I need support outside of scheduled times?
              </h3>
              <p className="text-muted-foreground">
                Our chat support is available 24/7 for any urgent questions or
                concerns you may have.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
