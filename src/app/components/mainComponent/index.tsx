"use client";
import React from "react";
import "./style.css";
import Header from "../header";
import Footer from "../footer";
import Menu from "../menu";

interface Props {
  children: React.ReactNode;
}

export default function MainComponent({children}: Props) {
  return (
    <main className="main-compoenent">
      <Header></Header>
      <Menu></Menu>
      {children}
      <Footer></Footer>
    </main>
  );
}
