import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import ProgressProvider from "@/contexts/ProgressProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebus = Hind_Siliguri({
  subsets: ['latin'],
  variable: "--font-bangla",
  weight: '400'
})

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Waveform",
  description: "An trusted e-commerce",
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
