import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import ProgressProvider from "@/contexts/ProgressProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebus = Bebas_Neue({
  subsets: ['latin'],
  variable: "--font-bebus",
  weight: '400'
})

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${bebus.variable} antialiased`}>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
