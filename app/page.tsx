import Image from "next/image";
import Script from "next/script";
import Navbar from "./components/parts/Navbar";
import Header from "./components/parts/Header";
import Section from "./components/parts/section";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Header />
        <Section />
      </main>
    </React.Fragment>
  );
}
