import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const adlery_pro = localFont({
  src: "./fonts/adlery-pro.swash.woff",
  variable: "--font-adlery-pro",
  weight: "400 700 900",
});
export const metadata: Metadata = {
  title:
    "Personalized Diet Plans for PCOS, Diabetes, and Muscle Gain | NutriPlan",
  description:
    "Discover tailored diet plans for PCOS, diabetes, and muscle gain. Customize your meal plans and start your wellness journey with Nutriplan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${adlery_pro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
