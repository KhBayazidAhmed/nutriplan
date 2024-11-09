"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Utensils, Heart, Leaf, Users } from "lucide-react";
import { Navigation } from "@/components/components-navigation";

export default function BlockPage() {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Chief Nutritionist",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Rodriguez",
      role: "Head Chef",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Johnson",
      role: "Tech Lead",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Lee",
      role: "Customer Experience Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const values = [
    {
      icon: Utensils,
      title: "Nutritional Excellence",
      description: "We prioritize science-based nutrition in every meal plan.",
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      description: "Your health goals are at the heart of everything we do.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We source ingredients responsibly and minimize our environmental impact.",
    },
    {
      icon: Users,
      title: "Inclusive Wellness",
      description:
        "We cater to diverse dietary needs and cultural preferences.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 md:py-12 space-y-12">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            About NutriPlan
          </h1>
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg">
              NutriPlan is a revolutionary meal planning service dedicated to
              helping individuals achieve their health and wellness goals
              through personalized nutrition. Founded in 2020 by a team of
              passionate nutritionists, chefs, and tech experts, we&apos;ve
              grown from a small startup to a leading force in personalized
              nutrition.
            </p>
            <p className="text-base md:text-lg">
              Our journey began when our founders recognized a gap in the market
              for truly personalized, science-based meal planning that could
              cater to individual health needs and taste preferences. Today, we
              serve thousands of customers across the country, helping them lead
              healthier, more vibrant lives through the power of good nutrition.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Mission
          </h2>
          <p className="text-base md:text-lg">
            At NutriPlan, our mission is to make personalized, healthy eating
            accessible, convenient, and enjoyable for everyone. We believe that
            good nutrition is the foundation of overall wellness, and we&apos;re
            committed to empowering our customers with the tools, knowledge, and
            support they need to make lasting, positive changes in their lives.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center mb-1">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-base md:text-lg">
            We&apos;re always looking for passionate individuals to join our
            team and help us revolutionize the way people approach nutrition and
            wellness. If you&apos;re excited about making a real difference in
            people&apos;s lives through innovative technology and personalized
            nutrition, we&apos;d love to hear from you. Check out our careers
            page for current openings or reach out to us to learn more about how
            you can be part of the NutriPlan journey.
          </p>
        </section>
      </main>
    </div>
  );
}
