import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen justify-center items-center">
      {children}
    </main>
  );
}

export default AuthLayout;
