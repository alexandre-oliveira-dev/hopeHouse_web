/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import Link from "next/link";
import {FiMenu} from "react-icons/fi";

export default function Header() {
  return (
    <header className="header-component">
      <div className="logo">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" />
        </Link>
      </div>
      <nav className="nav-bar">
        <Link className="nav-btn" href={"../donate"}>
          Apadrinhe uma criança
        </Link>
        <Link className="nav-btn" href={""}>
          Doe Agora
        </Link>
        <Link className="nav-btn" href={""}>
          Seja Um Voluntario
        </Link>
        <button className="nav-btn">
          Menu <FiMenu></FiMenu>
        </button>
      </nav>
    </header>
  );
}
