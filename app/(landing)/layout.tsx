import { AOSInit } from "@/components/aos";
import Footer from "@/components/wrapper/footer";
import Header from "@/components/wrapper/header";

import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <Header />
      <div className="mt-24">{children}</div>
      <Footer />
    </>
  );
}
