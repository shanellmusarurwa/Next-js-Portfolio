"use client";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDrkMode, setIsDrkMode] = React.useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDrkMode(true);
    } else {
      setIsDrkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDrkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDrkMode]);
  return (
    <>
      <Navbar isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <Header isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <About isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <Services isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <Work isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <Contact isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
      <Footer isDrkMode={isDrkMode} setIsDrkMode={setIsDrkMode} />
    </>
  );
}
