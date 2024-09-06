"use client";
import React from "react";
import MainComponent from "./components/mainComponent";
import "./page.css";

export default function Home() {
  return (
    <MainComponent>
      <section className="section">
        <div
          style={{
            width: "30%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#F89825",
              margin: "0px",
              fontSize: "60px",
              fontWeight: "bold",
            }}
          >
            Hope House
          </h1>
          <h4 style={{margin: "0px", fontWeight: "400", fontSize: "20px"}}>
            Acreditamos que através do esporte, educação e arte vamos mudar a
            realidade de muitas crianças
          </h4>
        </div>
      </section>
      <div style={{height: "200vh", background: "transparent"}}></div>
    </MainComponent>
  );
}
