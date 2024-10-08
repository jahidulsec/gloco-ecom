import Navbar from "@/components/navbar/primary/Navbar";
import SecondNavbar from "@/components/navbar/secondary/SecondNavbar";
import React from "react";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <SecondNavbar />
      {children}
    </div>
  );
}
