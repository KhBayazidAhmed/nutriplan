"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CreditCard, Banknote, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function BlockPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    console.log("Payment method:", paymentMethod);
    router.push("/delivery-tracking");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Secure Payment</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your preferred payment method to complete your subscription and
          start your journey to better health.
        </p>
      </section>

      <section className="mb-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Select Payment Method</CardTitle>
            <CardDescription>
              All transactions are secure and encrypted.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-4">
                  <RadioGroupItem value="bkash" id="bkash" />
                  <Label
                    htmlFor="bkash"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Bkash</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label
                    htmlFor="cod"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Banknote className="h-5 w-5" />
                    <span>Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={!paymentMethod}
            >
              Complete Payment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Secure Transactions Guaranteed
        </h2>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Lock className="h-8 w-8 text-primary" />
          <p className="text-xl text-muted-foreground">
            Your payment information is always protected with state-of-the-art
            encryption.
          </p>
        </div>
        <Button variant="outline" size="lg">
          Learn More About Our Security Measures{" "}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <section className="mt-16 bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is my payment information safe?
            </h3>
            <p className="text-muted-foreground">
              Yes, we use industry-standard encryption to protect all payment
              information.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Can I change my payment method later?
            </h3>
            <p className="text-muted-foreground">
              You can update your payment method at any time in your account
              settings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              When will I be charged?
            </h3>
            <p className="text-muted-foreground">
              For Bkash, you&apos;ll be charged immediately. For Cash on
              Delivery, you&apos;ll pay when you receive your first meal
              delivery.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              What if I want to cancel my subscription?
            </h3>
            <p className="text-muted-foreground">
              You can cancel your subscription at any time. Refunds are
              processed according to our refund policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
