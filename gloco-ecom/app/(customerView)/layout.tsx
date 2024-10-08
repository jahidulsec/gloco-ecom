import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
