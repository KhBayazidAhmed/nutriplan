"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Subscription data:", { phone, email });
    router.push("/payment");
  };

  return (
    <>
      {" "}
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Set Up Your Subscription</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You&apos;re one step closer to your personalized meal plan.
            Let&apos;s make sure we can reach you with important updates and
            delicious recipes.
          </p>
        </section>

        <section className="mb-16">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                We&apos;ll use this to send you your meal plans and important
                updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} className="w-full">
                Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            What&apos;s Included in Your Subscription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Personalized meal plans",
              "Nutritionist support",
              "Recipe instructions",
              "Grocery lists",
              "Progress tracking",
              "Exclusive content",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your personal information is safe with us. We use industry-standard
            encryption to protect your data and will never share it with third
            parties without your consent.
          </p>
          <Button variant="outline" size="lg">
            Read Our Privacy Policy <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </div>
    </>
  );
}
